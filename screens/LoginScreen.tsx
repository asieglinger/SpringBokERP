import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Alert as RNAlert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { RootState } from '../store/store';
import { signIn } from '../store/slices/authSlice';
import { ROUTES } from '../utils/constants';
import designSystem from '../utils/design-system';
import { Container, Card, Input, Button, Alert } from '../components/common';

const { colors, spacing, typography } = designSystem;

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  
  const dispatch = useDispatch();
  const navigation = useNavigation();
  
  // Get authentication state from Redux
  const { isLoading, error } = useSelector((state: RootState) => state.auth);
  
  // Validate inputs
  const validateInputs = () => {
    let isValid = true;
    
    // Validate email
    if (!email.trim()) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError('Please enter a valid email');
      isValid = false;
    } else {
      setEmailError('');
    }
    
    // Validate password
    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      isValid = false;
    } else {
      setPasswordError('');
    }
    
    return isValid;
  };
  
  // Handle login
  const handleLogin = async () => {
    if (validateInputs()) {
      try {
        // @ts-ignore - fix typing for thunk action creators
        await dispatch(signIn({ email, password }));
      } catch (error) {
        RNAlert.alert('Login Failed', 'Failed to login. Please try again.');
      }
    }
  };
  
  // Navigate to the registration screen
  const navigateToRegister = () => {
    navigation.navigate(ROUTES.REGISTER as never);
  };
  
  return (
    <Container 
      showHeader={false} 
      gradientColors={[
        colors.gradients.primary[0], 
        colors.gradients.secondary[0], 
        'rgba(0, 0, 0, 0.9)'
      ]}
    >
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>SpringBokERP</Text>
        </View>
        
        <Card variant="raised" style={styles.card}>
          <Text style={styles.title}>Welcome Back</Text>
          
          {error && (
            <Alert 
              type="error" 
              message={error}
              style={styles.alert}
            />
          )}
          
          <Input
            label="Email"
            placeholder="yourname@example.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            error={emailError}
            fullWidth
          />
          
          <Input
            label="Password"
            placeholder="Your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            error={passwordError}
            fullWidth
          />
          
          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
          
          <Button
            title="Sign In"
            onPress={handleLogin}
            loading={isLoading}
            disabled={isLoading}
            fullWidth
            style={styles.signInButton}
          />
          
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Don't have an account? </Text>
            <TouchableOpacity onPress={navigateToRegister}>
              <Text style={styles.registerLink}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </Card>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.md,
  },
  logoContainer: {
    marginBottom: spacing.xl,
    alignItems: 'center',
  },
  logoText: {
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize['4xl'],
    color: colors.neutral.white,
    textAlign: 'center',
  },
  card: {
    width: '100%',
    maxWidth: 400,
    padding: spacing.xl,
  },
  title: {
    fontFamily: typography.fontFamily.semiBold,
    fontSize: typography.fontSize['2xl'],
    color: colors.neutral.white,
    marginBottom: spacing.xl,
    textAlign: 'center',
  },
  alert: {
    marginBottom: spacing.md,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginVertical: spacing.sm,
  },
  forgotPasswordText: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.sm,
    color: colors.primary.main,
  },
  signInButton: {
    marginTop: spacing.xl,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: spacing.xl,
  },
  registerText: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.md,
    color: colors.neutral.light,
  },
  registerLink: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.md,
    color: colors.primary.main,
  },
});

export default LoginScreen;