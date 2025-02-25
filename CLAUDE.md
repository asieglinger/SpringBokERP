# CLAUDE.md - SpringBokERP Guidelines

## Build Commands
- **Setup:** `npm install` or `yarn install`
- **Start Dev:** `expo start` or `npm run start`
- **Tests:** `npm test` or `yarn test`
- **Single Test:** `npm test -- -t "test name"` or `jest path/to/test.js`
- **Lint:** `npm run lint` or `eslint .`
- **Format:** `npm run format` or `prettier --write .`
- **TypeCheck:** `npm run typecheck` or `tsc --noEmit`

## Code Style Guidelines
- **Indentation:** 2 spaces
- **Max Line Length:** 100 characters
- **Quotes:** Single quotes
- **Semicolons:** Required
- **Trailing Commas:** ES5 style (objects, arrays)
- **Components:** Functional with hooks, PascalCase naming
- **Variables/Functions:** camelCase
- **State:** Context API (simple), Redux Toolkit (complex)
- **Styling:** React Native Paper + StyleSheet
- **Error Handling:** Try/catch with descriptive error messages
- **Database Access:** Row-Level Security policies for all tables
- **Commits:** Descriptive, present-tense verbs (e.g., "Add customer form validation")