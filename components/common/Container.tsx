import React, { ReactNode } from 'react';
import { View, SafeAreaView, StyleSheet, ScrollView, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import designSystem from '../../utils/design-system';
import Header from './Header';

const { colors, spacing } = designSystem;

interface ContainerProps {
  children: ReactNode;
  headerTitle?: string;
  showHeader?: boolean;
  showBackButton?: boolean;
  onBackPress?: () => void;
  rightComponent?: ReactNode;
  scrollable?: boolean;
  style?: ViewStyle;
  contentContainerStyle?: ViewStyle;
  gradientColors?: string[];
}

const Container: React.FC<ContainerProps> = ({
  children,
  headerTitle,
  showHeader = true,
  showBackButton = false,
  onBackPress,
  rightComponent,
  scrollable = true,
  style,
  contentContainerStyle,
  gradientColors = [
    colors.gradients.primary[0],
    colors.gradients.primary[1],
    'rgba(0, 0, 0, 0.8)',
  ],
}) => {
  const renderContent = () => {
    if (scrollable) {
      return (
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={[styles.scrollContent, contentContainerStyle]}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      );
    }
    
    return (
      <View style={[styles.content, contentContainerStyle]}>
        {children}
      </View>
    );
  };
  
  return (
    <LinearGradient colors={gradientColors} style={[styles.container, style]}>
      <StatusBar style="light" />
      <SafeAreaView style={styles.safeArea}>
        {showHeader && (
          <Header
            title={headerTitle || ''}
            showBackButton={showBackButton}
            onBackPress={onBackPress}
            rightComponent={rightComponent}
          />
        )}
        {renderContent()}
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: spacing.md,
    paddingBottom: spacing.xl,
  },
  content: {
    flex: 1,
    padding: spacing.md,
  },
});

export default Container;