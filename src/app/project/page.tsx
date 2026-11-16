import type { Metadata } from "next";
import Image from "next/image";
import ProjectGallery from "@/components/project/ProjectGallery";
import heroImage from "@/data/Images/hero.png";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectPage() {
  return (
    <>
      <section className="relative isolate min-h-[190px] overflow-hidden bg-[#f3f6f3] sm:min-h-[205px]">
          <Image
            src={heroImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover object-[72%_46%]"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#f3f6f3] via-[#f3f6f3]/95 via-[46%] to-[#f3f6f3]/35" />
          <div className="container-site flex min-h-[190px] items-center py-7 sm:min-h-[205px]">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.17em] text-brand-700">
                Our work
              </p>
              <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                Our Projects
              </h1>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-soft sm:text-base">
                Explore how we turn ideas into digital experiences that make a
                difference.
              </p>
            </div>
          </div>
      </section>

      <ProjectGallery />
    </>
  );
}
