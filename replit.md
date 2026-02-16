# Alnour Alharin - Personal Portfolio Website

## Overview

This is a personal portfolio website for Alnour Alharin, a Senior Software Engineer at Oracle. The site showcases professional experience, academic publications, education, and skills in Machine Learning, Anomaly Detection, and Agentic AI. It's built as a full-stack TypeScript application with a React frontend and Express backend, following a monorepo structure with shared code between client and server.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Monorepo Structure
The project uses a three-directory monorepo layout:
- `client/` — React single-page application (SPA)
- `server/` — Express.js API server
- `shared/` — Shared TypeScript types and database schema used by both client and server

### Frontend Architecture
- **Framework:** React with TypeScript (non-RSC, client-side rendering)
- **Routing:** Wouter (lightweight alternative to React Router) with `<Switch>` and `<Route>`
- **State Management / Data Fetching:** TanStack React Query (`@tanstack/react-query`)
- **UI Components:** shadcn/ui (new-york style) built on Radix UI primitives
- **Styling:** Tailwind CSS v4 (using `@tailwindcss/vite` plugin and `@import "tailwindcss"` syntax), with CSS custom properties for theming
- **Fonts:** Inter (body), Lora (serif/headings), JetBrains Mono (code) — loaded from Google Fonts
- **Theme System:** Custom multi-theme system with CSS `data-theme` attribute (Manuscript/Swiss Grid/Lab Notebook variants). Theme colors defined as HSL CSS variables in `index.css`
- **Build Tool:** Vite with React plugin, path aliases (`@/` → `client/src/`, `@shared/` → `shared/`, `@assets/` → `attached_assets/`)
- **Icons:** Lucide React

### Backend Architecture
- **Framework:** Express.js v5 running on Node.js
- **Runtime:** TypeScript executed with `tsx` in development
- **API Pattern:** All API routes prefixed with `/api`, registered in `server/routes.ts`
- **Storage Layer:** Abstracted through `IStorage` interface in `server/storage.ts`. Currently uses in-memory storage (`MemStorage` class). Designed to be swapped for a database-backed implementation.
- **Dev Server:** Vite dev server integrated as Express middleware (HMR via `server/vite.ts`)
- **Production:** Static files served from `dist/public` via `server/static.ts` with SPA fallback

### Database
- **ORM:** Drizzle ORM with PostgreSQL dialect
- **Schema:** Defined in `shared/schema.ts` using Drizzle's `pgTable` helpers
- **Validation:** Zod schemas generated from Drizzle schemas via `drizzle-zod`
- **Current Schema:** Users table with `id` (UUID, auto-generated), `username`, and `password`
- **Migrations:** Drizzle Kit configured to output to `./migrations` directory
- **Push Command:** `npm run db:push` to push schema changes directly
- **Connection:** Requires `DATABASE_URL` environment variable for PostgreSQL

### Build Process
- **Client Build:** Vite builds to `dist/public/`
- **Server Build:** esbuild bundles `server/index.ts` to `dist/index.cjs` (CommonJS), with strategic dependency bundling for faster cold starts
- **Production Start:** `node dist/index.cjs`

### Key Design Decisions

1. **In-memory storage as default** — The storage interface (`IStorage`) allows easy migration to PostgreSQL via Drizzle ORM. The schema is already defined for Postgres, but the runtime currently uses `MemStorage`. This is a portfolio site so persistent data may not be critical yet.

2. **Shared schema between client and server** — Types and validation schemas in `shared/` ensure type safety across the full stack without duplication.

3. **shadcn/ui component library** — Components are copied into `client/src/components/ui/` and customized directly. This gives full control over styling. The components have been customized with Replit-specific modifications (hover-elevate, shadow changes, border styles).

4. **CSS-variable-based theming** — Three visual themes (Manuscript, Swiss Grid, Lab Notebook) are implemented via CSS custom properties and `data-theme` attributes, allowing runtime theme switching without re-rendering.

5. **SPA with server-side fallback** — All unmatched routes return `index.html` for client-side routing via wouter.

6. **File-based articles** — Articles are stored as folders in the `articles/` directory at the project root. Each folder is a slug (e.g., `my-article-name/`) containing an `index.md` file with YAML frontmatter (`title`, `description`, `date`, `tags`) and markdown body content. The server reads these folders at request time and serves them via `/api/articles` (list) and `/api/articles/:slug` (detail). Uses `gray-matter` for frontmatter parsing and `marked` for markdown-to-HTML conversion.

## External Dependencies

### Required Services
- **PostgreSQL Database** — Required for Drizzle ORM. Connection via `DATABASE_URL` environment variable. The `connect-pg-simple` package is included for session storage.

### Key NPM Packages
- **Frontend:** React, wouter, @tanstack/react-query, Radix UI primitives, embla-carousel-react, react-day-picker, recharts, react-hook-form, zod, vaul (drawer), cmdk (command palette), react-resizable-panels
- **Backend:** Express v5, drizzle-orm, drizzle-zod, express-session, connect-pg-simple, nanoid
- **Build:** Vite, esbuild, tsx, drizzle-kit, @tailwindcss/vite
- **Replit-specific:** @replit/vite-plugin-runtime-error-modal, @replit/vite-plugin-cartographer (dev only), @replit/vite-plugin-dev-banner (dev only)

### External APIs
- Google Fonts CDN (Inter, Lora, JetBrains Mono)
- No other external APIs are currently integrated, though the build allowlist includes packages for OpenAI, Google Generative AI, Stripe, Nodemailer, and Passport — suggesting planned future integrations