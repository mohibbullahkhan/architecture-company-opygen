import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Project, Architect, CaseStudy, BlogPost, Category } from '@/types';

export const constructionApi = createApi({
  reducerPath: 'constructionApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getProjects: builder.query<Project[], string | void>({
      query: (category) => category ? `projects?category=${category}` : 'projects',
    }),
    getProjectById: builder.query<Project, string>({
      query: (id) => `projects/${id}`,
    }),
    getRelatedProjects: builder.query<Project[], string>({
      query: (category) => `projects/related?category=${category}`,
    }),
    getArchitects: builder.query<Architect[], void>({
      query: () => 'architects',
    }),
    getArchitectById: builder.query<Architect, string>({
      query: (id) => `architects/${id}`,
    }),
    getBlogPosts: builder.query<BlogPost[], void>({
      query: () => 'blog',
    }),
    getBlogPostById: builder.query<BlogPost, string>({
      query: (id) => `blog/${id}`,
    }),
    getCaseStudies: builder.query<CaseStudy[], void>({
      query: () => 'case-studies',
    }),
    getProjectCategories: builder.query<Category[], void>({
      query: () => 'categories',
    }),
  }),
});

export const { 
  useGetProjectsQuery, 
  useGetProjectByIdQuery,
  useGetRelatedProjectsQuery,
  useGetArchitectsQuery, 
  useGetArchitectByIdQuery,
  useGetBlogPostsQuery,
  useGetBlogPostByIdQuery,
  useGetCaseStudiesQuery,
  useGetProjectCategoriesQuery
} = constructionApi;
