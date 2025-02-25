import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Switch, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import designSystem from './design-system';

const {
  colors,
  typography,
  spacing,
  borders,
  shadows,
  glassEffects,
  components
} = designSystem;

const DesignSystemShowcase = () => {
  return (
    <LinearGradient
      colors={['#1a2a6c', '#b21f1f', '#fdbb2d']}
      style={styles.container}
    >
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>SpringBokERP Glass Design System</Text>
        
        {/* Color Palette */}
        <SectionTitle>Color Palette</SectionTitle>
        <View style={styles.section}>
          <Text style={styles.sectionSubtitle}>Primary Colors</Text>
          <View style={styles.colorGrid}>
            {Object.entries(colors.primary).map(([name, color]) => (
              <ColorSwatch key={name} name={name} color={color} />
            ))}
          </View>
          
          <Text style={styles.sectionSubtitle}>Secondary Colors</Text>
          <View style={styles.colorGrid}>
            {Object.entries(colors.secondary).map(([name, color]) => (
              <ColorSwatch key={name} name={name} color={color} />
            ))}
          </View>
          
          <Text style={styles.sectionSubtitle}>State Colors</Text>
          <View style={styles.colorGrid}>
            <ColorSwatch name="Success" color={colors.success.main} />
            <ColorSwatch name="Warning" color={colors.warning.main} />
            <ColorSwatch name="Error" color={colors.error.main} />
            <ColorSwatch name="Info" color={colors.info.main} />
          </View>
          
          <Text style={styles.sectionSubtitle}>Neutral Colors</Text>
          <View style={styles.colorGrid}>
            {Object.entries(colors.neutral).map(([name, color]) => (
              <ColorSwatch key={name} name={name} color={color} />
            ))}
          </View>
          
          <Text style={styles.sectionSubtitle}>Glass Effects</Text>
          <View style={styles.colorGrid}>
            {Object.entries(colors.glass).map(([name, color]) => (
              <ColorSwatch key={name} name={name} color={color} />
            ))}
          </View>
        </View>
        
        {/* Typography */}
        <SectionTitle>Typography</SectionTitle>
        <View style={styles.section}>
          <Text style={styles.sectionSubtitle}>Font Sizes</Text>
          <View style={styles.typographyContainer}>
            {Object.entries(typography.fontSize).map(([name, size]) => (
              <Text key={name} style={[styles.text, { fontSize: size }]}>
                {name} ({size}px) - Example Text
              </Text>
            ))}
          </View>
          
          <Text style={styles.sectionSubtitle}>Font Weights</Text>
          <View style={styles.typographyContainer}>
            {Object.entries(typography.fontWeight).map(([name, weight]) => (
              <Text key={name} style={[styles.text, { fontWeight: weight }]}>
                {name} ({weight}) - Example Text
              </Text>
            ))}
          </View>
        </View>
        
        {/* Glass Effects */}
        <SectionTitle>Glass Effects</SectionTitle>
        <View style={styles.section}>
          <View style={styles.glassGrid}>
            {Object.entries(glassEffects).map(([name, style]) => (
              <View key={name} style={[styles.glassSwatch, style]}>
                <Text style={styles.glassSwatchText}>{name}</Text>
              </View>
            ))}
          </View>
        </View>
        
        {/* Button Components */}
        <SectionTitle>Buttons</SectionTitle>
        <View style={styles.section}>
          <Text style={styles.sectionSubtitle}>Variants</Text>
          <View style={styles.buttonGrid}>
            {Object.entries(components.button.variants).map(([name, style]) => (
              <TouchableOpacity 
                key={name} 
                style={[components.button.base, style]}
                activeOpacity={0.8}
              >
                <Text style={components.button.text}>{name}</Text>
              </TouchableOpacity>
            ))}
          </View>
          
          <Text style={styles.sectionSubtitle}>Sizes</Text>
          <View style={styles.buttonGrid}>
            {Object.entries(components.button.sizes).map(([name, style]) => (
              <TouchableOpacity 
                key={name} 
                style={[
                  components.button.base, 
                  components.button.variants.primary,
                  style
                ]}
                activeOpacity={0.8}
              >
                <Text style={components.button.text}>{name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        
        {/* Card Components */}
        <SectionTitle>Cards</SectionTitle>
        <View style={styles.cardSection}>
          {Object.entries(components.card.variants).map(([name, style]) => (
            <View key={name} style={[components.card.base, style]}>
              <Text style={styles.cardTitle}>{name} Card</Text>
              <Text style={styles.cardText}>
                This is an example of the {name} card variant with glass effect styling.
              </Text>
            </View>
          ))}
        </View>
        
        {/* Form Components */}
        <SectionTitle>Form Elements</SectionTitle>
        <View style={styles.section}>
          <Text style={components.input.label}>Input Label</Text>
          <View style={components.input.base}>
            <Text style={{ color: 'rgba(255, 255, 255, 0.5)' }}>Placeholder text...</Text>
          </View>
          <Text style={components.input.helperText}>Helper text goes here</Text>
          
          <View style={styles.formRow}>
            <View style={[
              components.checkbox.container, 
              components.checkbox.variants.primary
            ]}>
              <Text style={components.checkbox.checkmark}>✓</Text>
            </View>
            <Text style={styles.text}>Checkbox (checked)</Text>
          </View>
          
          <View style={styles.formRow}>
            <View style={[
              components.checkbox.container, 
              components.checkbox.unchecked
            ]} />
            <Text style={styles.text}>Checkbox (unchecked)</Text>
          </View>
          
          <View style={styles.formRow}>
            <View style={[
              components.toggle.container, 
              components.toggle.variants.primary
            ]}>
              <View style={[
                components.toggle.thumb, 
                { transform: [{ translateX: 22 }] }
              ]} />
            </View>
            <Text style={styles.text}>Toggle (on)</Text>
          </View>
          
          <View style={styles.formRow}>
            <View style={[
              components.toggle.container, 
              components.toggle.inactive
            ]}>
              <View style={components.toggle.thumb} />
            </View>
            <Text style={styles.text}>Toggle (off)</Text>
          </View>
        </View>
        
        {/* Badges and Alerts */}
        <SectionTitle>Badges & Alerts</SectionTitle>
        <View style={styles.section}>
          <Text style={styles.sectionSubtitle}>Badges</Text>
          <View style={styles.badgeGrid}>
            {Object.entries(components.badge.variants).map(([name, style]) => (
              <View key={name} style={[components.badge.container, style]}>
                <Text style={components.badge.text}>{name}</Text>
              </View>
            ))}
          </View>
          
          <Text style={styles.sectionSubtitle}>Alerts</Text>
          {Object.entries(components.alert.variants).map(([name, style]) => (
            <View key={name} style={[components.alert.container, style]}>
              <View style={components.alert.icon}>
                <Text style={{ fontSize: 18, color: colors.neutral.white }}>
                  {name === 'success' ? '✓' : name === 'warning' ? '⚠️' : name === 'error' ? '✕' : 'ℹ️'}
                </Text>
              </View>
              <View>
                <Text style={components.alert.title}>{name} Alert</Text>
                <Text style={components.alert.message}>
                  This is an example of a {name} alert message with glass styling.
                </Text>
              </View>
            </View>
          ))}
        </View>
        
        {/* Navigation */}
        <SectionTitle>Navigation</SectionTitle>
        <View style={styles.section}>
          <View style={components.navigation.header}>
            <Text style={components.navigation.headerTitle}>Screen Title</Text>
          </View>
          
          <Text style={styles.sectionSubtitle}>Tab Bar</Text>
          <View style={components.navigation.tabBar}>
            <View style={styles.tabBarContent}>
              {['Home', 'Search', 'Notifications', 'Settings'].map((tab, index) => (
                <View key={tab} style={styles.tabBarItem}>
                  <View style={styles.tabBarIcon} />
                  <Text style={components.navigation.tabBarLabel}>{tab}</Text>
                </View>
              ))}
            </View>
          </View>
          
          <Text style={styles.sectionSubtitle}>Drawer Items</Text>
          <View style={styles.drawerItemContainer}>
            {['Dashboard', 'Customers', 'Invoices', 'Settings'].map((item, index) => (
              <View 
                key={item} 
                style={[
                  components.navigation.drawerItem,
                  index === 0 && { backgroundColor: colors.primary.glass }
                ]}
              >
                <Text style={components.navigation.drawerLabel}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
        
        {/* Misc Components */}
        <SectionTitle>Progress Indicators</SectionTitle>
        <View style={styles.section}>
          {Object.entries(components.progress.variants).map(([name, style]) => (
            <View key={name} style={styles.progressContainer}>
              <Text style={styles.progressLabel}>{name}</Text>
              <View style={components.progress.track}>
                <View 
                  style={[
                    style, 
                    { width: `${name === 'primary' ? 75 : name === 'secondary' ? 50 : name === 'success' ? 100 : 25}%`, height: '100%' }
                  ]} 
                />
              </View>
            </View>
          ))}
        </View>
        
        <View style={styles.tooltipExample}>
          <View style={components.tooltip.container}>
            <Text style={components.tooltip.text}>This is a tooltip with glass styling</Text>
            <View style={[components.tooltip.arrow, styles.tooltipArrow]} />
          </View>
          <TouchableOpacity style={[components.button.base, components.button.variants.info, components.button.sizes.sm]}>
            <Text style={components.button.text}>Hover Me</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const SectionTitle = ({ children }) => (
  <Text style={styles.sectionTitle}>{children}</Text>
);

const ColorSwatch = ({ name, color }) => (
  <View style={styles.colorSwatchContainer}>
    <View style={[styles.colorSwatch, { backgroundColor: color }]} />
    <Text style={styles.colorSwatchName}>{name}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: spacing.lg,
    paddingBottom: spacing['4xl'],
  },
  title: {
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize['4xl'],
    color: colors.neutral.white,
    marginBottom: spacing.xl,
    textAlign: 'center',
  },
  section: {
    ...glassEffects.medium,
    marginBottom: spacing.xl,
    padding: spacing.lg,
  },
  sectionTitle: {
    fontFamily: typography.fontFamily.semiBold,
    fontSize: typography.fontSize['2xl'],
    color: colors.neutral.white,
    marginTop: spacing.lg,
    marginBottom: spacing.md,
  },
  sectionSubtitle: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.lg,
    color: colors.neutral.light,
    marginTop: spacing.md,
    marginBottom: spacing.sm,
  },
  text: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.md,
    color: colors.neutral.white,
  },
  
  // Color swatches
  colorGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: spacing.md,
  },
  colorSwatchContainer: {
    marginRight: spacing.md,
    marginBottom: spacing.md,
    alignItems: 'center',
  },
  colorSwatch: {
    width: 60,
    height: 60,
    borderRadius: borders.radius.md,
    marginBottom: spacing.xs,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  colorSwatchName: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.xs,
    color: colors.neutral.white,
    textAlign: 'center',
  },
  
  // Typography
  typographyContainer: {
    marginBottom: spacing.lg,
  },
  
  // Glass effects
  glassGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  glassSwatch: {
    width: '48%',
    height: 100,
    marginBottom: spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  glassSwatchText: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.md,
    color: colors.neutral.white,
  },
  
  // Buttons
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: spacing.lg,
  },
  
  // Cards
  cardSection: {
    marginBottom: spacing.xl,
  },
  cardTitle: {
    fontFamily: typography.fontFamily.semiBold,
    fontSize: typography.fontSize.xl,
    color: colors.neutral.white,
    marginBottom: spacing.xs,
  },
  cardText: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.md,
    color: colors.neutral.light,
  },
  
  // Form elements
  formRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.md,
  },
  
  // Badges
  badgeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: spacing.lg,
  },
  
  // Navigation
  tabBarContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: spacing.xs,
  },
  tabBarItem: {
    alignItems: 'center',
  },
  tabBarIcon: {
    width: 24,
    height: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: borders.radius.full,
    marginBottom: spacing.xxs,
  },
  drawerItemContainer: {
    marginBottom: spacing.md,
  },
  
  // Progress
  progressContainer: {
    marginBottom: spacing.md,
  },
  progressLabel: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.sm,
    color: colors.neutral.white,
    marginBottom: spacing.xs,
  },
  
  // Tooltip
  tooltipExample: {
    alignItems: 'center',
    marginTop: spacing.lg,
    marginBottom: spacing['2xl'],
  },
  tooltipArrow: {
    position: 'absolute',
    bottom: -5,
    transform: [{ rotate: '45deg' }],
  },
});

export default DesignSystemShowcase;