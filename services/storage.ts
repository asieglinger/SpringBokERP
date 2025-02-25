import supabase from './api';
import * as FileSystem from 'expo-file-system';
import { decode } from 'base64-arraybuffer';

// Storage paths
const STORAGE_PATHS = {
  DOCUMENTS: 'documents',
  INVOICES: 'invoices',
  ESTIMATES: 'estimates',
  CONTRACTS: 'contracts',
  PROFILES: 'profiles',
};

/**
 * Gets a user-specific storage path
 * @param {string} userId - User ID
 * @param {string} path - Base path in storage
 * @returns {string} Full storage path
 */
const getUserStoragePath = (userId: string, path: string) => {
  return `users/${userId}/${path}`;
};

export const storageService = {
  /**
   * Upload a file to storage
   * @param {string} userId - User ID
   * @param {string} path - Storage path (from STORAGE_PATHS)
   * @param {string} fileName - Desired file name
   * @param {string} uri - Local file URI
   * @param {string} contentType - MIME type of the file
   * @returns {Promise<string>} Public URL of uploaded file
   */
  uploadFile: async (
    userId: string,
    path: string,
    fileName: string,
    uri: string,
    contentType: string
  ): Promise<string> => {
    try {
      const fullPath = getUserStoragePath(userId, path);
      
      // Read the file as base64
      const fileBase64 = await FileSystem.readAsStringAsync(uri, {
        encoding: FileSystem.EncodingType.Base64,
      });
      
      // Convert to ArrayBuffer
      const fileBuffer = decode(fileBase64);
      
      // Upload to Supabase Storage
      const { data, error } = await supabase.storage
        .from(fullPath)
        .upload(fileName, fileBuffer, {
          contentType,
          upsert: true,
        });
      
      if (error) throw error;
      
      // Get the public URL
      const { data: urlData } = supabase.storage
        .from(fullPath)
        .getPublicUrl(fileName);
      
      return urlData.publicUrl;
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  },
  
  /**
   * Delete a file from storage
   * @param {string} userId - User ID
   * @param {string} path - Storage path (from STORAGE_PATHS)
   * @param {string} fileName - File name to delete
   * @returns {Promise<void>}
   */
  deleteFile: async (
    userId: string,
    path: string,
    fileName: string
  ): Promise<void> => {
    try {
      const fullPath = getUserStoragePath(userId, path);
      
      const { error } = await supabase.storage
        .from(fullPath)
        .remove([fileName]);
      
      if (error) throw error;
    } catch (error) {
      console.error('Error deleting file:', error);
      throw error;
    }
  },
  
  /**
   * Get a list of files in a storage path
   * @param {string} userId - User ID
   * @param {string} path - Storage path (from STORAGE_PATHS)
   * @returns {Promise<Array>} List of files
   */
  listFiles: async (userId: string, path: string): Promise<Array<any>> => {
    try {
      const fullPath = getUserStoragePath(userId, path);
      
      const { data, error } = await supabase.storage
        .from(fullPath)
        .list();
      
      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error listing files:', error);
      throw error;
    }
  },
  
  /**
   * Download a file from storage to local filesystem
   * @param {string} userId - User ID
   * @param {string} path - Storage path (from STORAGE_PATHS)
   * @param {string} fileName - File name to download
   * @param {string} localPath - Path to save the file locally
   * @returns {Promise<string>} Local file URI
   */
  downloadFile: async (
    userId: string,
    path: string,
    fileName: string,
    localPath: string
  ): Promise<string> => {
    try {
      const fullPath = getUserStoragePath(userId, path);
      
      // Get the public URL
      const { data: urlData } = supabase.storage
        .from(fullPath)
        .getPublicUrl(fileName);
      
      // Download using Expo FileSystem
      const fileUri = `${localPath}/${fileName}`;
      const downloadResult = await FileSystem.downloadAsync(
        urlData.publicUrl,
        fileUri
      );
      
      return downloadResult.uri;
    } catch (error) {
      console.error('Error downloading file:', error);
      throw error;
    }
  },
  
  PATHS: STORAGE_PATHS,
};

export default storageService;