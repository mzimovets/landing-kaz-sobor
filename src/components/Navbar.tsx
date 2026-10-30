"use client";

import { useState } from "react";

const links = [
  { href: "#vozrast", label: "Возраст" },
  { href: "#besedy", label: "Беседы" },
  { href: "#krestny", label: "Крёстный" },
  { href: "#veshi", label: "Что нужно" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#3a3226]/35 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 text-[#fdfaf4]">
          <span className="font-heading text-sm tracking-wide">Таинство Крещения</span>
        </a>

        <ul className="hidden items-center gap-7 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs uppercase tracking-[0.15em] text-[#e8d9be] transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 sm:hidden"
        >
          <span
            className={`h-px w-5 bg-[#fdfaf4] transition-transform ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-5 bg-[#fdfaf4] transition-transform ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-white/10 bg-[#3a3226]/95 backdrop-blur-md transition-[max-height] duration-300 ease-out sm:hidden ${
          open ? "max-h-64" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm uppercase tracking-[0.15em] text-[#e8d9be] transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
