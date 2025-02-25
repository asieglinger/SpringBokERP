import { StyleSheet } from 'react-native';

/**
 * SpringBokERP Glass Design System
 * A comprehensive, glass-like design system for a modern ERP application
 */

// COLORS
export const colors = {
  // Primary palette
  primary: {
    main: 'rgba(74, 144, 226, 0.85)',
    light: 'rgba(126, 182, 246, 0.75)',
    dark: 'rgba(45, 100, 180, 0.9)',
    glass: 'rgba(74, 144, 226, 0.25)',
    border: 'rgba(74, 144, 226, 0.4)',
  },
  
  // Secondary palette
  secondary: {
    main: 'rgba(155, 89, 182, 0.85)',
    light: 'rgba(187, 143, 206, 0.75)',
    dark: 'rgba(125, 60, 152, 0.9)',
    glass: 'rgba(155, 89, 182, 0.25)',
    border: 'rgba(155, 89, 182, 0.4)',
  },
  
  // Success states
  success: {
    main: 'rgba(46, 204, 113, 0.85)',
    light: 'rgba(88, 214, 141, 0.75)',
    dark: 'rgba(30, 132, 73, 0.9)',
    glass: 'rgba(46, 204, 113, 0.25)',
    border: 'rgba(46, 204, 113, 0.4)',
  },
  
  // Warning states
  warning: {
    main: 'rgba(241, 196, 15, 0.85)',
    light: 'rgba(247, 220, 111, 0.75)',
    dark: 'rgba(183, 149, 11, 0.9)',
    glass: 'rgba(241, 196, 15, 0.25)',
    border: 'rgba(241, 196, 15, 0.4)',
  },
  
  // Error states
  error: {
    main: 'rgba(231, 76, 60, 0.85)',
    light: 'rgba(239, 132, 120, 0.75)',
    dark: 'rgba(169, 50, 38, 0.9)',
    glass: 'rgba(231, 76, 60, 0.25)',
    border: 'rgba(231, 76, 60, 0.4)',
  },
  
  // Information states
  info: {
    main: 'rgba(52, 152, 219, 0.85)',
    light: 'rgba(108, 178, 235, 0.75)',
    dark: 'rgba(31, 97, 141, 0.9)',
    glass: 'rgba(52, 152, 219, 0.25)',
    border: 'rgba(52, 152, 219, 0.4)',
  },
  
  // Neutral colors
  neutral: {
    white: 'rgba(255, 255, 255, 0.95)',
    light: 'rgba(236, 240, 241, 0.75)',
    medium: 'rgba(189, 195, 199, 0.65)',
    dark: 'rgba(52, 73, 94, 0.85)',
    black: 'rgba(44, 62, 80, 0.9)',
    transparent: 'transparent',
  },
  
  // Glassmorphism specific
  glass: {
    background: 'rgba(255, 255, 255, 0.15)',
    card: 'rgba(255, 255, 255, 0.25)',
    overlay: 'rgba(255, 255, 255, 0.35)',
    border: 'rgba(255, 255, 255, 0.2)',
    shadow: 'rgba(31, 38, 135, 0.37)',
    highlight: 'rgba(255, 255, 255, 0.8)',
    divider: 'rgba(255, 255, 255, 0.12)',
  },
  
  // Background gradients
  gradients: {
    primary: ['rgba(74, 144, 226, 0.8)', 'rgba(74, 144, 226, 0.4)'],
    secondary: ['rgba(155, 89, 182, 0.8)', 'rgba(155, 89, 182, 0.4)'],
    success: ['rgba(46, 204, 113, 0.8)', 'rgba(46, 204, 113, 0.4)'],
    error: ['rgba(231, 76, 60, 0.8)', 'rgba(231, 76, 60, 0.4)'],
    neutral: ['rgba(236, 240, 241, 0.8)', 'rgba(189, 195, 199, 0.4)'],
    glass: ['rgba(255, 255, 255, 0.4)', 'rgba(255, 255, 255, 0.1)'],
  },
};

// TYPOGRAPHY
export const typography = {
  fontFamily: {
    regular: 'Inter-Regular',
    medium: 'Inter-Medium',
    semiBold: 'Inter-SemiBold',
    bold: 'Inter-Bold',
    light: 'Inter-Light',
  },
  
  fontSize: {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 18,
    '2xl': 20,
    '3xl': 24,
    '4xl': 30,
    '5xl': 36,
    '6xl': 48,
  },
  
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
    loose: 2,
  },
  
  fontWeight: {
    light: '300',
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
  },
  
  letterSpacing: {
    tighter: -0.8,
    tight: -0.4,
    normal: 0,
    wide: 0.4,
    wider: 0.8,
  },
};

// SPACING
export const spacing = {
  none: 0,
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 40,
  '3xl': 48,
  '4xl': 56,
  '5xl': 64,
  '6xl': 72,
  '7xl': 80,
  '8xl': 96,
};

// BORDERS
export const borders = {
  radius: {
    none: 0,
    xs: 2,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    '2xl': 24,
    full: 9999,
  },
  
  width: {
    none: 0,
    thin: 1,
    regular: 2,
    thick: 4,
  },
  
  style: {
    none: 'none',
    solid: 'solid',
    dashed: 'dashed',
    dotted: 'dotted',
  },
};

// SHADOWS
export const shadows = {
  none: {
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  
  xs: {
    shadowColor: colors.glass.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  
  sm: {
    shadowColor: colors.glass.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 2,
  },
  
  md: {
    shadowColor: colors.glass.shadow,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 3,
  },
  
  lg: {
    shadowColor: colors.glass.shadow,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 5,
  },
  
  xl: {
    shadowColor: colors.glass.shadow,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 8,
  },
  
  '2xl': {
    shadowColor: colors.glass.shadow,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 12,
  },
};

// GLASS EFFECTS
export const glassEffects = {
  subtle: {
    backgroundColor: colors.glass.background,
    borderColor: colors.glass.border,
    borderWidth: borders.width.thin,
    borderRadius: borders.radius.md,
    ...shadows.sm,
  },
  
  medium: {
    backgroundColor: colors.glass.card,
    borderColor: colors.glass.border,
    borderWidth: borders.width.thin,
    borderRadius: borders.radius.lg,
    ...shadows.md,
  },
  
  strong: {
    backgroundColor: colors.glass.overlay,
    borderColor: colors.glass.border,
    borderWidth: borders.width.regular,
    borderRadius: borders.radius.xl,
    ...shadows.lg,
  },
  
  frosted: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderTopWidth: borders.width.thin,
    borderLeftWidth: borders.width.thin,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderRadius: borders.radius.lg,
    ...shadows.md,
  },
  
  blurred: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderColor: colors.glass.highlight,
    borderWidth: borders.width.thin,
    borderRadius: borders.radius.xl,
    ...shadows.lg,
  },
};

// COMPONENT STYLES

// Button styles
export const buttonStyles = {
  base: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: borders.radius.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  // Glass button variants
  variants: {
    primary: {
      ...glassEffects.medium,
      backgroundColor: colors.primary.glass,
      borderColor: colors.primary.border,
    },
    
    secondary: {
      ...glassEffects.medium,
      backgroundColor: colors.secondary.glass,
      borderColor: colors.secondary.border,
    },
    
    success: {
      ...glassEffects.medium,
      backgroundColor: colors.success.glass,
      borderColor: colors.success.border,
    },
    
    warning: {
      ...glassEffects.medium,
      backgroundColor: colors.warning.glass,
      borderColor: colors.warning.border,
    },
    
    error: {
      ...glassEffects.medium,
      backgroundColor: colors.error.glass,
      borderColor: colors.error.border,
    },
    
    info: {
      ...glassEffects.medium,
      backgroundColor: colors.info.glass,
      borderColor: colors.info.border,
    },
    
    ghost: {
      ...glassEffects.subtle,
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      borderColor: 'rgba(255, 255, 255, 0.15)',
    },
  },
  
  // Button sizes
  sizes: {
    xs: {
      paddingVertical: spacing.xxs,
      paddingHorizontal: spacing.xs,
      borderRadius: borders.radius.xs,
    },
    
    sm: {
      paddingVertical: spacing.xs,
      paddingHorizontal: spacing.sm,
      borderRadius: borders.radius.sm,
    },
    
    md: {
      paddingVertical: spacing.sm,
      paddingHorizontal: spacing.md,
      borderRadius: borders.radius.md,
    },
    
    lg: {
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.lg,
      borderRadius: borders.radius.lg,
    },
    
    xl: {
      paddingVertical: spacing.lg,
      paddingHorizontal: spacing.xl,
      borderRadius: borders.radius.xl,
    },
  },
  
  // Text styling for buttons
  text: {
    color: colors.neutral.white,
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.md,
    textAlign: 'center',
  },
};

// Card styles
export const cardStyles = {
  base: {
    padding: spacing.md,
    marginVertical: spacing.sm,
    marginHorizontal: spacing.sm,
    ...glassEffects.medium,
  },
  
  variants: {
    raised: {
      ...glassEffects.strong,
      padding: spacing.lg,
    },
    
    flat: {
      ...glassEffects.subtle,
      shadowOpacity: 0.1,
    },
    
    frosted: {
      ...glassEffects.frosted,
      padding: spacing.lg,
    },
    
    highlight: {
      ...glassEffects.medium,
      borderColor: colors.primary.border,
      borderLeftWidth: borders.width.thick,
    },
  },
};

// Input styles
export const inputStyles = {
  base: {
    height: 48,
    paddingHorizontal: spacing.md,
    ...glassEffects.subtle,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    color: colors.neutral.white,
    fontSize: typography.fontSize.md,
    fontFamily: typography.fontFamily.regular,
  },
  
  states: {
    focused: {
      borderColor: colors.primary.main,
      backgroundColor: 'rgba(255, 255, 255, 0.12)',
    },
    
    error: {
      borderColor: colors.error.main,
    },
    
    disabled: {
      opacity: 0.6,
    },
  },
  
  label: {
    fontSize: typography.fontSize.sm,
    fontFamily: typography.fontFamily.medium,
    color: colors.neutral.light,
    marginBottom: spacing.xs,
  },
  
  helperText: {
    fontSize: typography.fontSize.xs,
    fontFamily: typography.fontFamily.regular,
    color: colors.neutral.medium,
    marginTop: spacing.xs,
  },
  
  errorText: {
    fontSize: typography.fontSize.xs,
    fontFamily: typography.fontFamily.medium,
    color: colors.error.main,
    marginTop: spacing.xs,
  },
};

// Modal styles
export const modalStyles = {
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(5px)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  container: {
    width: '85%',
    maxWidth: 500,
    maxHeight: '80%',
    ...glassEffects.strong,
    padding: 0,
    overflow: 'hidden',
  },
  
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderBottomWidth: borders.width.thin,
    borderBottomColor: colors.glass.divider,
  },
  
  title: {
    fontFamily: typography.fontFamily.semiBold,
    fontSize: typography.fontSize['2xl'],
    color: colors.neutral.white,
  },
  
  content: {
    padding: spacing.lg,
  },
  
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: spacing.md,
    borderTopWidth: borders.width.thin,
    borderTopColor: colors.glass.divider,
  },
};

// Navigation styles
export const navigationStyles = {
  tabBar: {
    ...glassEffects.strong,
    height: 60,
    paddingBottom: spacing.xs,
    borderTopWidth: 0,
  },
  
  tabBarItem: {
    paddingTop: spacing.xs,
  },
  
  tabBarLabel: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.xs,
  },
  
  drawer: {
    ...glassEffects.blurred,
    width: 280,
  },
  
  drawerItem: {
    padding: spacing.md,
    marginVertical: spacing.xs,
    marginHorizontal: spacing.sm,
    borderRadius: borders.radius.sm,
  },
  
  drawerLabel: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.md,
    color: colors.neutral.white,
  },
  
  header: {
    ...glassEffects.frosted,
    height: 60,
    borderBottomWidth: 0,
  },
  
  headerTitle: {
    fontFamily: typography.fontFamily.semiBold,
    fontSize: typography.fontSize.lg,
    color: colors.neutral.white,
  },
};

// List styles
export const listStyles = {
  container: {
    marginVertical: spacing.sm,
  },
  
  item: {
    ...glassEffects.subtle,
    padding: spacing.md,
    marginVertical: spacing.xs,
    marginHorizontal: spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  separator: {
    height: 1,
    backgroundColor: colors.glass.divider,
    marginLeft: spacing.lg,
  },
  
  title: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.md,
    color: colors.neutral.white,
  },
  
  subtitle: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.sm,
    color: colors.neutral.light,
    marginTop: spacing.xxs,
  },
};

// Badge styles
export const badgeStyles = {
  container: {
    paddingHorizontal: spacing.xs,
    paddingVertical: spacing.xxs,
    borderRadius: borders.radius.full,
    alignSelf: 'flex-start',
  },
  
  variants: {
    primary: {
      backgroundColor: colors.primary.glass,
      borderColor: colors.primary.border,
      borderWidth: borders.width.thin,
    },
    
    secondary: {
      backgroundColor: colors.secondary.glass,
      borderColor: colors.secondary.border,
      borderWidth: borders.width.thin,
    },
    
    success: {
      backgroundColor: colors.success.glass,
      borderColor: colors.success.border,
      borderWidth: borders.width.thin,
    },
    
    warning: {
      backgroundColor: colors.warning.glass,
      borderColor: colors.warning.border,
      borderWidth: borders.width.thin,
    },
    
    error: {
      backgroundColor: colors.error.glass,
      borderColor: colors.error.border,
      borderWidth: borders.width.thin,
    },
    
    info: {
      backgroundColor: colors.info.glass,
      borderColor: colors.info.border,
      borderWidth: borders.width.thin,
    },
  },
  
  text: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.xs,
    color: colors.neutral.white,
  },
};

// Alert/Toast styles
export const alertStyles = {
  container: {
    ...glassEffects.strong,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    marginVertical: spacing.sm,
    marginHorizontal: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  variants: {
    success: {
      backgroundColor: colors.success.glass,
      borderColor: colors.success.border,
      borderLeftWidth: borders.width.thick,
    },
    
    warning: {
      backgroundColor: colors.warning.glass,
      borderColor: colors.warning.border,
      borderLeftWidth: borders.width.thick,
    },
    
    error: {
      backgroundColor: colors.error.glass,
      borderColor: colors.error.border,
      borderLeftWidth: borders.width.thick,
    },
    
    info: {
      backgroundColor: colors.info.glass,
      borderColor: colors.info.border,
      borderLeftWidth: borders.width.thick,
    },
  },
  
  title: {
    fontFamily: typography.fontFamily.semiBold,
    fontSize: typography.fontSize.md,
    color: colors.neutral.white,
  },
  
  message: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.sm,
    color: colors.neutral.light,
    marginTop: spacing.xxs,
  },
  
  icon: {
    marginRight: spacing.sm,
  },
};

// Toggle/Switch styles
export const toggleStyles = {
  container: {
    width: 50,
    height: 28,
    borderRadius: borders.radius.full,
    padding: 2,
  },
  
  variants: {
    primary: {
      backgroundColor: colors.primary.glass,
      borderColor: colors.primary.border,
      borderWidth: borders.width.thin,
    },
    
    secondary: {
      backgroundColor: colors.secondary.glass,
      borderColor: colors.secondary.border,
      borderWidth: borders.width.thin,
    },
  },
  
  thumb: {
    width: 24,
    height: 24,
    borderRadius: borders.radius.full,
    backgroundColor: colors.neutral.white,
    ...shadows.sm,
  },
  
  inactive: {
    backgroundColor: 'rgba(189, 195, 199, 0.3)',
    borderColor: 'rgba(189, 195, 199, 0.5)',
  },
};

// Checkbox styles
export const checkboxStyles = {
  container: {
    width: 22,
    height: 22,
    borderRadius: borders.radius.xs,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.xs,
  },
  
  variants: {
    primary: {
      backgroundColor: colors.primary.glass,
      borderColor: colors.primary.border,
      borderWidth: borders.width.thin,
    },
    
    secondary: {
      backgroundColor: colors.secondary.glass,
      borderColor: colors.secondary.border,
      borderWidth: borders.width.thin,
    },
  },
  
  checkmark: {
    color: colors.neutral.white,
  },
  
  unchecked: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderWidth: borders.width.thin,
  },
};

// Progress indicator styles
export const progressStyles = {
  track: {
    height: 8,
    borderRadius: borders.radius.full,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    overflow: 'hidden',
  },
  
  variants: {
    primary: {
      backgroundColor: colors.primary.glass,
    },
    
    secondary: {
      backgroundColor: colors.secondary.glass,
    },
    
    success: {
      backgroundColor: colors.success.glass,
    },
    
    error: {
      backgroundColor: colors.error.glass,
    },
  },
};

// Tooltip styles
export const tooltipStyles = {
  container: {
    ...glassEffects.strong,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borders.radius.sm,
    maxWidth: 200,
  },
  
  arrow: {
    width: 10,
    height: 10,
    backgroundColor: colors.glass.overlay,
  },
  
  text: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.xs,
    color: colors.neutral.white,
  },
};

// Compilation of all styles
export const designSystem = {
  colors,
  typography,
  spacing,
  borders,
  shadows,
  glassEffects,
  components: {
    button: buttonStyles,
    card: cardStyles,
    input: inputStyles,
    modal: modalStyles,
    navigation: navigationStyles,
    list: listStyles,
    badge: badgeStyles,
    alert: alertStyles,
    toggle: toggleStyles,
    checkbox: checkboxStyles,
    progress: progressStyles,
    tooltip: tooltipStyles,
  },
};

export default designSystem;