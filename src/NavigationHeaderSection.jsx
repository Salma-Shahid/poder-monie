import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import logo from "./assets/logo.svg";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Calculators", path: "/calculators" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export const NavigationHeaderSection = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = (path) => {
    if (path === "/") return pathname === "/";
    if (path.startsWith("/#")) return pathname === "/";
    return pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/90 backdrop-blur-md">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <div className="section-container">
        <div className="flex h-16 items-center justify-between gap-4 lg:h-[72px]">
          <Link
            to="/"
            aria-label="PoderMonie home"
            className="flex shrink-0 items-center gap-3"
          >
            <img src={logo} alt="" className="h-9 w-9 lg:h-10 lg:w-10" />
            <span className="text-2xl font-semibold text-brand-600 lg:text-[2rem]">
              PoderMonie
            </span>
          </Link>
          {/* Desktop Navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                aria-current={isActive(item.path) ? "page" : undefined}
                className={`rounded-lg px-4 py-2 text-base transition-colors ${
                  isActive(item.path)
                    ? "font-semibold text-brand-600"
                    : "font-medium text-text-muted hover:text-brand-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <Link
              to="/login"
              className="text-sm font-medium text-text-muted transition-colors hover:text-brand-600"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-600"
            >
              Sign Up
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-brand-600 lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <FontAwesomeIcon icon={mobileOpen ? faXmark : faBars} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="border-t border-slate-200 bg-white lg:hidden"
        >
          <ul className="section-container flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  aria-current={isActive(item.path) ? "page" : undefined}
                  className={`block rounded-lg px-4 py-3 text-base ${
                    isActive(item.path)
                      ? "font-semibold text-brand-600"
                      : "font-medium text-text-muted"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="flex gap-3 pt-2">
              <Link
                to="/login"
                className="flex-1 rounded-xl border border-brand-500 px-4 py-3 text-center text-sm font-medium text-brand-500"
                onClick={() => setMobileOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="flex-1 rounded-xl bg-brand-500 px-4 py-3 text-center text-sm font-medium text-white"
                onClick={() => setMobileOpen(false)}
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
