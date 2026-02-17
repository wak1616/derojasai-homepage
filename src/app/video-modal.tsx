"use client";

import { useState, useEffect, useCallback } from "react";

export default function VideoModal({
  children,
  videoSrc,
}: {
  children: React.ReactNode;
  videoSrc: string;
}) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, close]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div
        onClick={(e) => {
          // Don't open modal if clicking the raia link
          if ((e.target as HTMLElement).closest("a[href]")) return;
          setOpen(true);
        }}
        className="cursor-pointer"
      >
        {children}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          onClick={close}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/85 backdrop-blur-sm animate-modal-fade" />

          {/* Modal container */}
          <div
            className="relative z-10 w-[92vw] max-w-5xl animate-modal-scale"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={close}
              className="absolute -top-12 right-0 flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
            >
              <span className="hidden sm:inline">Press ESC or click to close</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Video container */}
            <div className="overflow-hidden rounded-xl border border-white/10 bg-black shadow-2xl shadow-amber-500/10">
              <video
                src={videoSrc}
                controls
                autoPlay
                className="h-auto w-full"
                playsInline
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
