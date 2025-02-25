# Frontend Guidelines

- **Component Style:** Use functional components with hooks (e.g., `useState`, `useEffect`).
- **State Management:** Default to Context API; switch to Redux Toolkit for complex, app-wide state.
- **Naming Conventions:**
  - Components: PascalCase (e.g., `CustomerCard`)
  - Variables/Functions: camelCase (e.g., `fetchCustomers`)
- **Code Quality:** Enforce ESLint and Prettier rules (2-space indentation, semicolons).
- **Testing:** Write unit tests for components and hooks using Jest and React Native Testing Library.
- **Performance:** Use `useMemo` and `useCallback` to prevent unnecessary re-renders.
- **Accessibility:** Add ARIA labels and ensure keyboard navigation support.
- **Styling:** Leverage React Native Paper for consistent, professional UI; use StyleSheet for custom styles.