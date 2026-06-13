import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faVault,
  faHandHoldingDollar,
  faCheck,
  faArrowRight,
  faLandmark,
  faFileInvoiceDollar,
  faBuildingColumns,
  faPiggyBank,
  faWallet,
  faUmbrella,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Layout } from "../components/Layout";

const coreProducts = [
  {
    id: "fixed-income",
    learnMoreHref: "#fixed-income-options",
    title: "Fixed-Income Investments",
    description:
      "Earn stable returns with government-backed Treasury Bills, bonds, and commercial papers.",
    icon: faChartLine,
    features: [
      "12–18% annual returns",
      "Government-backed security",
      "Flexible maturity periods",
      "Low minimum investment",
    ],
  },
  {
    id: "savings",
    learnMoreHref: "#savings-solutions",
    title: "Cash-Based Savings",
    description:
      "Build disciplined savings habits with automated plans and competitive interest rates.",
    icon: faVault,
    features: [
      "Automated contributions",
      "Interest on every deposit",
      "Goal tracking dashboard",
      "Withdraw anytime (Flexi)",
    ],
  },
  {
    id: "loans",
    learnMoreHref: "/calculators",
    title: "Cash-Backed Loans",
    description:
      "Access instant liquidity using your savings and investments as collateral.",
    icon: faHandHoldingDollar,
    features: [
      "Instant approval",
      "Low interest rates",
      "No credit checks required",
      "Flexible repayment terms",
    ],
  },
];

const fixedIncomeOptions = [
  {
    title: "Treasury Bills",
    description:
      "Short-term government securities with tenors from 91 to 364 days. Ideal for low-risk, predictable returns.",
    icon: faLandmark,
    rate: "Up to 18% p.a.",
  },
  {
    title: "Federal Government Bonds",
    description:
      "Longer-term government debt instruments offering stable income over 2–10 year periods.",
    icon: faBuildingColumns,
    rate: "Up to 15% p.a.",
  },
  {
    title: "Commercial Papers",
    description:
      "Corporate short-term debt from top-rated Nigerian companies with competitive yields.",
    icon: faFileInvoiceDollar,
    rate: "Up to 20% p.a.",
  },
];

const savingsOptions = [
  {
    title: "Fixed Savings",
    description:
      "Lock in your funds for a set period and earn higher interest rates with guaranteed returns.",
    icon: faPiggyBank,
    rate: "Up to 14% p.a.",
  },
  {
    title: "Flexi Savings",
    description:
      "Save at your own pace with full access to your funds anytime while still earning interest.",
    icon: faWallet,
    rate: "Up to 10% p.a.",
  },
  {
    title: "Emergency Fund",
    description:
      "A dedicated pot for life's surprises — build a safety net with automated monthly contributions.",
    icon: faUmbrella,
    rate: "Up to 12% p.a.",
  },
];

const leadership = [
  {
    name: "Adaeze Okonkwo",
    role: "CEO & Founder",
    bio: "15+ years in Nigerian banking and fintech. Former VP at a leading commercial bank.",
  },
  {
    name: "Chidi Eze",
    role: "Chief Technology Officer",
    bio: "Built scalable fintech platforms serving millions across West Africa.",
  },
  {
    name: "Fatima Bello",
    role: "Head of Operations",
    bio: "Expert in regulatory compliance and customer experience in financial services.",
  },
];

const ProductCard = ({ title, description, icon, features, learnMoreHref = "#" }) => (
  <article className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8">
    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-600/10 text-brand-600">
      <FontAwesomeIcon icon={icon} className="text-2xl" aria-hidden="true" />
    </div>
    <h3 className="mb-3 text-xl font-semibold text-brand-600">{title}</h3>
    <p className="mb-6 text-base leading-relaxed text-text-secondary">{description}</p>
    <ul className="mb-6 flex-1 space-y-3">
      {features.map((feature) => (
        <li key={feature} className="flex items-start gap-3 text-sm text-text-secondary sm:text-base">
          <FontAwesomeIcon
            icon={faCheck}
            className="mt-1 shrink-0 text-green-500"
            aria-hidden="true"
          />
          {feature}
        </li>
      ))}
    </ul>
    <Link
      to={learnMoreHref}
      className="inline-flex items-center gap-2 text-sm font-medium text-brand-500 hover:text-brand-600"
    >
      Learn More
      <FontAwesomeIcon icon={faArrowRight} className="text-xs" aria-hidden="true" />
    </Link>
  </article>
);

const OptionCard = ({ title, description, icon, rate, ctaLabel }) => (
  <article className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
      <FontAwesomeIcon icon={icon} aria-hidden="true" />
    </div>
    <h3 className="mb-2 text-lg font-semibold">{title}</h3>
    <p className="mb-4 flex-1 text-sm leading-relaxed text-text-secondary">{description}</p>
    <p className="mb-4 text-sm font-semibold text-brand-600">{rate}</p>
    <button
      type="button"
      className="w-full rounded-xl bg-brand-500 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-600"
    >
      {ctaLabel}
    </button>
  </article>
);

export const ProductsPage = () => {
  return (
    <Layout
      cta={{
        title: "Join Our Mission",
        description:
          "Be part of Nigeria's financial revolution. Start investing, saving, and growing your wealth with PoderMonie today.",
        showMissionButtons: true,
      }}
    >
      {/* Hero */}
      <section
        aria-label="Products hero"
        className="bg-gradient-to-br from-sky-100 via-sky-50 to-white py-16 lg:py-24"
      >
        <div className="section-container text-center">
          <h1 className="mb-4 text-4xl font-semibold text-brand-600 sm:text-5xl lg:text-6xl">
            Our Products
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-text-secondary lg:text-lg">
            Discover a complete suite of financial products designed to help you invest smarter,
            save better, and access credit when you need it.
          </p>
        </div>
      </section>

      {/* Three ways */}
      <section aria-labelledby="core-products-heading" className="py-16 lg:py-24">
        <div className="section-container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 id="core-products-heading" className="mb-4 text-3xl font-semibold sm:text-4xl">
              Three Ways to Grow Your Wealth
            </h2>
            <p className="text-base leading-relaxed text-text-secondary">
              Whether you want to invest, save, or borrow — PoderMonie has the right product for
              your financial goals.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coreProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Fixed-income options */}
      <section
        id="fixed-income-options"
        aria-labelledby="fixed-income-heading"
        className="bg-surface-muted py-16 lg:py-24"
      >
        <div className="section-container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 id="fixed-income-heading" className="mb-4 text-3xl font-semibold sm:text-4xl">
              Fixed-Income Investment Options
            </h2>
            <p className="text-base leading-relaxed text-text-secondary">
              Choose from a range of government and corporate fixed-income instruments with
              competitive, predictable returns.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {fixedIncomeOptions.map((option) => (
              <OptionCard key={option.title} {...option} ctaLabel="Invest Now" />
            ))}
          </div>
        </div>
      </section>

      {/* Savings solutions */}
      <section
        id="savings-solutions"
        aria-labelledby="savings-heading"
        className="py-16 lg:py-24"
      >
        <div className="section-container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 id="savings-heading" className="mb-4 text-3xl font-semibold sm:text-4xl">
              Savings Solutions
            </h2>
            <p className="text-base leading-relaxed text-text-secondary">
              Flexible savings plans that fit your lifestyle — from locked-in fixed savings to
              on-demand emergency funds.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {savingsOptions.map((option) => (
              <OptionCard key={option.title} {...option} ctaLabel="Save Now" />
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section
        aria-labelledby="leadership-heading"
        className="bg-surface-muted py-16 lg:py-24"
      >
        <div className="section-container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 id="leadership-heading" className="mb-4 text-3xl font-semibold sm:text-4xl">
              Meet Our Leadership Team
            </h2>
            <p className="text-base leading-relaxed text-text-secondary">
              Experienced professionals committed to making wealth-building accessible for every
              Nigerian.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {leadership.map((member) => (
              <article
                key={member.name}
                className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                  <FontAwesomeIcon icon={faUser} className="text-3xl" aria-hidden="true" />
                </div>
                <h3 className="mb-1 text-lg font-semibold">{member.name}</h3>
                <p className="mb-3 text-sm font-medium text-brand-600">{member.role}</p>
                <p className="text-sm leading-relaxed text-text-secondary">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductsPage;
