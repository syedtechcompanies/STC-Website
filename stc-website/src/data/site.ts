import {
  BarChart3,
  Cloud,
  Code2,
  Handshake,
  Headphones,
  Lock,
  ShieldCheck,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

export const siteConfig = {
  name: "Syed Tech Company",
  shortName: "STC",
  tagline: "Innovate • Build • Grow",
  description:
    "STC is a modern tech company building web, mobile, cloud and marketing solutions for a better tomorrow.",
  email: "info@stc.com",
  phone: "+92 300 0000000",
  address: "Pakistan",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
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
      "Next.js / React web apps",
      "Admin dashboards and portals",
      "Performance and SEO optimization",
    ],
  },
  {
    title: "Mobile App Development",
    description: "Powerful and user-friendly mobile apps.",
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
    description: "Reliable cloud solutions for better performance.",
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
    description: "Grow your brand with smart marketing strategies.",
    icon: BarChart3,
    details: [
      "Social media management",
      "SEO and content strategy",
      "Paid ad campaigns",
      "Analytics and reporting",
    ],
  },
];

export const features: { label: string; icon: LucideIcon }[] = [
  { label: "Innovative Solutions", icon: ShieldCheck },
  { label: "Expert Support", icon: Headphones },
  { label: "Secure & Reliable", icon: Lock },
  { label: "Long-Term Partnership", icon: Handshake },
];

export const socials = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "YouTube", href: "https://youtube.com" },
] as const;

export const projects = [
  {
    title: "Pakistan Bus Booking App",
    category: "Mobile App",
    description: "Passenger, operator, driver and admin roles with live seat booking.",
    tags: ["React Native", "Firebase"],
  },
  {
    title: "Corporate Website Suite",
    category: "Web Development",
    description: "Fast, SEO-friendly business websites with a custom CMS.",
    tags: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Cloud Inventory Platform",
    category: "Cloud Solutions",
    description: "Real-time stock tracking for multi-branch retail businesses.",
    tags: ["Firebase", "Cloud Functions"],
  },
  {
    title: "Brand Growth Campaign",
    category: "Digital Marketing",
    description: "Social and search campaigns that tripled monthly leads.",
    tags: ["SEO", "Social Ads"],
  },
  {
    title: "Learning Management Portal",
    category: "Web Development",
    description: "Courses, quizzes and certificates for an education startup.",
    tags: ["Next.js", "Firestore"],
  },
  {
    title: "Delivery Tracking App",
    category: "Mobile App",
    description: "Rider and customer apps with real-time order tracking.",
    tags: ["React Native", "Maps"],
  },
];

export const posts = [
  {
    slug: "why-nextjs-for-business-websites",
    title: "Why Next.js Is a Great Fit for Business Websites",
    excerpt:
      "Speed, SEO and developer experience make Next.js our default choice for company sites.",
    date: "2025-10-12",
    category: "Web",
  },
  {
    slug: "firebase-for-small-teams",
    title: "Firebase for Small Teams: What You Get Out of the Box",
    excerpt:
      "Authentication, database and hosting without managing servers. Here is how we use it.",
    date: "2025-09-28",
    category: "Cloud",
  },
  {
    slug: "mobile-app-launch-checklist",
    title: "A Practical Checklist Before You Launch Your Mobile App",
    excerpt:
      "From store listings to crash reporting, the steps we follow before every release.",
    date: "2025-09-05",
    category: "Mobile",
  },
];
