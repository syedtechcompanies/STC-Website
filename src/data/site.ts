import {
  BarChart3,
  Box,
  Code2,
  Monitor,
  Palette,
  Smartphone,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export const siteConfig = {
  name: "Syed Tech Company",
  shortName: "STC",
  tagline: "Innovate • Build • Grow",
  description:
    "Syed Tech Company builds practical digital solutions through web development, mobile applications, cloud services and thoughtful technology consulting.",
};

export const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "PROJECTS", href: "/project" },
  { label: "CONTACT", href: "/contact" },
];

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  details: string[];
};

export const services: Service[] = [
  {
    title: "Web Development",
    description: "Modern and scalable websites for your business.",
    icon: Code2,
    details: [
      "Company and e-commerce websites",
      "Next.js / React web applications",
      "Admin dashboards and portals",
      "Performance and SEO optimization",
    ],
  },
  {
    title: "Mobile App Development",
    description: "Powerful and user-friendly mobile apps.",
    icon: Smartphone,
    details: [
      "iOS and Android applications",
      "Clean, intuitive mobile experiences",
      "Push notifications and offline support",
      "App Store and Play Store preparation",
    ],
  },
  {
    title: "Problem Solving",
    description: "Expert support for resolving technical challenges.",
    icon: Wrench,
    details: [
      "Debugging and fixing errors",
      "Resolving technical issues",
      "Optimizing application performance",
      "Practical guidance and support",
    ],
  },
  {
    title: "Digital Marketing",
    description: "Grow your brand with smart strategies.",
    icon: BarChart3,
    details: [
      "Search engine optimization",
      "Social media strategy",
      "Paid advertising campaigns",
      "Analytics and reporting",
    ],
  },
  {
    title: "UI/UX Design",
    description: "Beautiful and user-friendly designs.",
    icon: Palette,
    details: [
      "Website and app interface design",
      "User journeys and wireframes",
      "Responsive design systems",
      "Usability-focused improvements",
    ],
  },
  {
    title: "Desktop Software Development",
    description: "Custom desktop software built around your business needs.",
    icon: Monitor,
    details: [
      "Business and productivity software",
      "Desktop application development",
      "Workflow automation tools",
      "Software maintenance and support",
    ],
  },
  {
    title: "3D Modeling",
    description: "Detailed 3D models for products and digital experiences.",
    icon: Box,
    details: [
      "Product and concept models",
      "3D assets for digital projects",
      "Visual prototyping",
      "Model refinement and export",
    ],
  },
];

export const projectTypes = [
  {
    title: "Business website",
    category: "Web Development",
    description:
      "A responsive site that introduces your business, explains your services and gives visitors a clear way to get in touch.",
    tags: ["Business profile", "Service pages", "Contact form"],
  },
  {
    title: "Online store",
    category: "Web Development",
    description:
      "A product catalogue and shopping experience planned around your inventory, checkout needs and day-to-day operations.",
    tags: ["Product catalogue", "Checkout", "Order management"],
  },
  {
    title: "Mobile app",
    category: "Mobile App Development",
    description:
      "A customer or team app scoped around the essential screens, user journeys and integrations your idea needs.",
    tags: ["iOS and Android", "User experience", "App publishing"],
  },
  {
    title: "Internal business dashboard",
    category: "Cloud Solutions",
    description:
      "An access-controlled web workspace to organize records and bring routine business tasks into one place.",
    tags: ["Role-based access", "Cloud database", "Reporting"],
  },
];

export const resources = [
  {
    title: "Next.js App Router",
    description:
      "Official documentation for routing, layouts, pages and other App Router features.",
    category: "Web development",
    href: "https://nextjs.org/docs/app",
  },
  {
    title: "React: Learn the basics",
    description:
      "The React team’s guide to components, data, events and building user interfaces.",
    category: "Web development",
    href: "https://react.dev/learn",
  },
  {
    title: "SEO Starter Guide",
    description:
      "Google Search Central’s introduction to helping search engines understand your website.",
    category: "Digital growth",
    href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
  },
];
