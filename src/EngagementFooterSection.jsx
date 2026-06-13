import { useId, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faApple,
  faAndroid,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const companyLinks = [
  { label: "About Us", to: "/#about" },
  { label: "Careers", to: "/#contact" },
  { label: "Press", to: "/#blog" },
  { label: "Contact", to: "/#contact" },
];

const productLinks = [
  { label: "Fixed-Income", to: "/products#fixed-income" },
  { label: "Savings", to: "/products#savings" },
  { label: "Loans", to: "/products#loans" },
  { label: "Calculators", to: "/calculators" },
];

const resourceLinks = [
  { label: "Blog", to: "/#blog" },
  { label: "Help Center", to: "/#contact" },
  { label: "API Docs", to: "/#contact" },
  { label: "Security", to: "/#contact" },
];

const socialLinks = [
  { icon: faFacebookF, label: "Facebook", href: "https://facebook.com" },
  { icon: faInstagram, label: "Instagram", href: "https://instagram.com" },
  { icon: faTwitter, label: "Twitter", href: "https://twitter.com" },
  { icon: faLinkedinIn, label: "LinkedIn", href: "https://linkedin.com" },
];

const contactItems = [
  { icon: faEnvelope, text: "hello@podermonie.com", href: "mailto:hello@podermonie.com" },
  { icon: faPhone, text: "+234 901 234 5678", href: "tel:+2349012345678" },
  { icon: faLocationDot, text: "Lagos, Nigeria", href: null },
];

const defaultCta = {
  title: "Ready to Start Your Wealth Journey?",
  description:
    "Join over 50,000 Nigerians who are already building wealth with PoderMonie. Download the app today and get started in minutes.",
  primaryLabel: "Download for iOS",
  secondaryLabel: "Download for Android",
  showMissionButtons: false,
};

export const EngagementFooterSection = ({ cta = defaultCta }) => {
  const [email, setEmail] = useState("");
  const [cookieAccepted, setCookieAccepted] = useState(false);
  const emailId = useId();
  const mergedCta = { ...defaultCta, ...cta };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) setEmail("");
  };

  return (
    <footer id="contact" aria-label="Site footer">
      <section className="bg-gradient-to-b from-brand-500 via-brand-700 to-gray-950 py-16 text-white lg:py-20">
        <div className="section-container text-center">
          <h2 className="mb-4 text-3xl font-medium sm:text-4xl">{mergedCta.title}</h2>
          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-white/90">
            {mergedCta.description}
          </p>

          {mergedCta.showMissionButtons ? (
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/#download"
                className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-blue-600"
              >
                Get Started
                <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-transparent px-8 py-3 text-base font-medium text-white transition-colors hover:bg-white/10"
              >
                Learn More
              </Link>
            </div>
          ) : (
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/#download"
                className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-blue-600"
              >
                <FontAwesomeIcon icon={faApple} aria-hidden="true" />
                {mergedCta.primaryLabel}
              </Link>
              <Link
                to="/#download"
                className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-blue-600"
              >
                <FontAwesomeIcon icon={faAndroid} aria-hidden="true" />
                {mergedCta.secondaryLabel}
              </Link>
            </div>
          )}
        </div>
      </section>

      <div className="bg-gray-950 py-12 text-white lg:py-16">
        <div className="section-container">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="mb-4 text-2xl font-semibold">PoderMonie</div>
              <p className="mb-6 max-w-sm text-sm leading-relaxed text-white/70">
                Empowering Nigerians to build lasting wealth through secure investments, smart
                savings, and accessible financial tools — all from your phone.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                  >
                    <FontAwesomeIcon icon={social.icon} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            <nav aria-label="Company links">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wide">Company</h3>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Product links">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wide">Products</h3>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wide">Resources</h3>
              <ul className="mb-6 space-y-3">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <h3 className="mb-3 text-sm font-bold uppercase tracking-wide">Download Our App</h3>
              <div className="flex flex-col gap-2">
                <Link
                  to="/#download"
                  className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"
                >
                  <FontAwesomeIcon icon={faApple} aria-hidden="true" />
                  App Store
                </Link>
                <Link
                  to="/#download"
                  className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"
                >
                  <FontAwesomeIcon icon={faAndroid} aria-hidden="true" />
                  Google Play
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 border-t border-white/10 pt-8 lg:grid-cols-2">
            <ul className="space-y-2">
              {contactItems.map((item) => (
                <li key={item.text}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="flex items-center gap-3 text-sm text-white/70 hover:text-white"
                    >
                      <FontAwesomeIcon icon={item.icon} className="w-4 shrink-0" aria-hidden="true" />
                      {item.text}
                    </a>
                  ) : (
                    <span className="flex items-center gap-3 text-sm text-white/70">
                      <FontAwesomeIcon icon={item.icon} className="w-4 shrink-0" aria-hidden="true" />
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <form onSubmit={handleSubscribe} aria-label="Subscribe to newsletter">
              <label htmlFor={emailId} className="mb-2 block text-sm font-bold uppercase tracking-wide">
                Subscribe
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  id={emailId}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/40"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-medium text-white hover:bg-blue-600"
                >
                  Subscribe
                  <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
                </button>
              </div>
            </form>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
            <p className="text-sm text-white/50">
              &copy; {new Date().getFullYear()} PoderMonie. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/50">
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {!cookieAccepted && (
        <div
          role="dialog"
          aria-label="Cookie consent"
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white p-4 shadow-lg sm:p-6"
        >
          <div className="section-container flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-text-secondary">
              We use cookies to enhance your experience. By continuing to visit this site you agree
              to our use of cookies.
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-xl border border-brand-500 px-5 py-2.5 text-sm font-medium text-brand-500 hover:bg-brand-50"
              >
                Learn More
                <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => setCookieAccepted(true)}
                className="rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-600"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
