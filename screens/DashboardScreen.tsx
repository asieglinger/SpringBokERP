import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { RootState } from '../store/store';
import { signOut } from '../store/slices/authSlice';
import { ROUTES } from '../utils/constants';
import designSystem from '../utils/design-system';
import { Container, Card, Button } from '../components/common';

const { colors, spacing, typography, components, borders } = designSystem;

// Quick action button component
const QuickActionButton = ({ title, icon, onPress, color = colors.primary.glass }) => (
  <TouchableOpacity 
    style={[styles.quickAction, { backgroundColor: color }]}
    onPress={onPress}
  >
    <Ionicons name={icon} size={28} color={colors.neutral.white} />
    <Text style={styles.quickActionText}>{title}</Text>
  </TouchableOpacity>
);

// Stat item component
const StatItem = ({ title, value, icon, color = colors.primary.glass }) => (
  <Card variant="flat" style={[styles.statCard, { borderLeftColor: color }]}>
    <View style={styles.statIcon}>
      <Ionicons name={icon} size={24} color={color} />
    </View>
    <View style={styles.statContent}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statTitle}>{title}</Text>
    </View>
  </Card>
);

const DashboardScreen: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  
  // Get user from Redux
  const { user } = useSelector((state: RootState) => state.auth);
  
  // Handle sign out
  const handleSignOut = () => {
    dispatch(signOut());
  };
  
  // Placeholder data for dashboard
  const recentInvoices = [
    { id: '1', customer: 'Acme Inc.', amount: 1200, date: '2023-03-15', status: 'paid' },
    { id: '2', customer: 'TechCorp', amount: 850, date: '2023-03-10', status: 'sent' },
    { id: '3', customer: 'GlobalTrade', amount: 3400, date: '2023-03-05', status: 'draft' },
  ];
  
  const upcomingAppointments = [
    { id: '1', customer: 'John Smith', date: '2023-03-20 10:00 AM', type: 'Meeting' },
    { id: '2', customer: 'Sarah Johnson', date: '2023-03-22 2:30 PM', type: 'Consultation' },
  ];
  
  return (
    <Container headerTitle="Dashboard">
      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeText}>Welcome, {user?.name || 'User'}</Text>
        <Text style={styles.dateText}>Today is Monday, March, 20, 2023</Text>
      </View>
      
      <View style={styles.statsContainer}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.statsScroll}
        >
          <StatItem 
            title="Total Sales" 
            value="$5,450" 
            icon="cash-outline" 
            color={colors.primary.main}
          />
          <StatItem 
            title="Invoices Due" 
            value="3" 
            icon="document-text-outline" 
            color={colors.warning.main}
          />
          <StatItem 
            title="New Customers" 
            value="8" 
            icon="people-outline" 
            color={colors.success.main}
          />
          <StatItem 
            title="Appointments" 
            value="4" 
            icon="calendar-outline" 
            color={colors.info.main}
          />
        </ScrollView>
      </View>
      
      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <View style={styles.quickActionsContainer}>
        <QuickActionButton 
          title="New Invoice" 
          icon="document-text-outline" 
          onPress={() => navigation.navigate(ROUTES.INVOICE_CREATE as never)}
          color={colors.primary.glass}
        />
        <QuickActionButton 
          title="New Customer" 
          icon="person-add-outline" 
          onPress={() => navigation.navigate(ROUTES.CUSTOMERS as never)}
          color={colors.secondary.glass}
        />
        <QuickActionButton 
          title="New Appointment" 
          icon="calendar-outline" 
          onPress={() => navigation.navigate(ROUTES.APPOINTMENT_CREATE as never)}
          color={colors.success.glass}
        />
        <QuickActionButton 
          title="Scan Document" 
          icon="scan-outline" 
          onPress={() => navigation.navigate(ROUTES.DOCUMENT_SCAN as never)}
          color={colors.info.glass}
        />
      </View>
      
      <View style={styles.halfContainer}>
        <View style={styles.half}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Invoices</Text>
            <TouchableOpacity onPress={() => navigation.navigate(ROUTES.INVOICES as never)}>
              <Text style={styles.viewAllLink}>View All</Text>
            </TouchableOpacity>
          </View>
          
          {recentInvoices.map((invoice) => (
            <Card key={invoice.id} variant="flat" style={styles.itemCard}>
              <View style={styles.invoiceDetails}>
                <Text style={styles.invoiceCustomer}>{invoice.customer}</Text>
                <Text style={styles.invoiceAmount}>${invoice.amount}</Text>
              </View>
              <View style={styles.invoiceFooter}>
                <Text style={styles.invoiceDate}>{invoice.date}</Text>
                <View style={[
                  styles.statusBadge,
                  invoice.status === 'paid' 
                    ? { backgroundColor: colors.success.glass } 
                    : invoice.status === 'sent' 
                      ? { backgroundColor: colors.warning.glass }
                      : { backgroundColor: colors.info.glass }
                ]}>
                  <Text style={styles.statusText}>{invoice.status}</Text>
                </View>
              </View>
            </Card>
          ))}
        </View>
        
        <View style={styles.half}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Upcoming Appointments</Text>
            <TouchableOpacity onPress={() => navigation.navigate(ROUTES.APPOINTMENTS as never)}>
              <Text style={styles.viewAllLink}>View All</Text>
            </TouchableOpacity>
          </View>
          
          {upcomingAppointments.map((appointment) => (
            <Card key={appointment.id} variant="flat" style={styles.itemCard}>
              <Text style={styles.appointmentCustomer}>{appointment.customer}</Text>
              <Text style={styles.appointmentType}>{appointment.type}</Text>
              <Text style={styles.appointmentDate}>{appointment.date}</Text>
            </Card>
          ))}
        </View>
      </View>
      
      <Card variant="frosted" style={styles.designSystemCard}>
        <Text style={styles.designSystemTitle}>Explore the Design System</Text>
        <Text style={styles.designSystemDesc}>
          View all UI components and styles available in the app.
        </Text>
        <Button
          title="Open Design System"
          variant="ghost"
          onPress={() => navigation.navigate(ROUTES.DESIGN_SYSTEM as never)}
        />
      </Card>
      
      <Button
        title="Sign Out"
        variant="error"
        onPress={handleSignOut}
        style={styles.signOutButton}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  welcomeSection: {
    marginBottom: spacing.xl,
  },
  welcomeText: {
    fontFamily: typography.fontFamily.semiBold,
    fontSize: typography.fontSize['2xl'],
    color: colors.neutral.white,
  },
  dateText: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.md,
    color: colors.neutral.light,
    marginTop: spacing.xs,
  },
  statsContainer: {
    marginBottom: spacing.xl,
  },
  statsScroll: {
    paddingRight: spacing.xl,
  },
  statCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: spacing.md,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderLeftWidth: 4,
    width: 200,
  },
  statIcon: {
    marginRight: spacing.sm,
  },
  statContent: {
    flex: 1,
  },
  statValue: {
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.xl,
    color: colors.neutral.white,
  },
  statTitle: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.sm,
    color: colors.neutral.light,
  },
  sectionTitle: {
    fontFamily: typography.fontFamily.semiBold,
    fontSize: typography.fontSize.lg,
    color: colors.neutral.white,
    marginBottom: spacing.md,
  },
  quickActionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: spacing.xl,
  },
  quickAction: {
    width: '48%',
    padding: spacing.md,
    borderRadius: borders.radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
    marginRight: '4%',
    ...components.card.variants.flat,
  },
  quickAction2: {
    marginRight: 0,
  },
  quickActionText: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.sm,
    color: colors.neutral.white,
    marginTop: spacing.xs,
    textAlign: 'center',
  },
  halfContainer: {
    flexDirection: 'row',
    marginBottom: spacing.xl,
  },
  half: {
    flex: 1,
    marginRight: spacing.md,
  },
  half2: {
    marginRight: 0,
    marginLeft: spacing.md,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  viewAllLink: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.sm,
    color: colors.primary.main,
  },
  itemCard: {
    marginBottom: spacing.sm,
    padding: spacing.sm,
  },
  invoiceDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.xs,
  },
  invoiceCustomer: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.md,
    color: colors.neutral.white,
  },
  invoiceAmount: {
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.md,
    color: colors.neutral.white,
  },
  invoiceFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  invoiceDate: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.xs,
    color: colors.neutral.light,
  },
  statusBadge: {
    paddingHorizontal: spacing.xs,
    paddingVertical: spacing.xxs,
    borderRadius: borders.radius.full,
  },
  statusText: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.xs,
    color: colors.neutral.white,
    textTransform: 'capitalize',
  },
  appointmentCustomer: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.md,
    color: colors.neutral.white,
  },
  appointmentType: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.sm,
    color: colors.neutral.light,
    marginTop: spacing.xxs,
  },
  appointmentDate: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.sm,
    color: colors.primary.light,
    marginTop: spacing.xs,
  },
  designSystemCard: {
    padding: spacing.md,
    marginBottom: spacing.xl,
    alignItems: 'center',
  },
  designSystemTitle: {
    fontFamily: typography.fontFamily.semiBold,
    fontSize: typography.fontSize.lg,
    color: colors.neutral.white,
    marginBottom: spacing.xs,
  },
  designSystemDesc: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.sm,
    color: colors.neutral.light,
    marginBottom: spacing.md,
    textAlign: 'center',
  },
  signOutButton: {
    marginBottom: spacing.xl,
  },
});

export default DashboardScreen;