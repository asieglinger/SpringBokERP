import { format, parse, isValid } from 'date-fns';
import { DATE_FORMATS } from './constants';
import * as FileSystem from 'expo-file-system';

/**
 * Format a date to a specified format
 * @param {Date|string|number} date - Date to format
 * @param {string} formatStr - Format string (from DATE_FORMATS)
 * @returns {string} Formatted date string
 */
export const formatDate = (
  date: Date | string | number,
  formatStr: string = DATE_FORMATS.DISPLAY_DATE
): string => {
  try {
    const dateObj = typeof date === 'string' || typeof date === 'number' 
      ? new Date(date) 
      : date;
    
    if (!isValid(dateObj)) {
      return 'Invalid date';
    }
    
    return format(dateObj, formatStr);
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'Invalid date';
  }
};

/**
 * Parse a date string in a specified format
 * @param {string} dateStr - Date string to parse
 * @param {string} formatStr - Format string
 * @returns {Date|null} Parsed date or null if invalid
 */
export const parseDate = (
  dateStr: string,
  formatStr: string = DATE_FORMATS.ISO_DATE
): Date | null => {
  try {
    const parsedDate = parse(dateStr, formatStr, new Date());
    return isValid(parsedDate) ? parsedDate : null;
  } catch (error) {
    console.error('Error parsing date:', error);
    return null;
  }
};

/**
 * Format currency amounts 
 * @param {number} amount - Amount to format
 * @param {string} currencyCode - Currency code (default: USD)
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (
  amount: number,
  currencyCode: string = 'USD'
): string => {
  try {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currencyCode,
    }).format(amount);
  } catch (error) {
    console.error('Error formatting currency:', error);
    return `$${amount.toFixed(2)}`;
  }
};

/**
 * Generate a unique ID for temporary use 
 * @returns {string} Unique ID
 */
export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
};

/**
 * Get the file extension from a filename or URI
 * @param {string} fileNameOrUri - File name or URI
 * @returns {string} File extension (lowercase, without the dot)
 */
export const getFileExtension = (fileNameOrUri: string): string => {
  const parts = fileNameOrUri.split('.');
  if (parts.length <= 1) return '';
  return parts[parts.length - 1].toLowerCase();
};

/**
 * Get MIME type from file extension
 * @param {string} extension - File extension
 * @returns {string} MIME type
 */
export const getMimeType = (extension: string): string => {
  const types: { [key: string]: string } = {
    pdf: 'application/pdf',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    gif: 'image/gif',
    doc: 'application/msword',
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    xls: 'application/vnd.ms-excel',
    xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    txt: 'text/plain',
  };
  
  return types[extension.toLowerCase()] || 'application/octet-stream';
};

/**
 * Create a unique filename with timestamp
 * @param {string} originalName - Original file name
 * @returns {string} Unique filename
 */
export const createUniqueFileName = (originalName: string): string => {
  const timestamp = new Date().getTime();
  const extension = getFileExtension(originalName);
  const baseName = originalName.substring(0, originalName.lastIndexOf('.'));
  
  return `${baseName}_${timestamp}.${extension}`;
};

/**
 * Check if file exists on device
 * @param {string} uri - Local file URI
 * @returns {Promise<boolean>} True if file exists
 */
export const fileExists = async (uri: string): Promise<boolean> => {
  try {
    const fileInfo = await FileSystem.getInfoAsync(uri);
    return fileInfo.exists;
  } catch (error) {
    console.error('Error checking file existence:', error);
    return false;
  }
};

/**
 * Convert bytes to human-readable file size
 * @param {number} bytes - File size in bytes
 * @returns {string} Human-readable file size
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 B';
  
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  
  return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
};