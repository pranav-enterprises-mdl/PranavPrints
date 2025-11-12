# Pranav Enterprises - Printing Services Website

## Overview

Pranav Enterprises is a modern, responsive website for a premium printing business based in Mudhol, Karnataka. The site showcases offset digital and flex printing services, features a portfolio gallery, and includes a contact form for customer inquiries. Built as a single-page application with smooth scrolling navigation, it emphasizes visual impact and mobile-first design principles.

**Status**: ✅ Complete and production-ready (November 12, 2025)
- All Phase 1 sections implemented and tested (Navigation, Hero, Services, Portfolio, About, Contact, Footer)
- **Phase 2 Features Complete:**
  - ✅ Quote Calculator: Real-time pricing estimates with material selection and quantity inputs
  - ✅ Customer Testimonials: Carousel-based testimonial section with 5-star ratings
  - ✅ Service Detail Pages: Dedicated pages for Offset Digital and Flex Printing with technical specs, pricing tiers, workflow diagrams
  - ✅ File Upload Portal: Customer design submission portal with drag-and-drop, file validation (PDF/JPG/PNG/AI/ZIP, max 50MB), metadata storage
  - ✅ WhatsApp Integration: Multiple WhatsApp click-to-chat touchpoints (hero CTA, contact section, footer, floating button) for instant customer communication
- Contact form and file uploads connected to PostgreSQL database with proper validation
- End-to-end testing verified all functionality
- CMYK-inspired vibrant design system with cyan/magenta color palette
- Instagram integration: https://www.instagram.com/pranaventerprisesmdl/
- WhatsApp Business: wa.me/919740007147 (multiple entry points throughout site)
- Contact details: Phone 9740007147, Mudhol, Bagalkote, Karnataka

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, configured for fast HMR and optimized production builds
- **Wouter** for lightweight client-side routing (single-page app with 404 handling)
- **TanStack Query** (React Query) for server state management and API interactions

**UI Component System**
- **shadcn/ui** components built on Radix UI primitives, providing accessible and customizable base components
- **Tailwind CSS** for utility-first styling with custom design tokens
- **class-variance-authority** and **clsx** for conditional styling patterns
- Custom design system defined in `design_guidelines.md` emphasizing bold typography, vibrant gradients, and high-contrast layouts

**Component Structure**
- Page-level components: `Home.tsx` (main landing page), `ServiceDetailPage.tsx` (service-specific pages), `NotFound.tsx`
- Feature sections: `HeroSection`, `ServicesSection`, `QuoteCalculator`, `PortfolioSection`, `TestimonialsSection`, `AboutSection`, `FileUploadPortal`, `ContactSection`, `Navigation`, `Footer`
- Reusable components: `WhatsAppButton`, `FloatingWhatsAppButton`
- All sections designed for smooth scrolling navigation within single-page layout
- Service detail pages use dynamic routing: `/services/:serviceId` (offset-digital, flex-printing)

**State Management Strategy**
- React Query for server state (contact form submissions, file upload submissions, quote calculations)
- Local component state (useState) for UI interactions (mobile menu, form inputs, image modals, file selection, carousel navigation)
- No global state management library needed due to simple application scope

### Backend Architecture

**Server Framework**
- **Express.js** with TypeScript running on Node.js
- Custom middleware for request logging with duration tracking
- JSON body parsing with raw body preservation for webhook-style integrations
- Development/production environment separation via NODE_ENV

**API Design**
- RESTful endpoints:
  - `POST /api/contact`: Contact form submissions
  - `POST /api/file-uploads`: File upload metadata submissions (actual files not stored, only metadata for demo)
  - `POST /api/quotes/calculate`: Real-time quote price calculations
- Zod schema validation with human-readable error messages via `zod-validation-error`
- Consistent error responses with appropriate HTTP status codes
- Storage layer abstraction through `IStorage` interface pattern
- Contact and file upload submissions securely stored in PostgreSQL (no public read endpoints for privacy)
- Quote calculations performed server-side with business logic for different service types and materials

**Development Setup**
- **tsx** for running TypeScript directly in development
- **esbuild** for production bundling (server code)
- Vite handles client-side bundling separately
- Custom Vite middleware integration for SPA serving in development

### Data Storage

**Database**
- **PostgreSQL** via Replit's built-in database (using standard `pg` driver)
- **Drizzle ORM** for type-safe database operations and schema management
- Connection pooling via `node-postgres` (pg) Pool for reliable Replit PostgreSQL connections

**Schema Design**
- `users` table: Basic user authentication structure (id, username, password)
- `contact_submissions` table: Stores customer inquiries with fields for name, phone, email, service type, and message
- `file_uploads` table: Stores file upload metadata with customer info, service type, file details (name, size, type), and notes
- Schema defined in `shared/schema.ts` using Drizzle's PostgreSQL table builders
- Zod schemas derived from Drizzle schemas for runtime validation consistency
- Insert schemas with validation rules (email format, phone length, file size limits, etc.)

**Migration Strategy**
- Drizzle Kit configured for schema migrations in `./migrations` directory
- `db:push` command for pushing schema changes directly to database
- Type-safe queries through Drizzle's query builder

### Design System

**Typography Hierarchy**
- Primary fonts: Poppins/Inter for headings and bold statements
- Secondary fonts: Open Sans/Roboto for body text
- Pre-configured Google Fonts integration in HTML head
- Responsive text sizing using Tailwind's responsive variants

**Color System**
- HSL-based color tokens for easy theme manipulation
- Light mode default with dark mode class-based toggle support
- Primary color: Cyan/blue (`193 95% 45%`)
- Accent color: Pink/magenta (`330 85% 55%`)
- Semantic colors: destructive, muted, secondary with corresponding foreground colors

**Spacing & Layout**
- Consistent vertical rhythm with `py-12 md:py-20 lg:py-24` section padding
- Container strategy: Full-width sections with inner `max-w-7xl` constraint
- Grid-based layouts for services (2-column), portfolio (2-4 column), and features

## External Dependencies

### Third-Party Services

**Database Hosting**
- Replit PostgreSQL built-in database (connection via DATABASE_URL environment variable)
- Database already provisioned and configured
- Contact form submissions stored permanently with proper schema validation

**Image Assets**
- Local image storage in `attached_assets/generated_images/` directory
- Hero background, service images, and portfolio samples stored as PNG files
- No external CDN or image optimization service currently configured

### Key npm Packages

**UI & Styling**
- `@radix-ui/*`: 20+ headless UI component primitives for accessibility
- `tailwindcss`: Utility-first CSS framework
- `embla-carousel-react`: Touch-friendly carousel component
- `lucide-react`: Icon library for consistent iconography

**Form Management**
- `react-hook-form`: Performant form state management
- `@hookform/resolvers`: Zod schema resolver integration
- `zod`: Runtime type validation for forms and API payloads

**Development Tools**
- `@replit/vite-plugin-*`: Replit-specific development enhancements (error overlay, cartographer, dev banner)
- `vite-plugin-runtime-error-modal`: Runtime error UI overlay
- TypeScript with strict mode enabled for type safety

**Data Fetching**
- `@tanstack/react-query`: Server state management with caching and background updates
- Custom `apiRequest` wrapper for consistent fetch API usage with credentials

### Build & Deployment Configuration

**Environment Requirements**
- `DATABASE_URL`: PostgreSQL connection string (required)
- `NODE_ENV`: development/production environment flag
- `REPL_ID`: Optional Replit-specific identifier for development plugins

**Build Process**
1. Frontend: Vite bundles React app to `dist/public`
2. Backend: esbuild bundles Express server to `dist/index.js`
3. Production: Serves static files from `dist/public` with Express fallback

**Path Aliases**
- `@/*`: Maps to `client/src/*`
- `@shared/*`: Maps to `shared/*`
- `@assets/*`: Maps to `attached_assets/*`