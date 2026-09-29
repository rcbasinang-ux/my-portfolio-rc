"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="header">
      <div className="nav-container">
        <Link href="/" className="logo" aria-label="RC portfolio home">
          <span className="logo-mark" aria-hidden="true">
            RC
          </span>
          <span className="logo-text">RC Studio</span>
        </Link>

        <nav className="navigation" aria-label="Main navigation">
          {navItems.map(({ href, label }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={`nav-link ${isActive ? "active" : ""}`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;