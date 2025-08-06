# Admin Dashboard Setup Guide

## Overview
The admin dashboard provides user management, system monitoring, and administrative controls for Ginger Science.

## Database Setup

### 1. Supabase Database Schema
You need to create a `users` table in your Supabase database with the following structure:

```sql
-- Create users table (if not exists)
CREATE TABLE IF NOT EXISTS public.users (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  role TEXT DEFAULT 'user' CHECK (role IN ('admin', 'user')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  email_verified BOOLEAN DEFAULT FALSE,
  last_sign_in TIMESTAMP WITH TIME ZONE,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own data" ON public.users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Admins can view all users" ON public.users
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Create function to handle user creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.users (id, email, name, role, email_verified)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email),
    COALESCE(NEW.raw_user_meta_data->>'role', 'user'),
    NEW.email_confirmed_at IS NOT NULL
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user creation
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create function to update user metadata
CREATE OR REPLACE FUNCTION public.update_user_metadata()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE public.users 
  SET 
    name = COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email),
    role = COALESCE(NEW.raw_user_meta_data->>'role', 'user'),
    email_verified = NEW.email_confirmed_at IS NOT NULL,
    updated_at = NOW()
  WHERE id = NEW.id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for user updates
CREATE TRIGGER on_auth_user_updated
  AFTER UPDATE ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.update_user_metadata();
```

### 2. Run the SQL
1. Go to your Supabase dashboard
2. Navigate to SQL Editor
3. Paste the above SQL and run it

## First Admin User

### Automatic Setup
The first user to sign up will automatically be assigned admin privileges.

### Manual Setup (if needed)
If you need to manually assign admin privileges to an existing user:

```sql
UPDATE public.users 
SET role = 'admin' 
WHERE email = 'your-email@example.com';
```

## Accessing the Admin Dashboard

### URL
- **Local**: `http://localhost:3000/admin/dashboard`
- **Production**: `https://your-domain.com/admin/dashboard`

### Authentication
- Must be signed in
- Must have admin role
- Non-admin users will be redirected to home page

## Admin Features

### 1. Dashboard Overview
- Total users count
- New users this week
- Verified users count
- Admin users count
- User growth chart (placeholder)
- Recent activity feed

### 2. User Management
- View all users
- Edit user roles (admin/user)
- Delete users
- See user status (verified/pending)
- View join dates and last sign-in

### 3. Quick Actions
- Export user data (placeholder)
- Send newsletter (placeholder)
- System health check (placeholder)

## API Endpoints

### Admin Check
- `GET /api/admin/check` - Verify admin status

### Statistics
- `GET /api/admin/stats` - Get dashboard statistics

### User Management
- `GET /api/admin/users` - Get all users
- `PUT /api/admin/users/role` - Update user role
- `DELETE /api/admin/users/[userId]` - Delete user

## Security

### Role-Based Access Control
- All admin routes check for admin privileges
- Non-admin users cannot access admin features
- API endpoints validate admin status

### Database Security
- Row Level Security (RLS) enabled
- Users can only see their own data
- Admins can see all user data
- Secure user creation triggers

## Troubleshooting

### Common Issues

1. **"Forbidden" Error**
   - User doesn't have admin privileges
   - Check user role in database

2. **"Unauthorized" Error**
   - User not signed in
   - Session expired

3. **Database Connection Issues**
   - Check Supabase credentials
   - Verify database schema is set up

### Debug Steps
1. Check browser console for errors
2. Verify environment variables
3. Check Supabase logs
4. Confirm user role in database

## Next Steps

1. **Test the admin dashboard** with your first admin user
2. **Customize the dashboard** based on your needs
3. **Add more admin features** as required
4. **Implement real-time updates** for better UX
5. **Add audit logging** for admin actions

## Support

If you encounter issues:
1. Check the browser console
2. Review Supabase logs
3. Verify database schema
4. Test with a fresh admin user 