import supabase from './api';
import { SUBSCRIPTION_TIERS } from '../utils/constants';

interface SignUpData {
  email: string;
  password: string;
  name: string;
}

interface SignInData {
  email: string;
  password: string;
}

// User authentication functions
export const authService = {
  /**
   * Sign up a new user
   * @param {SignUpData} data - User sign up data
   * @returns Promise that resolves to the created user or error
   */
  signUp: async ({ email, password, name }: SignUpData) => {
    try {
      // Create user in Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (authError) throw authError;

      if (authData.user) {
        // Create user profile in the users table
        const { error: profileError } = await supabase
          .from('users')
          .insert([
            {
              id: authData.user.id,
              email,
              name,
              subscription_tier: SUBSCRIPTION_TIERS.BASIC,
            },
          ]);

        if (profileError) throw profileError;
      }

      return { user: authData.user, session: authData.session };
    } catch (error) {
      console.error('Error signing up:', error);
      throw error;
    }
  },

  /**
   * Sign in an existing user
   * @param {SignInData} data - User sign in credentials
   * @returns Promise that resolves to the session or error
   */
  signIn: async ({ email, password }: SignInData) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error signing in:', error);
      throw error;
    }
  },

  /**
   * Sign out the current user
   * @returns Promise that resolves when sign out is complete
   */
  signOut: async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  },

  /**
   * Get the current session
   * @returns Promise that resolves to the current session if it exists
   */
  getSession: async () => {
    try {
      const { data, error } = await supabase.auth.getSession();
      if (error) throw error;
      return data.session;
    } catch (error) {
      console.error('Error getting session:', error);
      throw error;
    }
  },

  /**
   * Get the current user
   * @returns Promise that resolves to the current user if authenticated
   */
  getCurrentUser: async () => {
    try {
      const { data, error } = await supabase.auth.getUser();
      if (error) throw error;
      return data.user;
    } catch (error) {
      console.error('Error getting current user:', error);
      throw error;
    }
  },

  /**
   * Reset password for a user
   * @param {string} email - Email to send password reset instructions to
   * @returns Promise that resolves when reset email is sent
   */
  resetPassword: async (email: string) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email);
      if (error) throw error;
    } catch (error) {
      console.error('Error resetting password:', error);
      throw error;
    }
  },

  /**
   * Update password for authenticated user
   * @param {string} password - New password
   * @returns Promise that resolves when password is updated
   */
  updatePassword: async (password: string) => {
    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;
    } catch (error) {
      console.error('Error updating password:', error);
      throw error;
    }
  },
};

export default authService;