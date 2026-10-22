"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  src: string;
  startY?: number;
  endY?: number;
  children: ReactNode;
};

export default function HeroParallax({ src, startY = 38, endY = 90, children }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const frame = frameRef.current;
    const image = imageRef.current;
    if (!wrapper || !frame || !image) return;

    let raf = 0;

    function update() {
      raf = 0;
      if (!wrapper || !frame || !image) return;
      const scrollRange = wrapper.offsetHeight - frame.offsetHeight;
      if (scrollRange <= 0) {
        image.style.backgroundPosition = `center ${startY}%`;
        return;
      }
      const scrolled = -wrapper.getBoundingClientRect().top;
      const progress = Math.min(Math.max(scrolled / scrollRange, 0), 1);
      const y = startY + progress * (endY - startY);
      image.style.backgroundPosition = `center ${y}%`;
    }

    function onScroll() {
      if (!raf) raf = requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [startY, endY]);

  return (
    <div ref={wrapperRef} className="relative h-[200vh]">
      <div
        ref={frameRef}
        className="sticky top-0 h-[calc(100vh_+_2rem)] w-full overflow-hidden bg-[#3a3226] md:h-[calc(100vh_+_3rem)]"
      >
        <div
          ref={imageRef}
          className="hero-image absolute inset-0 bg-cover bg-no-repeat"
          style={{ backgroundImage: `url('${src}')`, backgroundPosition: `center ${startY}%` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/60" />
        <div className="relative z-10 flex h-[85vh] w-full flex-col px-6 pt-14 pb-16 sm:px-12 md:h-screen md:px-16 md:pt-24 md:pb-24">
          {children}
        </div>
      </div>
    </div>
  );
}
