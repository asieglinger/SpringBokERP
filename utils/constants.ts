// API and Service Keys
export const SUPABASE_URL = process.env.SUPABASE_URL || '';
export const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || '';
export const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY || '';
export const DOCUSEAL_API_KEY = process.env.DOCUSEAL_API_KEY || '';
export const GOOGLE_CLOUD_VISION_API_KEY = process.env.GOOGLE_CLOUD_VISION_API_KEY || '';

// Subscription Tiers
export const SUBSCRIPTION_TIERS = {
  BASIC: 'basic',
  PREMIUM: 'premium',
};

// Invoice/Estimate Status
export const DOCUMENT_STATUS = {
  DRAFT: 'draft',
  SENT: 'sent',
  PAID: 'paid',
  APPROVED: 'approved',
  REJECTED: 'rejected',
};

// Contract Status
export const CONTRACT_STATUS = {
  DRAFT: 'draft',
  SENT: 'sent',
  SIGNED: 'signed',
  VOIDED: 'voided',
};

// Routes
export const ROUTES = {
  LOGIN: 'Login',
  REGISTER: 'Register',
  DASHBOARD: 'Dashboard',
  CUSTOMERS: 'Customers',
  CUSTOMER_DETAILS: 'CustomerDetails',
  INVOICES: 'Invoices',
  INVOICE_CREATE: 'InvoiceCreate',
  INVOICE_DETAILS: 'InvoiceDetails',
  ESTIMATES: 'Estimates',
  ESTIMATE_CREATE: 'EstimateCreate',
  ESTIMATE_DETAILS: 'EstimateDetails',
  CONTRACTS: 'Contracts',
  CONTRACT_CREATE: 'ContractCreate',
  CONTRACT_DETAILS: 'ContractDetails',
  APPOINTMENTS: 'Appointments',
  APPOINTMENT_CREATE: 'AppointmentCreate',
  APPOINTMENT_DETAILS: 'AppointmentDetails',
  DOCUMENTS: 'Documents',
  DOCUMENT_SCAN: 'DocumentScan',
  DOCUMENT_DETAILS: 'DocumentDetails',
  SETTINGS: 'Settings',
  DESIGN_SYSTEM: 'DesignSystem',
};

// Navigation
export const TAB_SCREENS = [
  ROUTES.DASHBOARD,
  ROUTES.CUSTOMERS,
  ROUTES.INVOICES,
  ROUTES.APPOINTMENTS,
  ROUTES.DOCUMENTS,
];

// Error Messages
export const ERROR_MESSAGES = {
  DEFAULT: 'Something went wrong. Please try again.',
  AUTH: 'Authentication failed. Please check your credentials and try again.',
  NETWORK: 'Network error. Please check your connection and try again.',
  PERMISSION: 'You do not have permission to perform this action.',
  NOT_FOUND: 'The requested resource was not found.',
  VALIDATION: 'Please check the form for errors and try again.',
};

// Success Messages
export const SUCCESS_MESSAGES = {
  CUSTOMER_CREATED: 'Customer created successfully.',
  CUSTOMER_UPDATED: 'Customer updated successfully.',
  INVOICE_CREATED: 'Invoice created successfully.',
  INVOICE_SENT: 'Invoice sent successfully.',
  ESTIMATE_CREATED: 'Estimate created successfully.',
  ESTIMATE_SENT: 'Estimate sent successfully.',
  CONTRACT_CREATED: 'Contract created successfully.',
  CONTRACT_SENT: 'Contract sent successfully.',
  APPOINTMENT_CREATED: 'Appointment created successfully.',
  APPOINTMENT_UPDATED: 'Appointment updated successfully.',
  DOCUMENT_SCANNED: 'Document scanned successfully.',
};

// Time formats
export const DATE_FORMATS = {
  DISPLAY_DATE: 'MMM dd, yyyy',
  DISPLAY_DATE_TIME: 'MMM dd, yyyy h:mm a',
  ISO_DATE: 'yyyy-MM-dd',
  ISO_DATE_TIME: "yyyy-MM-dd'T'HH:mm:ss.SSSxxx",
};