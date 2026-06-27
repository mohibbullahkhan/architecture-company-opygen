import { NextResponse } from 'next/server';
import { projects } from './data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');

  if (category && category !== 'All') {
    const filtered = projects.filter(p => p.category === category);
    return NextResponse.json(filtered);
  }

  return NextResponse.json(projects);
}
