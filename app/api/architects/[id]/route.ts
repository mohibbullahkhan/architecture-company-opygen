import { NextResponse } from 'next/server';
import { architects } from '../data';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const architect = architects.find(a => a.id === params.id);
  
  if (!architect) {
    return NextResponse.json({ error: 'Architect not found' }, { status: 404 });
  }
  
  return NextResponse.json(architect);
}
