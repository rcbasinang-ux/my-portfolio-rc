"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="header">
      <div className="nav-container">
        <Link href="/" className="logo">
          <span>RC</span>
          Portfolio
        </Link>

        <nav className="navigation">
          <Link
            href="/"
            className={`nav-link ${pathname === "/" ? "active" : ""}`}
          >
            Home
          </Link>

          <Link
            href="/portfolio"
            className={`nav-link ${pathname === "/portfolio" ? "active" : ""}`}
          >
            Portfolio
          </Link>

          <Link
            href="/about"
            className={`nav-link ${pathname === "/about" ? "active" : ""}`}
          >
            About
          </Link>

          <Link
            href="/gallery"
            className={`nav-link ${pathname === "/gallery" ? "active" : ""}`}
          >
            Gallery
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
