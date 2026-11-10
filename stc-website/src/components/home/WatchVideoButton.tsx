"use client";

import { Play, X } from "lucide-react";
import { useState } from "react";

const videoUrl = process.env.NEXT_PUBLIC_PROMO_VIDEO_URL;

export default function WatchVideoButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group flex items-center gap-3 text-sm font-medium text-ink"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-700 text-brand-700 transition group-hover:bg-brand-700 group-hover:text-white">
          <Play size={18} fill="currentColor" />
        </span>
        Watch Video
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative aspect-video w-full max-w-3xl overflow-hidden rounded-2xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2 text-ink"
              aria-label="Close video"
            >
              <X size={18} />
            </button>
            {videoUrl ? (
              <iframe
                src={videoUrl}
                title="STC promo video"
                className="h-full w-full"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="flex h-full items-center justify-center p-6 text-center text-sm text-white/80">
                Set NEXT_PUBLIC_PROMO_VIDEO_URL in .env.local to show your video here.
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
