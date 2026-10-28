"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function FounderPortrait() {
  const frame = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [ready, setReady] = useState(false);
  const [inView, setInView] = useState(false);
  const [doctor, setDoctor] = useState(false);

  useEffect(() => {
    const element = frame.current;
    if (!element || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, { threshold: 0.5 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!ready || paused || !inView) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: ReturnType<typeof setInterval> | undefined;
    const updateTimer = () => {
      clearInterval(timer);
      if (!preference.matches) {
        timer = setInterval(() => setDoctor((current) => !current), 7500);
      }
    };
    updateTimer();
    preference.addEventListener("change", updateTimer);
    return () => {
      clearInterval(timer);
      preference.removeEventListener("change", updateTimer);
    };
  }, [ready, paused, inView]);

  return (
    <div
      ref={frame}
      className="founder-portrait relative h-40 w-40 overflow-hidden rounded-2xl border border-cyan-500/20 shadow-lg shadow-cyan-500/10"
      data-ready={ready}
      data-paused={paused}
      data-doctor={doctor}
    >
      <Image src="/headshot.png" alt="Dr. Joaquin De Rojas" fill sizes="160px" className="founder-portrait-image founder-portrait-current object-cover" />
      <Image src="/headshot-doctor-polished.jpg" alt="" fill sizes="160px" className="founder-portrait-image founder-portrait-doctor object-cover" onLoad={() => setReady(true)} />
      {ready && (
        <button
          type="button"
          onClick={() => setPaused(!paused)}
          className="founder-portrait-control absolute bottom-2 right-2 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-gray-950/65 text-white transition-colors hover:bg-gray-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          aria-label={paused ? "Resume portrait animation" : "Pause portrait animation"}
          title={paused ? "Resume portraits" : "Pause portraits"}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
            {paused ? <path d="m3 1 8 5-8 5Z" /> : <path d="M2 1h3v10H2zm5 0h3v10H7z" />}
          </svg>
        </button>
      )}
    </div>
  );
}
