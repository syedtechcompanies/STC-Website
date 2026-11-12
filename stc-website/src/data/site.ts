import {
  BarChart3,
  Cloud,
  Code2,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

export const siteConfig = {
  name: "Syed Tech Company",
  shortName: "STC",
  tagline: "Innovate • Build • Grow",
  description:
    "Syed Tech Company offers web, mobile, cloud and digital marketing services. Explore the services and share your project requirements.",
};

export const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "PROJECTS", href: "/portfolio" },
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
    description: "Business websites, online stores and web applications.",
    icon: Code2,
    details: [
      "Company and e-commerce websites",
      "Next.js / React web apps",
      "Admin dashboards and portals",
      "Performance and SEO optimization",
    ],
  },
  {
    title: "Mobile App Development",
    description:
      "Mobile apps planned for your users, features and target platforms.",
    icon: Smartphone,
    details: [
      "iOS and Android with React Native",
      "Clean, intuitive UI/UX",
      "Push notifications and offline support",
      "Play Store / App Store publishing",
    ],
  },
  {
    title: "Cloud Solutions",
    description:
      "Cloud databases, authentication and serverless application backends.",
    icon: Cloud,
    details: [
      "Firebase and Google Cloud setup",
      "Secure authentication and databases",
      "Scalable serverless backends",
      "Monitoring and backups",
    ],
  },
  {
    title: "Digital Marketing",
    description: "SEO, content, social media and paid advertising services.",
    icon: BarChart3,
    details: [
      "Social media management",
      "SEO and content strategy",
      "Paid ad campaigns",
      "Analytics and reporting",
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
    title: "Cloud Firestore documentation",
    description:
      "Firebase’s official guide to its cloud-hosted NoSQL database and data model.",
    category: "Cloud",
    href: "https://firebase.google.com/docs/firestore",
  },
  {
    title: "SEO Starter Guide",
    description:
      "Google Search Central’s introduction to helping search engines understand your website.",
    category: "Digital growth",
    href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
  },
];
