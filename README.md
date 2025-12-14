# Mathieu Nguyen - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Front-End Developer. Built with Next.js, TypeScript, and Tailwind CSS, featuring smooth animations, multi-language support, and a contact form for potential collaborations.

**Live Demo:** [https://matt-nguyen.vercel.app/](https://matt-nguyen.vercel.app/)

## About

This portfolio serves as a professional showcase for connecting with business owners, freelancers, and tech teams looking to collaborate on web development projects or hire a front-end developer. It demonstrates modern web development practices, clean code architecture, and attention to user experience.

## ✨ Features

- **Modern Homepage** - Engaging hero section with animated typing text, skills showcase, and smooth scroll indicators
- **Project Showcase** - Interactive projects gallery with filtering by technology tags and search functionality
- **Contact Form** - Secure contact form with email notifications via Resend API, rate limiting, and form validation
- **Multi-language Support** - Full internationalization (i18n) with English and French translations using next-intl
- **Responsive Design** - Mobile-first approach ensuring perfect experience across all devices
- **Smooth Animations** - Motion-powered animations and transitions for enhanced user experience
- **Standardized Page Layout** - Consistent page structure with shared navigation, footer, and layout components across all pages (except homepage)
- **Type-Safe** - Built with TypeScript for type safety and better developer experience
- **SEO Optimized** - Proper metadata, Open Graph tags, and semantic HTML structure
- **Accessibility** - ARIA labels, keyboard navigation, and semantic HTML for better accessibility

## 🛠️ Tech Stack

### Core

- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Styling & UI

- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Motion](https://motion.dev/)** (formerly Framer Motion) - Animation library
- **[Lucide React](https://lucide.dev/)** - Icon library

### Internationalization

- **[next-intl](https://next-intl-docs.vercel.app/)** - Internationalization for Next.js

### Forms & Validation

- **[React Hook Form](https://react-hook-form.com/)** - Form state management
- **[Zod](https://zod.dev/)** - Schema validation

### Email

- **[Resend](https://resend.com/)** - Email API service
- **[React Email](https://react.email/)** - Email template components

### Testing

- **[Jest](https://jestjs.io/)** - JavaScript testing framework
- **[React Testing Library](https://testing-library.com/react)** - React component testing

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **pnpm** - Package manager

## 🚀 Getting Started

### Prerequisites

- **Node.js** 22 or lower (tested with Node 22)
- **pnpm** - Package manager ([Installation guide](https://pnpm.io/installation))

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd my-portfolio-website
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   RESEND_API_KEY=your_resend_api_key_here
   CONTACT_RECIPIENT_EMAIL=your_email@example.com
   ```

   Optional environment variables:

   ```env
   RESEND_FROM_EMAIL=your_from_email@example.com  # Defaults to onboarding@resend.dev if not set
   ```

4. **Run the development server**

   ```bash
   pnpm run dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm start` - Start production server
- `pnpm run lint` - Run ESLint
- `pnpm test` - Run Jest tests
- `pnpm test:watch` - Run tests in watch mode
- `pnpm test:coverage` - Run tests with coverage report

## 📁 Project Structure

```
my-portfolio-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── education/          # Education page
│   │   ├── projects/           # Projects page
│   │   ├── services/           # Services page
│   │   └── api/                # API routes
│   │       └── contact/        # Contact form API endpoint
│   ├── components/             # React components
│   │   ├── common/            # Shared components
│   │   ├── features/          # Feature-specific components
│   │   ├── layouts/           # Layout components
│   │   └── ui/                # UI primitives
│   ├── data/                  # Static data (projects, services, etc.)
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utility libraries
│   │   ├── api/               # API helpers
│   │   ├── email/             # Email service
│   │   ├── motion/            # Animation utilities
│   │   ├── utils/             # General utilities
│   │   └── validation/        # Zod schemas
│   ├── types/                 # TypeScript type definitions
│   └── styles/               # Global styles
├── messages/                  # i18n translation files
│   ├── en.json               # English translations
│   └── fr.json               # French translations
├── public/                    # Static assets
│   └── images/               # Project images
└── package.json
```

### Key Architecture Highlights

- **Standardized Page Layout**: All pages (except homepage) use the `PageLayout` component which provides consistent structure with navigation, footer, and scroll handling
- **Component Organization**: Components are organized by feature and reusability (common, features, layouts, ui)
- **Type Safety**: Centralized type definitions in `src/types/`
- **Internationalization**: Translation files in `messages/` directory with support for multiple locales

## 🚀 Deployment

This project is deployed on [Vercel](https://vercel.com/).

**Live Site:** [https://matt-nguyen.vercel.app/](https://matt-nguyen.vercel.app/)

## 🧪 Testing

This project uses Jest and React Testing Library for testing.

### Run Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage report
pnpm test:coverage
```

### Test Structure

Tests are located alongside their components in `__tests__` directories:

- `src/components/common/__tests__/`
- `src/components/ui/__tests__/`
- `src/components/layouts/__tests__/`
- `src/lib/utils/__tests__/`
- `src/lib/motion/__tests__/`

## 📧 Contact

Feel free to reach out through any of the following channels:

- **Portfolio Website**: [https://matt-nguyen.vercel.app/](https://matt-nguyen.vercel.app/)
- **Contact Form**: [https://matt-nguyen.vercel.app/contact](https://matt-nguyen.vercel.app/contact)
- **GitHub**: [@mntn95](https://github.com/mntn95/)
- **LinkedIn**: [Mathieu Nguyen](https://www.linkedin.com/in/mathieu-ng/)
- **Email**: mathieu.nguyen@proton.me

I'm open to:

- Collaborating on web development projects
- Joining tech teams as a front-end developer
- Discussing freelance opportunities

## 📄 License

This project is private and proprietary. All rights reserved.

© 2025 Mathieu Nguyen
