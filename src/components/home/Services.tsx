import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Card,
  Carousel,
  ServiceModalContent,
} from "@/components/ui/apple-cards-carousel";
import modelingImage from "@/data/Images/3D Modeling Creative Studio Poster.png";
import softwareImage from "@/data/Images/Modern Desktop Software Development Poster.png";
import graphicDesignImage from "@/data/Images/Graphic Designing Creative Workspace.png";
import videoEditingImage from "@/data/Images/Professional Video Editing Services.png";
import webDevelopmentImage from "@/data/Images/Minimal Green Web Development Poster.png";
import androidImage from "@/data/Images/Modern Android Development Poster.png";
import problemSolvingImage from "@/data/Images/Problem Solving_ Your Solution Awaits.png";
import { services } from "@/data/site";

const serviceImages = [
  webDevelopmentImage,
  androidImage,
  problemSolvingImage,
  videoEditingImage,
  graphicDesignImage,
  softwareImage,
  modelingImage,
];

export default function Services() {
  const cards = services.map(({ title, description }, index) => (
    <Card
      key={title}
      index={index}
      card={{
        category: `0${index + 1}`,
        title,
        description,
        iconKey: title,
        image: serviceImages[index],
        content: <ServiceModalContent description={description} />,
      }}
    />
  ));

  return (
    <section className="py-10 sm:py-14 lg:py-16">
      <div className="container-site">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Our Services"
            title="Technology that moves you forward."
          />
          <div className="max-w-md md:pb-1">
            <p className="text-sm leading-6 text-ink-soft sm:text-base">
              From a first idea to a growing digital product, get the expertise
              to make your next move with confidence.
            </p>
            <Link
              href="/services"
              className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-brand-700 transition-colors hover:text-brand-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700"
            >
              Explore all services <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="mt-4">
          <Carousel items={cards} />
        </div>
      </div>
    </section>
  );
}
