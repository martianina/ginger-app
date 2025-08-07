import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { isAdmin, getAllUsers } from '@/lib/admin';

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions, { req: request });
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const adminStatus = await isAdmin(request);
    
    if (!adminStatus) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const users = await getAllUsers();
    return NextResponse.json(users);
  } catch (error) {
    console.error('Get users error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 