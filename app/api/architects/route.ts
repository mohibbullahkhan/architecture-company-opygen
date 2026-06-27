import { NextResponse } from 'next/server';
import { architects } from './data';

export async function GET() {
  return NextResponse.json(architects);
}
