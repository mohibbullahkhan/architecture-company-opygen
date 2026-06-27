import { NextResponse } from 'next/server';
import { projects } from '../route';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  
  // Return exactly 3 related projects
  if (category && category !== 'All') {
    const related = projects.filter(p => p.category === category).slice(0, 3);
    // If not enough related by category, pad with others
    if (related.length < 3) {
        const others = projects.filter(p => p.category !== category).slice(0, 3 - related.length);
        return NextResponse.json([...related, ...others]);
    }
    return NextResponse.json(related);
  }
  
  return NextResponse.json(projects.slice(0, 3));
}
