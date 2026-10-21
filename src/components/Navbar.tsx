import { CrossIcon } from "./Icons";

const links = [
  { href: "#vozrast", label: "Возраст" },
  { href: "#besedy", label: "Беседы" },
  { href: "#krestny", label: "Крёстный" },
  { href: "#veshi", label: "Что нужно" },
];

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#3a3226]/35 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 text-[#fdfaf4]">
          <CrossIcon className="h-4 w-4 text-accent" />
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
      </div>
    </nav>
  );
}
