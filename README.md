# SpringBokERP

SpringBokERP is a cross-platform CRM/ERP application designed for small to medium-sized businesses, built using Expo and React Native to ensure seamless functionality on web, iOS, and Android.

## Features

- Customer Management
- Invoicing and Estimates
- Contract Signing with DocuSeal integration
- Appointment Scheduling
- Document Scanning and Cloud Storage
- Business Analytics Dashboard

## Tech Stack

- **Frontend**: React Native with Expo
- **State Management**: Redux Toolkit and Context API
- **UI Components**: Custom components with React Native Paper
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **Data Visualization**: Victory Native

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/SpringBokERP.git
   cd SpringBokERP
   ```

2. Install dependencies:
   ```
   cd SpringBokERP-app
   npm install
   ```

3. Copy the environment variables file and fill in your values:
   ```
   cp .env.example .env
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Use the Expo Go app on your mobile device or an emulator to run the application.

## Project Structure

- **assets/**: Images, fonts, and other static resources
- **components/**: Reusable UI components
- **screens/**: Application screens and views
- **services/**: API clients and third-party service integrations
- **utils/**: Utility functions and constants
- **navigation/**: Navigation setup and configuration
- **store/**: Redux store configuration and slices

## Design System

The application uses a custom design system with a "glass" aesthetic. You can explore all UI components by navigating to the Design System screen within the app.

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Submit a pull request

## License

[MIT License](LICENSE)