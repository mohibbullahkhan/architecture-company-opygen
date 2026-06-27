import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { RecentProjects } from "@/components/RecentProjects";
import { Architects } from "@/components/Architects";
import { ProjectCategoriesHero } from "@/components/ProjectCategoriesHero";
import { CaseStudies } from "@/components/CaseStudies";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg">
      <Navbar />
      <Hero />
      <AboutUs />
      <RecentProjects />
      <Architects />
      <ProjectCategoriesHero />
      <CaseStudies />
      <Footer />
    </main>
  );
}
