import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import designSystem from '../../utils/design-system';

const { colors, components, spacing } = designSystem;

interface AlertProps {
  title?: string;
  message: string;
  type?: 'success' | 'warning' | 'error' | 'info';
  onClose?: () => void;
  style?: ViewStyle;
}

const Alert: React.FC<AlertProps> = ({
  title,
  message,
  type = 'info',
  onClose,
  style,
}) => {
  // Map alert type to icon
  const getIcon = () => {
    switch (type) {
      case 'success':
        return 'checkmark-circle';
      case 'warning':
        return 'warning';
      case 'error':
        return 'close-circle';
      case 'info':
      default:
        return 'information-circle';
    }
  };
  
  return (
    <View 
      style={[
        components.alert.container,
        components.alert.variants[type],
        style,
      ]}
    >
      <View style={components.alert.icon}>
        <Ionicons
          name={getIcon()}
          size={24}
          color={colors.neutral.white}
        />
      </View>
      
      <View style={styles.content}>
        {title && (
          <Text style={components.alert.title}>{title}</Text>
        )}
        <Text style={components.alert.message}>{message}</Text>
      </View>
      
      {onClose && (
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Ionicons name="close" size={18} color={colors.neutral.light} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginLeft: spacing.sm,
  },
  closeButton: {
    padding: spacing.xs,
  },
});

export default Alert;