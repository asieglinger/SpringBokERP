@cursorcode - append this as needed, whenever you make changes that affect the backend

# Backend Structure

## Database Schema (Supabase PostgreSQL)
- **Users Table**
  - `id` (UUID, primary key)
  - `email` (string, unique)
  - `name` (string)
  - `subscription_tier` (string: 'basic' | 'premium')

- **Customers Table**
  - `id` (UUID, primary key)
  - `user_id` (UUID, foreign key to Users)
  - `name` (string)
  - `email` (string)
  - `phone` (string)
  - `address` (text)

- **Invoices Table**
  - `id` (UUID, primary key)
  - `user_id` (UUID, foreign key to Users)
  - `customer_id` (UUID, foreign key to Customers)
  - `items` (JSONB: [{ description: string, quantity: integer, price: float }])
  - `total` (float)
  - `status` (string: 'draft' | 'sent' | 'paid')
  - `created_at` (timestamp)

- Similar tables for `Estimates`, `Contracts`, `Appointments` with relevant fields.

## Storage
- **Documents:** Stored in Supabase Storage under `/users/{user_id}/documents/{document_id}`
- **Metadata:** Stored in a `Documents` table linking to storage paths.

## Security
- **Row-Level Security (RLS):** Enforce policies in Supabase to restrict data access to the owning user.
- **HTTPS:** All API calls use secure connections.
- **Secrets:** Store API keys (e.g., DocuSeal, Google Vision) in environment variables via Expo config.