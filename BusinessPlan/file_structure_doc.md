#file structure document
project-root/
├── assets/
│   ├── images/          # Logos, icons, etc.
│   └── fonts/          # Custom fonts
├── components/
│   ├── common/         # Reusable UI components (e.g., Button, Card)
│   ├── customer/       # Customer-specific components
│   ├── invoice/        # Invoice-related components
│   └── ...             # Other feature-specific components
├── screens/
│   ├── DashboardScreen.js
│   ├── CustomerListScreen.js
│   ├── InvoiceCreateScreen.js
│   └── ...             # One file per screen
├── services/
│   ├── api.js          # API calls to Supabase and third-party services
│   ├── auth.js         # Authentication logic
│   ├── docuseal.js     # DocuSeal integration
│   └── storage.js      # Cloud storage operations
├── utils/
│   ├── helpers.js      # Utility functions (e.g., date formatting)
│   └── constants.js    # App-wide constants (e.g., colors, API keys)
├── navigation/
│   └── AppNavigator.js # Main navigation setup
├── store/
│   ├── slices/         # Redux Toolkit slices (if used)
│   └── store.js        # Store configuration
└── App.js              # Entry point




This structure separates concerns for scalability and maintainability, grouping assets, components, screens, services, utilities, navigation, and state management logically.