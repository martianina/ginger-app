import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { isAdmin, updateUserRole } from '@/lib/admin';

export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const adminStatus = await isAdmin();
    
    if (!adminStatus) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const { userId, role } = await request.json();

    if (!userId || !role || !['admin', 'user'].includes(role)) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }

    const success = await updateUserRole(userId, role);
    
    if (!success) {
      return NextResponse.json({ error: 'Failed to update user role' }, { status: 500 });
    }

    return NextResponse.json({ message: 'User role updated successfully' });
  } catch (error) {
    console.error('Update user role error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 