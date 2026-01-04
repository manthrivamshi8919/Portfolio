# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and TailwindCSS. This single-page application showcases my projects, skills, certifications, and professional experience with smooth animations and a beautiful user interface.

## Features

- **Single Page Application** with smooth scrolling navigation
- **Responsive Design** that works on all devices
- **Modern UI/UX** with TailwindCSS and shadcn/ui components
- **Smooth Animations** using Framer Motion
- **Dark Mode Support** with proper theme switching
- **Contact Form** with validation and feedback
- **Project Showcase** with filtering and detailed views
- **Certifications Display** with visual presentation
- **Skills Section** with interactive technology icons
- **Education & Experience Timeline**

## Tech Stack

### Frontend
- **React 18** - UI library with hooks and modern patterns
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React

### UI Components
- **shadcn/ui** - Modern component library
- **Lucide React** - Beautiful icon library
- **React Icons** - Additional icon components

### State Management & Data
- **TanStack Query** - Server state management
- **React Hooks** - Local state management

### Development Tools
- **ESLint** - Code linting and formatting
- **TypeScript** - Static type checking
- **Vite** - Build tool and dev server

## Project Structure

```
src/
├── components/
│   ├── sections/           # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── CertificationsSection.tsx
│   │   └── ContactSection.tsx
│   ├── ui/                 # shadcn/ui components (49 components)
│   ├── Navbar.tsx          # Navigation component
│   ├── Footer.tsx          # Footer component
│   ├── Layout.tsx          # Layout wrapper
│   └── PageTransition.tsx  # Page transition effects
├── pages/
│   └── MainPage.tsx        # Main page component
├── hooks/
│   ├── use-mobile.tsx       # Mobile detection hook
│   └── use-toast.ts        # Toast notification hook
├── lib/                    # Utility functions
├── files/                  # Static files
├── App.tsx                 # Root App component
├── main.tsx               # Application entry point
└── index.css              # Global styles and Tailwind
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/manthrivamshi8919/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the URL shown in your terminal)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Customization

### Adding New Projects

1. Open `src/components/sections/ProjectsSection.tsx`
2. Add your project to the `projects` array:
   ```typescript
   {
     id: uniqueId,
     title: "Project Title",
     description: "Project description",
     technologies: ["Tech1", "Tech2"],
     image: "/path/to/image.png",
     githubUrl: "https://github.com/your-repo",
     demoUrl: "https://demo-url.com"
   }
   ```

### Adding New Certifications

1. Open `src/components/sections/CertificationsSection.tsx`
2. Add your certification to the `certifications` array:
   ```typescript
   {
     id: uniqueId,
     name: "Certification Name",
     image: "/path/to/certificate.jpg",
     certId: "Certificate ID",
     issueDate: "Month Year"
   }
   ```

### Updating Personal Information

1. **Contact Info**: Update in `src/components/sections/ContactSection.tsx`
2. **Education**: Update in `src/components/sections/AboutSection.tsx`
3. **Experience**: Update in `src/components/sections/AboutSection.tsx`
4. **Skills**: Update technologies array in `src/components/sections/AboutSection.tsx`

### Customizing Colors

The theme uses CSS custom properties defined in `src/index.css`. Modify the color values in the `:root` and `.dark` selectors to customize the color scheme.

## Sections Overview

### Hero Section
- Professional introduction with animated text
- Call-to-action buttons for contact and resume
- Profile image with decorative elements

### About Section
- Education timeline with visual indicators
- Work experience with responsibilities
- Skills showcase with technology icons

### Projects Section
- Grid layout of project cards
- Technology tags for each project
- GitHub links and demo URLs
- Hover effects and smooth animations

### Certifications Section
- Visual display of earned certifications
- Certificate images with metadata
- Issuing dates and certificate IDs

### Contact Section
- Functional contact form with validation
- Contact information with clickable links
- Social media links
- Form submission feedback

## Key Features

### Smooth Scrolling Navigation
- Sticky navbar with scroll-based styling
- Active section highlighting
- Mobile-responsive hamburger menu
- Smooth scroll animations between sections

### Responsive Design
- Mobile-first approach
- Breakpoint-based layouts
- Touch-friendly interactions
- Optimized for all screen sizes

### Animations & Interactions
- Framer Motion animations
- Hover effects on interactive elements
- Loading states and transitions
- Micro-interactions for better UX

### Accessibility
- Semantic HTML5 structure
- ARIA labels where needed
- Keyboard navigation support
- Screen reader friendly

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

### Other Platforms
The built project can be deployed to any static hosting service that supports single-page applications.

## Contributing

This is a personal portfolio project. For suggestions or improvements:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- **Email**: manthrivamshi1@gmail.com
- **Phone**: +91 8919859787
- **LinkedIn**: [linkedin.com/in/manthrivamshi123](https://www.linkedin.com/in/vamshimanthri123/)
- **GitHub**: [github.com/manthrivamshi8919](https://github.com/manthrivamshi8919)

---

Built with ❤️ using React, TypeScript, and TailwindCSS
