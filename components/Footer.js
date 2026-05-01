"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith('/admin')) return null;

  return (
    <footer className="bg-surface-container-low text-on-surface font-body-md text-xs tracking-wider w-full py-16 border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8 px-8">
        <div className="text-lg font-display-lg tracking-widest uppercase text-gradient font-bold">
          Atelier Coffee
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <Link className="text-on-surface-variant hover:text-primary underline underline-offset-4 transition-all duration-300 font-label-md" href="#">Privacy Policy</Link>
          <Link className="text-on-surface-variant hover:text-primary underline underline-offset-4 transition-all duration-300 font-label-md" href="#">Terms of Service</Link>
          <Link className="text-on-surface-variant hover:text-primary underline underline-offset-4 transition-all duration-300 font-label-md" href="/contact">Contact</Link>
        </div>
        <div className="text-on-surface-variant font-label-sm">
          © 2024 Atelier Coffee. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
