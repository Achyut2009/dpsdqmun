# The official website for the DPS-DQ MUN 7th Edition 2025.

<p align="center">
  <img src="./public/2025/Screenshot 2025-12-10 231435.png" width="600">
</p>


This is the official website for the DPS-DQ MUN 7th Edition 2025; showcasing event details, schedule, organizing comittee and more.


## Guide
To run the site locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Achyut2009/dpsdqmun.git`
2. Navigate to the project directory: `cd myway`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open your browser and go to `http://localhost:3000` to view the site. 

## Directory Structure and Purpose

### Root Level Structure
```
/
├── app/                  # Next.js 15+ app directory (main application code)
├── components/           # Reusable UI components using shadcn and tailwind css
├── lib/                  # Utility functions and shared logic with Class Funcion
├── public/               # Static assets
├── hooks/                # Folder containing react hooks
└── [config files]        # Various configuration files (next.config.mjs, tailwind.config.ts, etc.)
```
1. /app Directory (Main Application Routes)
```
/app
├── layout.tsx           # Root layout component
├── page.tsx            # Homepage component
├── globals.css         # Global styles
├── about/              # About page route
├── schedule/           # Schedule page route
├── references/         # References page route
├── motions/           # Motions page route
├── 2022/              # 2022 content
└── 2023/              # 2023 content
```

2. /components Directory
```
/components
├── ui/                 # Shadcn UI components
├── navbar.tsx          # Main navigation component
├── text-scamble.tsx    # Contaning the text animation
├── footer.tsx         # Footer of the website
├── video.tsx          # Video player component
├── card.tsx           # Card component
├── contact-modal.tsx   # Modal/Dialog box for contact section
└── [other UI components]
```
- Reusable UI components go here
- Navigation-related changes: navbar.tsx and mobile-nav.tsx
- New UI components should be added here with appropriate naming


## Common Development Tasks

### Adding New Pages
- Create a new directory under /app
- Add a page.tsx file in the new directory
- Update navigation components if needed (navbar.tsx, mobile-nav.tsx)

### Modifying UI Components
- Check /components directory for existing components
- Shadcn UI components are in /components/ui
- Create new components in /components if needed

### Styling Changes
- Global styles: Modify /app/globals.css
- Component-specific styles: Use Tailwind classes in component files
- Theme customization: Update tailwind.config.ts

### Data Updates
- Modify data.tsx for content changes
- Ensure type safety is maintained (TypeScript)
- Update corresponding components that use the modified data
