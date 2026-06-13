import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image1 from "./assets/Hero-right.svg";
import {
  faChartLine,
  faShield,
  faClock,
  faCogs,
  faPercent,
  faChartPie,
  faBullseye,
  faBolt,
  faCoins,
  faCheckCircle,
  faShieldHalved,
  faMobileScreenButton,
  faArrowRight,
  faStar,
  faChartArea,
} from "@fortawesome/free-solid-svg-icons";

const stats = [
  { value: "₦5B+", label: "Assets Under Management" },
  { value: "50,000+", label: "Active Users" },
  { value: "15%", label: "Average Annual Returns" },
  { value: "99.9%", label: "Platform Uptime" },
];

const featureCards = [
  {
    title: "Fixed-Income Investments",
    description:
      "Invest in Treasury Bills, Bonds, and Commercial Papers with competitive returns and low risk.",
    benefits: [
      { text: "12–18% annual returns", icon: faChartLine },
      { text: "Government-backed security", icon: faShield },
      { text: "Flexible maturity periods", icon: faClock },
    ],
    headerIcon: faChartLine,
  },
  {
    title: "Goal-Based Savings",
    description:
      "Set and achieve your financial goals with automated savings plans and interest rewards.",
    benefits: [
      { text: "Automated contributions", icon: faCogs },
      { text: "Interest on savings", icon: faPercent },
      { text: "Goal tracking dashboard", icon: faChartPie },
    ],
    headerIcon: faBullseye,
  },
  {
    title: "Cash-Backed Loans",
    description:
      "Access instant loans using your savings and investments as collateral with competitive rates.",
    benefits: [
      { text: "Instant approval", icon: faBolt },
      { text: "Low interest rates", icon: faCoins },
      { text: "No credit checks required", icon: faCheckCircle },
    ],
    headerIcon: faShieldHalved,
  },
];

const steps = [
  {
    number: "1",
    title: "Create Your Account",
    description:
      "Sign up with your BVN and NIN for quick KYC verification. Get approved in minutes, not days.",
  },
  {
    number: "2",
    title: "Fund & Invest",
    description:
      "Deposit funds securely and choose from fixed-income products, savings plans, or loan options.",
  },
  {
    number: "3",
    title: "Grow Your Wealth",
    description:
      "Track performance in real time, earn competitive returns, and access your money when you need it.",
  },
];

const testimonials = [
  {
    stars: 5,
    quote:
      "PoderMonie helped me grow my savings by 15%. The goal-based savings feature is amazing!",
    name: "Michael Wilson",
    role: "Small Business Owner",
  },
  {
    stars: 5,
    quote:
      "I love how easy it is to invest in T-Bills through the app. Much better than traditional banks.",
    name: "Ngozi Okafor",
    role: "Software Engineer",
  },
  {
    stars: 5,
    quote:
      "The cash-backed loans feature saved my business during a cash flow crunch. Highly recommended!",
    name: "Tunde Adeyemi",
    role: "Entrepreneur",
  },
];

const FeatureCard = ({ card }) => (
  <article className="flex flex-col rounded-xl border border-gray-200 bg-gradient-to-br from-brand-700 via-brand-600 to-blue-500 p-6 shadow-lg sm:p-8">
    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-white/20">
      <FontAwesomeIcon
        icon={card.headerIcon}
        className="text-xl text-white"
        aria-hidden="true"
      />
    </div>
    <h3 className="mb-3 text-xl font-semibold text-white">{card.title}</h3>
    <p className="mb-6 text-base leading-relaxed text-white/90">
      {card.description}
    </p>
    <ul className="mt-auto space-y-3">
      {card.benefits.map((benefit) => (
        <li key={benefit.text} className="flex items-center gap-3 text-white">
          <FontAwesomeIcon
            icon={benefit.icon}
            className="w-4 shrink-0 text-sm"
            aria-hidden="true"
          />
          <span className="text-sm sm:text-base">{benefit.text}</span>
        </li>
      ))}
    </ul>
  </article>
);

export const HeroShowcaseSection = () => {
  return (
    <>
      {/* Hero */}
      <section
        id="home"
        aria-label="Hero"
        className="relative overflow-hidden bg-gradient-to-br from-sky-100 via-sky-50 to-white"
      >
        <div className="pointer-events-none absolute right-0 top-1/4 hidden opacity-10 lg:block">
          <FontAwesomeIcon
            icon={faChartArea}
            className="text-[12rem] text-brand-500"
            aria-hidden="true"
          />
        </div>

        <div className="section-container relative py-16 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-6 inline-block rounded-xl bg-brand-600 px-4 py-1.5 text-sm text-white">
                Now Available — Mobile-First Investment Platform
              </span>

              <h1 className="mb-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                <span className="text-text-primary">Grow Your</span>{" "}
                <span className="text-brand-600">Money</span>
                <br />
                <span className="text-text-primary">with Confidence</span>
              </h1>

              <p className="mb-8 max-w-xl text-base leading-relaxed text-text-secondary lg:text-lg">
                Discover fixed-income investments, build goal-based savings, and
                access instant cash-backed loans. All in one secure,
                mobile-first platform designed for modern Nigerians.
              </p>

              <div className="mb-8 flex flex-wrap gap-4">
                <a
                  id="download"
                  href="#download"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-brand-600"
                >
                  <FontAwesomeIcon
                    icon={faMobileScreenButton}
                    aria-hidden="true"
                  />
                  Download App
                </a>
                <a
                  href="#products"
                  className="inline-flex items-center gap-2 rounded-xl border border-brand-500 bg-white px-6 py-3 text-base font-medium text-brand-500 transition-colors hover:bg-brand-50"
                >
                  Learn More
                  <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} aria-hidden="true" />
                  ))}
                </div>
                <span className="text-sm text-text-secondary sm:text-base">
                  4.8/5 from 10,000+ users
                </span>
              </div>
            </div>

            <div className="relative hidden lg:block" aria-hidden="true">
              <div className="relative mx-auto h-80 w-80">
                <img
                  src={image1}
                  alt="Hero image"
                  className="absolute inset-0 mx-auto h-full w-full object-contain z-10"
                />
                <div className="absolute left-8 top-0 h-12 w-12 rounded-full bg-blue-300" />
                <div className="absolute bottom-12 left-0 h-8 w-8 rounded-full bg-gray-300" />
                <div className="absolute left-20 top-24 h-8 w-8 rounded-full bg-purple-300" />
                <div className="absolute bottom-0 right-8 h-16 w-16 rounded-full bg-indigo-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section aria-label="Platform statistics" className="bg-brand-600 py-10">
        <div className="section-container">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-white/80 sm:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section
        id="products"
        aria-labelledby="products-heading"
        className="py-16 lg:py-24"
      >
        <div className="section-container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2
              id="products-heading"
              className="mb-4 text-3xl font-semibold sm:text-4xl lg:text-5xl"
            >
              Everything You Need to Grow Your Wealth
            </h2>
            <p className="text-base leading-relaxed text-text-secondary">
              Our comprehensive platform offers three powerful ways to make your
              money work harder for you.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((card) => (
              <FeatureCard key={card.title} card={card} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="about"
        aria-labelledby="get-started-heading"
        className="bg-surface-muted py-16 lg:py-24"
      >
        <div className="section-container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2
              id="get-started-heading"
              className="mb-4 text-3xl font-semibold sm:text-4xl lg:text-5xl"
            >
              Getting Started is Simple
            </h2>
            <p className="text-base leading-relaxed text-text-secondary">
              Join thousands of satisfied users who are growing their wealth
              with PoderMonie.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {steps.map((step) => (
              <article key={step.number} className="text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-brand-600 text-2xl font-semibold text-white">
                  {step.number}
                </div>
                <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
                <p className="text-base leading-relaxed text-text-secondary">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        aria-labelledby="testimonials-heading"
        className="py-16 lg:py-24"
      >
        <div className="section-container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2
              id="testimonials-heading"
              className="mb-4 text-3xl font-semibold sm:text-4xl lg:text-5xl"
            >
              What Our Users Say
            </h2>
            <p className="text-base leading-relaxed text-text-secondary">
              Real stories from Nigerians building wealth with PoderMonie.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex gap-0.5 text-amber-400">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mb-6 flex-1 text-base italic leading-relaxed text-text-secondary">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption>
                  <div className="font-medium text-text-primary">{t.name}</div>
                  <div className="text-sm text-text-secondary">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
