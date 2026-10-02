import { Zap } from "lucide-react";

const NAV_LINKS = [
  { label: "Fish", href: "/fish" },
  { label: "Corals", href: "/corals" },
  { label: "Invertebrates", href: "/invertebrates" },
  { label: "Guides", href: "/guides" },
];

export function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-[72px] items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-[10px]"
              style={{ boxShadow: "0 4px 16px rgba(10,58,77,0.25)" }}
            >
              <div className="h-9 w-9 rounded-[10px] bg-gradient-cta" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[0.7rem] font-bold tracking-[0.18em] text-white/80 uppercase">
                Aqua
              </span>
              <span className="font-display text-base font-black tracking-tight text-white">
                LabsX
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-[10px] px-3.5 py-1.5 text-sm font-medium text-white/85 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2.5 lg:flex">
            <a
              href="/contact"
              className="rounded-full border border-white/40 px-[18px] py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Contact
            </a>
            <a
              href="/shop"
              className="bg-gradient-cta inline-flex items-center gap-[7px] rounded-full px-[18px] py-2 text-sm font-semibold text-[#3a2205]"
              style={{ boxShadow: "0 4px 20px rgba(242,153,74,0.4)" }}
            >
              <Zap size={13} strokeWidth={2.5} />
              Shop Livestock
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
