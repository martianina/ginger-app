import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { isAdmin } from '@/lib/admin';

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

    return NextResponse.json({ isAdmin: true });
  } catch (error) {
    console.error('Admin check error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 