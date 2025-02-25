import React, { useState } from 'react';
import { 
  View, 
  TextInput, 
  Text, 
  StyleSheet, 
  ViewStyle, 
  TextStyle, 
  TextInputProps,
  TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import designSystem from '../../utils/design-system';

const { colors, components, spacing, typography } = designSystem;

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  helperText?: string;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  labelStyle?: TextStyle;
  secureTextEntry?: boolean;
  fullWidth?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  containerStyle,
  inputStyle,
  labelStyle,
  secureTextEntry = false,
  fullWidth = false,
  ...textInputProps
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(!secureTextEntry);
  
  return (
    <View style={[styles.container, fullWidth && styles.fullWidth, containerStyle]}>
      {label && (
        <Text style={[
          components.input.label, 
          error ? styles.errorLabel : null,
          labelStyle
        ]}>
          {label}
        </Text>
      )}
      
      <View style={styles.inputContainer}>
        <TextInput
          style={[
            components.input.base,
            isFocused && components.input.states.focused,
            error ? components.input.states.error : null,
            fullWidth && styles.fullWidth,
            inputStyle,
          ]}
          placeholderTextColor={colors.neutral.medium}
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...textInputProps}
        />
        
        {secureTextEntry && (
          <TouchableOpacity 
            style={styles.eyeIcon}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <Ionicons 
              name={isPasswordVisible ? 'eye-off' : 'eye'} 
              size={24} 
              color={colors.neutral.medium} 
            />
          </TouchableOpacity>
        )}
      </View>
      
      {error ? (
        <Text style={components.input.errorText}>{error}</Text>
      ) : helperText ? (
        <Text style={components.input.helperText}>{helperText}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.md,
  },
  inputContainer: {
    position: 'relative',
  },
  fullWidth: {
    width: '100%',
  },
  errorLabel: {
    color: colors.error.main,
  },
  eyeIcon: {
    position: 'absolute',
    right: spacing.sm,
    top: '25%',
    zIndex: 1,
  },
});

export default Input;