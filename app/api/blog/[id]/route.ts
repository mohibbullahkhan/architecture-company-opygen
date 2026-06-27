import { NextResponse } from 'next/server';
import { blogPosts } from '../route';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const post = blogPosts.find(p => p.id === params.id);
  
  if (!post) {
    return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
  }
  
  return NextResponse.json(post);
}
