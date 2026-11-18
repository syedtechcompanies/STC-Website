import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/site";
import frameImage from "@/data/Images/frame.png";

export default function AboutPreview() {
  return (
    <section className="py-10 sm:py-14 lg:py-16">
      <div className="container-site grid items-center gap-10 lg:grid-cols-[1fr_1fr_0.75fr]">
        <div className="relative pb-6 pl-5 sm:pb-9 sm:pl-10">
          <span className="absolute left-0 top-3 h-[58%] w-7 sm:w-10 rounded-l-[20px] sm:rounded-l-[28px] bg-brand-700" />
          <span className="absolute bottom-0 right-2 h-6 sm:h-9 w-[45%] rounded-b-[20px] sm:rounded-b-[28px] bg-brand-700" />
          <div className="relative aspect-[3/2] overflow-hidden rounded-[18px] sm:rounded-[24px] shadow-card">
            <Image
              src={frameImage}
              alt="STC company building surrounded by greenery"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 38vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <SectionHeading
            align="left"
            eyebrow="About STC"
            title="Digital services, shaped around your needs"
          />
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-ink">
            From a business website to a cloud-backed app, explore the available
            services and share the goals, constraints and features that matter
            to your project.
          </p>
          <div className="mt-6">
            <Link href="/about" className="btn-primary w-full sm:w-auto inline-flex justify-center">
              Learn More <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5 sm:gap-4 border-gray-100 sm:border-t sm:pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
          {services.map(({ title, icon: Icon }) => (
            <li key={title} className="flex items-center gap-3.5 sm:gap-4 p-2 sm:p-0">
              <span className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                <Icon size={18} />
              </span>
              <span className="text-sm font-medium">{title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
