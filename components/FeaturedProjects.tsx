'use client';

import { useGetProjectsQuery } from '@/store/api/constructionApi';
import Image from 'next/image';

export function FeaturedProjects() {
  const { data: projects, isLoading } = useGetProjectsQuery();

  if (isLoading) return null;

  return (
    <section className="bg-white">
      <div className="grid md:grid-cols-3 gap-0">
        {projects?.map((project) => (
          <div key={project.id} className="relative aspect-square w-full group overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
              <h3 className="text-white font-bold text-xl">{project.title}</h3>
              <p className="text-gray-300 text-sm">{project.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
