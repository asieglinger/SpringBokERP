import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet, ViewStyle } from 'react-native';
import designSystem from '../../utils/design-system';
import Card from './Card';

const { colors, spacing, typography, glassEffects } = designSystem;

interface LoadingProps {
  text?: string;
  fullScreen?: boolean;
  overlay?: boolean;
  size?: 'small' | 'large';
  style?: ViewStyle;
}

const Loading: React.FC<LoadingProps> = ({
  text,
  fullScreen = false,
  overlay = false,
  size = 'large',
  style,
}) => {
  // If fullScreen, display a full-screen loader
  if (fullScreen) {
    return (
      <View style={[styles.fullScreen, overlay && styles.overlay]}>
        <Card variant="raised" style={styles.card}>
          <ActivityIndicator size={size} color={colors.primary.main} />
          {text && <Text style={styles.text}>{text}</Text>}
        </Card>
      </View>
    );
  }
  
  // Otherwise, display an inline loader
  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator size={size} color={colors.primary.main} />
      {text && <Text style={styles.text}>{text}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  card: {
    padding: spacing.xl,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
  },
  text: {
    marginTop: spacing.md,
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.md,
    color: colors.neutral.white,
    textAlign: 'center',
  },
});

export default Loading;