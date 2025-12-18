import { NextRequest } from 'next/server';

import { handlers } from '@/auth';

export async function GET(request: NextRequest, _context: { params: Promise<{ nextauth: string[] }> }) {
    return handlers.GET(request);
}

export async function POST(request: NextRequest, _context: { params: Promise<{ nextauth: string[] }> }) {
    return handlers.POST(request);
}
