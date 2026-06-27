import { NextResponse } from 'next/server';
import { projects } from '../data';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const project = projects.find(p => p.id === params.id);
  
  if (!project) {
    return NextResponse.json({ error: 'Project not found' }, { status: 404 });
  }
  
  return NextResponse.json(project);
}
