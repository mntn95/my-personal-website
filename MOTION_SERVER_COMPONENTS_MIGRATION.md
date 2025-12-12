# Motion Server Components Migration Instructions

## Overview

Motion supports React Server Components! Components that were unnecessarily converted to client components during the Motion integration should be reverted to server components using the correct Motion import pattern.

## Motion Import Patterns

### Client Components

```typescript
import { motion } from "motion/react";
```

### Server Components

```typescript
import * as motion from "motion/react-client";
```

**Usage remains the same:** `<motion.div>`, `<motion.section>`, etc.

## Migration Checklist

For each component file, check if it:

- ❌ Uses client-side hooks: `useState`, `useEffect`, `useRef`, `useCallback`, `useMemo`
- ❌ Uses browser APIs: `window`, `document`, `localStorage`, `sessionStorage`
- ❌ Uses event handlers that require interactivity: `onClick`, `onChange`, `onSubmit` (unless for simple links/forms)
- ❌ Uses `useTranslations` from `next-intl` (should use `getTranslations` from `next-intl/server` instead)
- ❌ Uses other client-only React hooks or APIs

If **NONE** of the above apply, the component can be a **Server Component**.

## Step-by-Step Migration Process

### Step 1: Identify Convertible Components

Components that can be converted back to server components (no client-side features):

**Pure Presentational (No Translations):**

1. **section-header.tsx** - Pure presentational, no hooks
2. **page-header.tsx** - Pure presentational, no hooks
3. **contact/info.tsx** - Pure presentational, no hooks
4. **project-card.tsx** - Pure presentational, no hooks
5. **cta-button.tsx** (home/projects) - Pure presentational, no hooks
6. **gradient-orbs.tsx** - Uses infinite animations only, no hooks
7. **scroll-indicator.tsx** - Uses infinite animations only, no hooks

**Uses Translations Only (Can Convert to getTranslations):** 8. **graduation-project.tsx** - Uses `useTranslations`, can use `getTranslations` from server 9. **education/education.tsx** - Uses `useTranslations`, can use `getTranslations` from server 10. **about/profile.tsx** - Uses `useTranslations`, can use `getTranslations` from server 11. **about/hard-skills.tsx** - Uses `useTranslations`, can use `getTranslations` from server 12. **about/soft-skills.tsx** - Uses `useTranslations`, can use `getTranslations` from server 13. **about/more-about-me.tsx** - Uses `useTranslations`, can use `getTranslations` from server 14. **education/courses.tsx** - Uses `useTranslations`, can use `getTranslations` from server 15. **hero-content.tsx** - Uses `useTranslations`, can use `getTranslations` from server 16. **projects-grid.tsx** - Uses `useTranslations`, can use `getTranslations` from server 17. **service-card/index.tsx** - Uses `useTranslations`, can use `getTranslations` from server 18. **contact.tsx** - Uses `useTranslations`, can use `getTranslations` from server 19. **services-card.tsx** - Uses `useTranslations`, can use `getTranslations` from server 20. **cta-button.tsx** (home/about) - Uses `useTranslations`, can use `getTranslations` from server

### Step 2: For Each Convertible Component

#### A. Remove "use client" directive

```typescript
// REMOVE THIS LINE:
"use client";
```

#### B. Change Motion import

```typescript
// BEFORE (Client Component):
import { motion } from "motion/react";

// AFTER (Server Component):
import * as motion from "motion/react-client";
```

#### C. Convert useTranslations to getTranslations (if applicable)

**BEFORE:**

```typescript
"use client";
import { useTranslations } from "next-intl";

const Component = (): React.ReactElement => {
  const t = useTranslations("Namespace");
  // ... component code
};
```

**AFTER:**

```typescript
import { getTranslations } from "next-intl/server";

const Component = async (): Promise<React.ReactElement> => {
  const t = await getTranslations("Namespace");
  // ... component code
};
```

**Important Notes:**

- Component must be `async`
- Return type changes from `React.ReactElement` to `Promise<React.ReactElement>`
- `getTranslations` is awaited

#### D. Update motion component usage (if needed)

The usage of motion components remains **exactly the same**:

```typescript
<motion.div
  initial="initial"
  whileInView="animate"
  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
  variants={fadeInUp}
>
  {/* content */}
</motion.div>
```

### Step 3: Components That MUST Stay Client Components

These components use client-side features and **cannot** be server components:

1. **back-to-top.tsx** - Uses `useState`, `useEffect`, `window` API, scroll handlers, `AnimatePresence`
2. **typing-text.tsx** - Uses `useState`, `useEffect`, `useRef` for typing animation logic
3. **form/container.tsx** - Uses `useState`, form handlers (`onSubmit`, `onChange`)
4. **filter-bar.tsx** - Uses interactive handlers (`onClick`, `onChange`) for filtering functionality
5. **skills-grid.tsx** (home/hero) - Uses `useIntersectionObserver` hook for animation triggers
6. **skills-grid.tsx** (home/about) - Uses `useIntersectionObserver` hook for animation triggers
7. **loader.tsx** - Uses conditional rendering and Motion animations with delays (could potentially be server, but keeping as client for consistency)

### Step 4: Verification Checklist

After converting each component:

- [ ] Removed `"use client"` directive
- [ ] Changed import from `motion/react` to `motion/react-client`
- [ ] If using translations: Changed `useTranslations` to `getTranslations` and made component `async`
- [ ] Updated return type to `Promise<React.ReactElement>` if component is now async
- [ ] Motion component usage remains unchanged
- [ ] No client-side hooks or APIs are used
- [ ] Component compiles without errors
- [ ] Animations still work correctly

## Example Migration

### Before (Client Component):

```typescript
"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { fadeInUp } from "@/lib/motion/variants";

const SectionHeader = ({
  title,
  description,
}: SectionHeaderProps): React.ReactElement => {
  const t = useTranslations("HomePage");

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      variants={fadeInUp}
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </motion.div>
  );
};
```

### After (Server Component):

```typescript
import * as motion from "motion/react-client";
import { getTranslations } from "next-intl/server";
import { fadeInUp } from "@/lib/motion/variants";

const SectionHeader = async ({
  title,
  description,
}: SectionHeaderProps): Promise<React.ReactElement> => {
  const t = await getTranslations("HomePage");

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      variants={fadeInUp}
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </motion.div>
  );
};
```

## Files to Convert (Priority Order)

### High Priority (Pure Presentational - No Translations)

1. `src/components/common/section-header.tsx`
2. `src/components/common/page-header.tsx`
3. `src/components/features/contact/info.tsx`
4. `src/components/features/projects/projects-grid/project-card.tsx`
5. `src/components/features/home/projects/cta-button.tsx`
6. `src/components/features/home/hero/gradient-orbs.tsx`
7. `src/components/features/home/hero/scroll-indicator.tsx`

### Medium Priority (Uses Translations - Can Convert to getTranslations)

8. `src/components/features/education/graduation-project.tsx`
9. `src/components/features/education/education.tsx`
10. `src/components/features/about/profile.tsx`
11. `src/components/features/about/hard-skills.tsx`
12. `src/components/features/about/soft-skills.tsx`
13. `src/components/features/about/more-about-me.tsx`
14. `src/components/features/education/courses.tsx`
15. `src/components/features/home/hero/hero-content.tsx`
16. `src/components/features/home/projects/projects-grid.tsx`
17. `src/components/features/services/service-card/index.tsx`
18. `src/components/features/home/contact.tsx`
19. `src/components/features/home/services/services-card.tsx`
20. `src/components/features/home/about/cta-button.tsx`

## Notes

- Motion animations work identically in both client and server components
- Server components with Motion will have their initial state rendered on the server
- The `whileInView` prop still works in server components - it hydrates on the client
- All Motion props (`initial`, `animate`, `variants`, `viewport`, etc.) work the same way
- Server components improve performance by reducing JavaScript bundle size
- Server components enable better SEO and faster initial page loads
