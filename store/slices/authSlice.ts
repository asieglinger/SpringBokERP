import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import authService from '../../services/auth';
import { ERROR_MESSAGES } from '../../utils/constants';

// Define types
interface User {
  id: string;
  email: string;
  name?: string;
  subscription_tier?: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

// Initial state
const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

// Async thunks
export const signUp = createAsyncThunk(
  'auth/signUp',
  async (credentials: { email: string; password: string; name: string }, { rejectWithValue }) => {
    try {
      const response = await authService.signUp(credentials);
      return {
        user: response.user,
        token: response.session?.access_token || null,
      };
    } catch (error: any) {
      return rejectWithValue(error.message || ERROR_MESSAGES.AUTH);
    }
  }
);

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (credentials: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await authService.signIn(credentials);
      return {
        user: response.user,
        token: response.session?.access_token || null,
      };
    } catch (error: any) {
      return rejectWithValue(error.message || ERROR_MESSAGES.AUTH);
    }
  }
);

export const signOut = createAsyncThunk(
  'auth/signOut',
  async (_, { rejectWithValue }) => {
    try {
      await authService.signOut();
      return null;
    } catch (error: any) {
      return rejectWithValue(error.message || ERROR_MESSAGES.DEFAULT);
    }
  }
);

export const getSession = createAsyncThunk(
  'auth/getSession',
  async (_, { rejectWithValue }) => {
    try {
      const session = await authService.getSession();
      if (!session) return { user: null, token: null };
      
      const user = await authService.getCurrentUser();
      return {
        user,
        token: session.access_token || null,
      };
    } catch (error: any) {
      return rejectWithValue(error.message || ERROR_MESSAGES.DEFAULT);
    }
  }
);

// Auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Sign Up
    builder.addCase(signUp.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = !!action.payload.user;
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });

    // Sign In
    builder.addCase(signIn.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = !!action.payload.user;
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });

    // Sign Out
    builder.addCase(signOut.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(signOut.fulfilled, (state) => {
      state.isLoading = false;
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    });
    builder.addCase(signOut.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });

    // Get Session
    builder.addCase(getSession.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getSession.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = !!action.payload.user;
    });
    builder.addCase(getSession.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
  },
});

// Export actions and reducer
export const { setUser, setToken, clearError } = authSlice.actions;
export default authSlice.reducer;