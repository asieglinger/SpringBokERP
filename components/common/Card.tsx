import React, { ReactNode } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import designSystem from '../../utils/design-system';

const { components } = designSystem;

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'raised' | 'flat' | 'frosted' | 'highlight';
  style?: ViewStyle;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  style,
}) => {
  // Map variant to design system styles
  const variantStyle = variant === 'default' 
    ? components.card.base
    : components.card.variants[variant] || components.card.base;
  
  return (
    <View style={[components.card.base, variantStyle, style]}>
      {children}
    </View>
  );
};

export default Card;