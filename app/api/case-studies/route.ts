import { NextResponse } from 'next/server';

export async function GET() {
  const caseStudies = [
    {
      id: '1',
      title: 'Fulham Town Hall extension',
      description: 'Improvements at the then-start and future of a loft apartment on how to maximize the use of space and individual character',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
    },
    {
      id: '2',
      title: 'The White Apartment',
      description: 'Architectural Film Magazine Bridging Heritage and Modern Living on to Some Residential Landmark',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
    },
  ];

  return NextResponse.json(caseStudies);
}
