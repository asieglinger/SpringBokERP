import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Alert as RNAlert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { RootState } from '../store/store';
import { signUp } from '../store/slices/authSlice';
import { ROUTES } from '../utils/constants';
import designSystem from '../utils/design-system';
import { Container, Card, Input, Button, Alert } from '../components/common';

const { colors, spacing, typography } = designSystem;

const RegisterScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  
  const dispatch = useDispatch();
  const navigation = useNavigation();
  
  // Get authentication state from Redux
  const { isLoading, error } = useSelector((state: RootState) => state.auth);
  
  // Validate inputs
  const validateInputs = () => {
    let isValid = true;
    
    // Validate name
    if (!name.trim()) {
      setNameError('Name is required');
      isValid = false;
    } else {
      setNameError('');
    }
    
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
    
    // Validate confirm password
    if (!confirmPassword) {
      setConfirmPasswordError('Please confirm your password');
      isValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      isValid = false;
    } else {
      setConfirmPasswordError('');
    }
    
    return isValid;
  };
  
  // Handle registration
  const handleRegister = async () => {
    if (validateInputs()) {
      try {
        // @ts-ignore - fix typing for thunk action creators
        await dispatch(signUp({ name, email, password }));
      } catch (error) {
        RNAlert.alert('Registration Failed', 'Failed to register. Please try again.');
      }
    }
  };
  
  // Navigate to the login screen
  const navigateToLogin = () => {
    navigation.navigate(ROUTES.LOGIN as never);
  };
  
  return (
    <Container 
      showHeader={true}
      headerTitle="Create Account"
      showBackButton={true}
      onBackPress={navigateToLogin}
      gradientColors={[
        colors.gradients.secondary[0], 
        colors.gradients.primary[0], 
        'rgba(0, 0, 0, 0.9)'
      ]}
    >
      <View style={styles.container}>
        <Card variant="raised" style={styles.card}>
          <Text style={styles.title}>Join SpringBokERP</Text>
          
          {error && (
            <Alert 
              type="error" 
              message={error}
              style={styles.alert}
            />
          )}
          
          <Input
            label="Full Name"
            placeholder="Your full name"
            value={name}
            onChangeText={setName}
            error={nameError}
            fullWidth
          />
          
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
            placeholder="Create a password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            error={passwordError}
            helperText="Must be at least 6 characters"
            fullWidth
          />
          
          <Input
            label="Confirm Password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            error={confirmPasswordError}
            fullWidth
          />
          
          <Button
            title="Create Account"
            onPress={handleRegister}
            loading={isLoading}
            disabled={isLoading}
            fullWidth
            style={styles.registerButton}
          />
          
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account? </Text>
            <TouchableOpacity onPress={navigateToLogin}>
              <Text style={styles.loginLink}>Sign In</Text>
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
    paddingHorizontal: spacing.md,
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
  registerButton: {
    marginTop: spacing.xl,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: spacing.xl,
  },
  loginText: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.md,
    color: colors.neutral.light,
  },
  loginLink: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.md,
    color: colors.primary.main,
  },
});

export default RegisterScreen;