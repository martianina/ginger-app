import { supabaseAdmin } from './supabase';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export interface User {
  id: string;
  email: string;
  name?: string;
  role: 'admin' | 'user';
  created_at: string;
  email_verified?: boolean;
  last_sign_in?: string;
}

export interface AdminStats {
  totalUsers: number;
  newUsersThisWeek: number;
  verifiedUsers: number;
  adminUsers: number;
  recentSignups: User[];
}

// Check if current user is admin
export async function isAdmin(): Promise<boolean> {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) return false;

    const { data: user } = await supabaseAdmin
      .from('users')
      .select('role')
      .eq('email', session.user.email)
      .single();

    return user?.role === 'admin';
  } catch (error) {
    console.error('Error checking admin status:', error);
    return false;
  }
}

// Get admin dashboard stats
export async function getAdminStats(): Promise<AdminStats> {
  try {
    // Get total users
    const { count: totalUsers } = await supabaseAdmin
      .from('users')
      .select('*', { count: 'exact', head: true });

    // Get new users this week
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    
    const { count: newUsersThisWeek } = await supabaseAdmin
      .from('users')
      .select('*', { count: 'exact', head: true })
      .gte('created_at', oneWeekAgo.toISOString());

    // Get verified users
    const { count: verifiedUsers } = await supabaseAdmin
      .from('users')
      .select('*', { count: 'exact', head: true })
      .eq('email_verified', true);

    // Get admin users
    const { count: adminUsers } = await supabaseAdmin
      .from('users')
      .select('*', { count: 'exact', head: true })
      .eq('role', 'admin');

    // Get recent signups (last 10)
    const { data: recentSignups } = await supabaseAdmin
      .from('users')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(10);

    return {
      totalUsers: totalUsers || 0,
      newUsersThisWeek: newUsersThisWeek || 0,
      verifiedUsers: verifiedUsers || 0,
      adminUsers: adminUsers || 0,
      recentSignups: recentSignups || [],
    };
  } catch (error) {
    console.error('Error getting admin stats:', error);
    return {
      totalUsers: 0,
      newUsersThisWeek: 0,
      verifiedUsers: 0,
      adminUsers: 0,
      recentSignups: [],
    };
  }
}

// Get all users for admin table
export async function getAllUsers(): Promise<User[]> {
  try {
    const { data: users } = await supabaseAdmin
      .from('users')
      .select('*')
      .order('created_at', { ascending: false });

    return users || [];
  } catch (error) {
    console.error('Error getting users:', error);
    return [];
  }
}

// Update user role
export async function updateUserRole(userId: string, role: 'admin' | 'user'): Promise<boolean> {
  try {
    const { error } = await supabaseAdmin
      .from('users')
      .update({ role })
      .eq('id', userId);

    return !error;
  } catch (error) {
    console.error('Error updating user role:', error);
    return false;
  }
}

// Delete user
export async function deleteUser(userId: string): Promise<boolean> {
  try {
    const { error } = await supabaseAdmin
      .from('users')
      .delete()
      .eq('id', userId);

    return !error;
  } catch (error) {
    console.error('Error deleting user:', error);
    return false;
  }
} 