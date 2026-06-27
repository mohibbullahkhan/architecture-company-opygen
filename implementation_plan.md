# Architecture Website Completion Plan

We will build out all remaining pages (`/projects`, `/about`, `/blog`, `/contact`, `/projects/[id]`) following the exact same premium design language (Inter + Playfair, red accents, SVG wavy image masking, pill buttons, and Framer Motion stagger animations).

## Proposed Changes

### 1. Types & Data Layer (`types/index.ts` & `app/api`)
- [NEW] `types/index.ts`: Define strong typings for `Project`, `Architect`, `BlogPost`, `CaseStudy`, and `Category`.
- [NEW] Create mock API route handlers for all required RTK endpoints (`/api/projects`, `/api/blog`, etc.).
- [MODIFY] `store/api/constructionApi.ts`: Implement `getProjectById`, `getRelatedProjects`, `getBlogPosts`, etc.

### 2. Global Transitions (`app/template.tsx`)
- [NEW] `app/template.tsx`: Wrap all page changes in a smooth Framer Motion `AnimatePresence` wrapper for fluid cross-page routing.

### 3. Page Implementations
- **Projects Page** (`/projects/page.tsx`): 
  - Dark 50vh hero
  - Filter bar (horizontally scrolling pills)
  - Masonry grid of clipped images with alternating heights.
- **About Page** (`/about/page.tsx`): 
  - 60vh hero
  - Story section
  - Stats row (4-col numbers)
  - Team section (6 architects)
  - Values grid (Large ghost numbers)
  - Expertise section (Reusing the `ProjectCategoriesHero` logic but with "Our Expertise").
- **Blog Page** (`/blog/page.tsx`): 
  - 45vh hero
  - Featured post layout
  - 3-column blog grid
  - Newsletter subscribe section.
- **Contact Page** (`/contact/page.tsx`): 
  - 45vh hero
  - Split column info & form layout
  - Full-width studio map/image at the bottom with a top-only wave SVG clip.
- **Single Project Page** (`/projects/[id]/page.tsx`): 
  - 70vh full-bleed hero
  - Detail metrics row (Client, Year, Area)
  - Project description
  - Masonry image gallery (alternating heights, clipped)
  - Related projects grid.

### 4. Global Components Updates
- [MODIFY] `Footer.tsx`: Update exactly to the 4-column layout spec provided.
- [MODIFY] `Navbar.tsx`: Update links to point to actual routes (`/projects`, `/about`, etc.) instead of anchor tags.

## User Review Required

> [!IMPORTANT]
> The current `Navbar` uses a transparent background and white text, which perfectly overlays dark Hero sections. Since *all* the new pages requested include dark Hero sections at the top, I will reuse this Navbar without changes to keep the premium aesthetic intact. If you ever add a page *without* a dark hero, we will need to add a solid white background variant to the Navbar.

> [!NOTE]
> For the contact form, I will implement a fully controlled React state form (no HTML `<form>` tags) as requested. Since there's no real backend yet, the "Send Message" button will just simulate a success state or log to the console.

Please review the plan above. Click **Proceed** to begin execution!
