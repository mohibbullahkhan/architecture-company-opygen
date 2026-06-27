import { NextResponse } from 'next/server';
import { Category } from '@/types';

export const categories: Category[] = [
  { id: '1', name: 'All', slug: 'all' },
  { id: '2', name: 'Interior Design', slug: 'interior-design' },
  { id: '3', name: 'Commercial', slug: 'commercial' },
  { id: '4', name: 'Landscape', slug: 'landscape' },
  { id: '5', name: 'Civic', slug: 'civic' },
  { id: '6', name: 'Residential', slug: 'residential' }
];

export async function GET() {
  return NextResponse.json(categories);
}
