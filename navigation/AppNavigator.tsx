import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { ROUTES } from '../utils/constants';
import designSystem from '../utils/design-system';

// Import screens here
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import DashboardScreen from '../screens/DashboardScreen';
// ... other screens to be created

// Import the DesignSystemShowcase
import DesignSystemShowcase from '../DesignSystemShowcase';

const { colors, components, spacing } = designSystem;

// Create navigators
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Authentication Navigator
const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'transparent' },
        cardOverlayEnabled: true,
        cardStyleInterpolator: ({ current: { progress } }) => ({
          cardStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 0.5, 0.9, 1],
              outputRange: [0, 0.25, 0.7, 1],
            }),
          },
          overlayStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 0.5],
              extrapolate: 'clamp',
            }),
          },
        }),
      }}
    >
      <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
      <Stack.Screen name={ROUTES.REGISTER} component={RegisterScreen} />
    </Stack.Navigator>
  );
};

// Tab Navigator
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: components.navigation.tabBar,
        tabBarActiveTintColor: colors.primary.main,
        tabBarInactiveTintColor: colors.neutral.medium,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case ROUTES.DASHBOARD:
              iconName = focused ? 'home' : 'home-outline';
              break;
            case ROUTES.CUSTOMERS:
              iconName = focused ? 'people' : 'people-outline';
              break;
            case ROUTES.INVOICES:
              iconName = focused ? 'document-text' : 'document-text-outline';
              break;
            case ROUTES.APPOINTMENTS:
              iconName = focused ? 'calendar' : 'calendar-outline';
              break;
            case ROUTES.DOCUMENTS:
              iconName = focused ? 'documents' : 'documents-outline';
              break;
            default:
              iconName = 'ellipsis-horizontal';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name={ROUTES.DASHBOARD} component={DashboardScreen} />
      <Tab.Screen name={ROUTES.CUSTOMERS} component={CustomersPlaceholder} />
      <Tab.Screen name={ROUTES.INVOICES} component={InvoicesPlaceholder} />
      <Tab.Screen name={ROUTES.APPOINTMENTS} component={AppointmentsPlaceholder} />
      <Tab.Screen name={ROUTES.DOCUMENTS} component={DocumentsPlaceholder} />
    </Tab.Navigator>
  );
};

// Main Navigator
const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'transparent' },
      }}
    >
      <Stack.Screen name="Tabs" component={TabNavigator} />
      <Stack.Screen name={ROUTES.CUSTOMER_DETAILS} component={CustomerDetailsPlaceholder} />
      <Stack.Screen name={ROUTES.INVOICE_CREATE} component={InvoiceCreatePlaceholder} />
      <Stack.Screen name={ROUTES.INVOICE_DETAILS} component={InvoiceDetailsPlaceholder} />
      <Stack.Screen name={ROUTES.ESTIMATE_CREATE} component={EstimateCreatePlaceholder} />
      <Stack.Screen name={ROUTES.ESTIMATE_DETAILS} component={EstimateDetailsPlaceholder} />
      <Stack.Screen name={ROUTES.CONTRACT_CREATE} component={ContractCreatePlaceholder} />
      <Stack.Screen name={ROUTES.CONTRACT_DETAILS} component={ContractDetailsPlaceholder} />
      <Stack.Screen name={ROUTES.APPOINTMENT_CREATE} component={AppointmentCreatePlaceholder} />
      <Stack.Screen name={ROUTES.APPOINTMENT_DETAILS} component={AppointmentDetailsPlaceholder} />
      <Stack.Screen name={ROUTES.DOCUMENT_SCAN} component={DocumentScanPlaceholder} />
      <Stack.Screen name={ROUTES.DOCUMENT_DETAILS} component={DocumentDetailsPlaceholder} />
      <Stack.Screen name={ROUTES.SETTINGS} component={SettingsPlaceholder} />
      <Stack.Screen name={ROUTES.DESIGN_SYSTEM} component={DesignSystemShowcase} />
    </Stack.Navigator>
  );
};

// Root Navigator
const AppNavigator = () => {
  // Use Redux auth state to determine which navigator to show
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

// Placeholder components until we create the actual screens
const LoginPlaceholder = () => <DesignSystemShowcase />;
const RegisterPlaceholder = () => <DesignSystemShowcase />;
const DashboardPlaceholder = () => <DesignSystemShowcase />;
const CustomersPlaceholder = () => <DesignSystemShowcase />;
const CustomerDetailsPlaceholder = () => <DesignSystemShowcase />;
const InvoicesPlaceholder = () => <DesignSystemShowcase />;
const InvoiceCreatePlaceholder = () => <DesignSystemShowcase />;
const InvoiceDetailsPlaceholder = () => <DesignSystemShowcase />;
const EstimateCreatePlaceholder = () => <DesignSystemShowcase />;
const EstimateDetailsPlaceholder = () => <DesignSystemShowcase />;
const ContractCreatePlaceholder = () => <DesignSystemShowcase />;
const ContractDetailsPlaceholder = () => <DesignSystemShowcase />;
const AppointmentsPlaceholder = () => <DesignSystemShowcase />;
const AppointmentCreatePlaceholder = () => <DesignSystemShowcase />;
const AppointmentDetailsPlaceholder = () => <DesignSystemShowcase />;
const DocumentsPlaceholder = () => <DesignSystemShowcase />;
const DocumentScanPlaceholder = () => <DesignSystemShowcase />;
const DocumentDetailsPlaceholder = () => <DesignSystemShowcase />;
const SettingsPlaceholder = () => <DesignSystemShowcase />;

export default AppNavigator;