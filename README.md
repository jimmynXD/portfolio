# James Nguyen - Portfolio

A modern portfolio website built with Next.js 14, showcasing my work as a Senior UX Design Technologist. The site features a collection of case studies presented in the STAR (Situation-Task-Action-Result) format, highlighting my expertise in UX design, frontend development, and technical leadership.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **STAR Format Case Studies**: Professional presentation of projects following Amazon's STAR framework
- **Responsive Design**: Optimized for all screen sizes
- **Performance Optimized**: Fast loading and smooth interactions
- **SEO Friendly**: Metadata and structured content for better search visibility

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page with hero section and featured projects
│   ├── projects/
│   │   ├── page.tsx          # Projects listing page
│   │   └── [id]/
│   │       └── page.tsx      # Individual project details page
├── components/
│   └── ui/
│       └── button.tsx        # Reusable button component
└── lib/
    └── projects.ts           # Project data and types
```

## 🛠️ Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## 📝 Adding New Projects

To add a new project, update the `projects` array in `src/lib/projects.ts`. Each project follows this structure:

```typescript
{
  id: string;              // URL-friendly identifier
  title: string;           // Project title
  situation: string;       // Project context and challenge
  task: string;            // Project goals and objectives
  action: string[];        // List of actions taken
  result: string[];        // List of outcomes and achievements
  metrics?: {              // Optional key metrics
    kpi: string;
    before: string;
    after: string;
  }[];
  imageUrl?: string;       // Optional project image
  demoUrl?: string;        // Optional demo link
  githubUrl?: string;      // Optional GitHub link
}
```

## 🎨 Customization

- **Colors**: Update the Tailwind configuration in `tailwind.config.ts`
- **Typography**: Modify the font settings in `tailwind.config.ts`
- **Layout**: Adjust the grid and spacing in the page components
- **Content**: Update project data in `src/lib/projects.ts`

## 📧 Contact

- LinkedIn: [linkedin.com/in/jamesnpro](https://www.linkedin.com/in/jamesnpro/)

## 🏗️ Implementation Details

### Data Structure (`src/lib/projects.ts`)

- Created a TypeScript interface for projects
- Structured all case studies with STAR format
- Included metrics and optional links (demo, GitHub)

### Project Details Page (`src/app/projects/[id]/page.tsx`)

- Dynamic route for each project
- Clean, professional layout with STAR sections
- Sidebar with key metrics and links
- Responsive design for all screen sizes

### Projects Listing Page (`src/app/projects/page.tsx`)

- Grid layout of all projects
- Preview cards with key information
- Hover effects and transitions
- Responsive design

### Home Page (`src/app/page.tsx`)

- Professional hero section
- Featured projects showcase
- Clear call-to-actions
- LinkedIn integration

## 🎯 Design Principles

The design follows modern web practices and is optimized for the Senior UX Design Technologist role at Amazon. Key features include:

- Clear STAR format presentation
- Emphasis on metrics and results
- Professional typography and spacing
- Responsive and accessible design
- Smooth transitions and interactions
- Clear navigation and hierarchy

## 📋 Next Steps

To complete the setup, you'll need to:

1. **Add Project Images**

   - Add project images to the `public` directory
   - Update the `imageUrl` fields in the projects data

2. **Add Project Links**

   - Add demo URLs for live projects
   - Add GitHub URLs for open-source projects

3. **Customize Design**

   - Update the color scheme in `tailwind.config.ts`
   - Adjust typography and spacing as needed
   - Add any additional animations or interactions

4. **Content Updates**
   - Review and refine project descriptions
   - Add any missing metrics or achievements
   - Update contact information and social links
