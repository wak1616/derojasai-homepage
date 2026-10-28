"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function VisariBlueprint() {
  const stage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = stage.current;
    if (!element || !("IntersectionObserver" in window)) return;

    element.dataset.motion = "ready";
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.dataset.motion = "revealed";
        observer.disconnect();
      }
    }, { threshold: 0.25 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="visari-blueprint relative flex h-72 shrink-0 items-center justify-center overflow-hidden sm:h-80 lg:h-auto lg:w-[48%]">
      <div className="visari-stage" ref={stage}>
        <Image
          src="/visari-mark-light.png"
          alt="The Visari mark: an eye drawn as a technical plan"
          width={609}
          height={476}
          sizes="(min-width: 1024px) 240px, (min-width: 768px) 320px, 240px"
          className="visari-mark"
        />
        <svg className="visari-leaders" viewBox="0 0 760 620" aria-hidden="true">
          <polyline points="380,271 540,100 760,100" />
          <polyline points="177,331 130,400 0,400" />
          <polyline points="583,331 630,400 760,400" />
          <line x1="380" y1="454" x2="380" y2="548" />
          <circle cx="380" cy="271" r="4" />
          <circle cx="177" cy="331" r="3.5" />
          <circle cx="583" cy="331" r="3.5" />
          <circle cx="380" cy="454" r="3.5" />
        </svg>
        <div className="visari-callouts" aria-hidden="true">
          <span className="visari-clinical">Clinical care</span>
          <span className="visari-operations">Practice<br />operations</span>
          <span className="visari-communication">Patient<br />communication</span>
          <span className="visari-context">One shared<br />patient context</span>
        </div>
      </div>
    </div>
  );
}
