import { useId, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faPiggyBank,
  faHandHoldingDollar,
  faCalculator,
} from "@fortawesome/free-solid-svg-icons";
import { Layout } from "../components/Layout";

const tabs = [
  { id: "fixed-income", label: "Fixed-Income", icon: faChartLine },
  { id: "savings", label: "Savings", icon: faPiggyBank },
  { id: "loans", label: "Loans", icon: faHandHoldingDollar },
];

const tabDefaults = {
  "fixed-income": { amount: "100000", duration: "12", rate: "15" },
  savings: { amount: "50000", duration: "6", rate: "12" },
  loans: { amount: "200000", duration: "12", rate: "18" },
};

const tabLabels = {
  "fixed-income": {
    amount: "Investment Amount (₦)",
    duration: "Duration (months)",
    rate: "Interest Rate (%)",
    result: "Total Returns",
    resultSub: "Principal + interest at maturity",
  },
  savings: {
    amount: "Monthly Deposit (₦)",
    duration: "Duration (months)",
    rate: "Interest Rate (%)",
    result: "Total Savings",
    resultSub: "Deposits + interest earned",
  },
  loans: {
    amount: "Loan Amount (₦)",
    duration: "Repayment Period (months)",
    rate: "Interest Rate (%)",
    result: "Monthly Repayment",
    resultSub: "Estimated EMI including interest",
  },
};

const formatNaira = (value) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);

const calculate = (tab, amount, duration, rate) => {
  const principal = parseFloat(amount) || 0;
  const months = parseFloat(duration) || 0;
  const annualRate = parseFloat(rate) || 0;

  if (principal <= 0 || months <= 0 || annualRate < 0) return 0;

  if (tab === "fixed-income") {
    const interest = principal * (annualRate / 100) * (months / 12);
    return principal + interest;
  }

  if (tab === "savings") {
    const monthlyRate = annualRate / 100 / 12;
    if (monthlyRate === 0) return principal * months;
    const futureValue =
      principal * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    return futureValue;
  }

  // Loans — EMI formula
  const monthlyRate = annualRate / 100 / 12;
  if (monthlyRate === 0) return principal / months;
  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);
  return emi;
};

export const CalculatorsPage = () => {
  const [activeTab, setActiveTab] = useState("fixed-income");
  const [inputs, setInputs] = useState(tabDefaults);
  const [result, setResult] = useState(null);
  const amountId = useId();
  const durationId = useId();
  const rateId = useId();

  const current = inputs[activeTab];
  const labels = tabLabels[activeTab];

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setResult(null);
  };

  const handleInput = (field, value) => {
    setInputs((prev) => ({
      ...prev,
      [activeTab]: { ...prev[activeTab], [field]: value },
    }));
    setResult(null);
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    const value = calculate(
      activeTab,
      current.amount,
      current.duration,
      current.rate,
    );
    setResult(value);
  };

  return (
    <Layout
      cta={{
        title: "Ready to Start Your Financial Journey?",
        description:
          "Use our calculators to plan your investments, savings, and loans — then take the next step with PoderMonie.",
      }}
    >
      {/* Hero */}
      <section
        aria-label="Calculators hero"
        className="bg-gradient-to-br from-sky-100 via-sky-50 to-white py-16 lg:py-24"
      >
        <div className="section-container text-center">
          <h1 className="mb-4 text-4xl font-semibold text-brand-600 sm:text-5xl lg:text-6xl">
            Financial Calculators
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-text-secondary lg:text-lg">
            Plan your investments, savings, and loans with our easy-to-use financial calculators.
            Get instant estimates to make smarter money decisions.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section aria-labelledby="calculator-heading" className="py-16 lg:py-24">
        <div className="section-container">
          <h2 id="calculator-heading" className="sr-only">
            Financial calculator
          </h2>

          {/* Tabs */}
          <div
            role="tablist"
            aria-label="Calculator type"
            className="mb-8 flex flex-wrap justify-center gap-2"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`panel-${tab.id}`}
                id={`tab-${tab.id}`}
                onClick={() => handleTabChange(tab.id)}
                className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-colors sm:text-base ${
                  activeTab === tab.id
                    ? "bg-brand-600 text-white shadow-md"
                    : "bg-gray-100 text-text-muted hover:bg-gray-200"
                }`}
              >
                <FontAwesomeIcon icon={tab.icon} aria-hidden="true" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Panel */}
          <div
            role="tabpanel"
            id={`panel-${activeTab}`}
            aria-labelledby={`tab-${activeTab}`}
            className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg"
          >
            <div className="grid lg:grid-cols-2">
              {/* Form */}
              <form onSubmit={handleCalculate} className="border-b border-gray-200 p-6 sm:p-8 lg:border-b-0 lg:border-r">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                    <FontAwesomeIcon icon={faCalculator} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold">
                    {tabs.find((t) => t.id === activeTab)?.label} Calculator
                  </h3>
                </div>

                <div className="space-y-5">
                  <div>
                    <label htmlFor={amountId} className="mb-2 block text-sm font-medium text-text-secondary">
                      {labels.amount}
                    </label>
                    <input
                      id={amountId}
                      type="number"
                      min="0"
                      step="1000"
                      value={current.amount}
                      onChange={(e) => handleInput("amount", e.target.value)}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-base text-text-primary focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor={durationId} className="mb-2 block text-sm font-medium text-text-secondary">
                      {labels.duration}
                    </label>
                    <input
                      id={durationId}
                      type="number"
                      min="1"
                      max="360"
                      value={current.duration}
                      onChange={(e) => handleInput("duration", e.target.value)}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-base text-text-primary focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor={rateId} className="mb-2 block text-sm font-medium text-text-secondary">
                      {labels.rate}
                    </label>
                    <input
                      id={rateId}
                      type="number"
                      min="0"
                      max="100"
                      step="0.1"
                      value={current.rate}
                      onChange={(e) => handleInput("rate", e.target.value)}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-base text-text-primary focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-8 w-full rounded-xl bg-brand-500 py-3.5 text-base font-medium text-white transition-colors hover:bg-brand-600"
                >
                  Calculate
                </button>
              </form>

              {/* Results */}
              <div className="flex flex-col justify-center bg-gradient-to-br from-brand-700 to-brand-600 p-6 text-white sm:p-8">
                <p className="mb-2 text-sm font-medium uppercase tracking-wide text-white/70">
                  Your Result
                </p>
                <p className="mb-1 text-lg font-medium">{labels.result}</p>
                <p className="mb-6 text-4xl font-bold sm:text-5xl">
                  {result !== null ? formatNaira(result) : "—"}
                </p>
                <p className="text-sm leading-relaxed text-white/80">{labels.resultSub}</p>

                {result !== null && activeTab !== "loans" && (
                  <div className="mt-6 rounded-xl bg-white/10 p-4">
                    <p className="text-sm text-white/70">Interest Earned</p>
                    <p className="text-xl font-semibold">
                      {formatNaira(
                        result -
                          (activeTab === "savings"
                            ? parseFloat(current.amount) * parseFloat(current.duration)
                            : parseFloat(current.amount)),
                      )}
                    </p>
                  </div>
                )}

                {result !== null && activeTab === "loans" && (
                  <div className="mt-6 rounded-xl bg-white/10 p-4">
                    <p className="text-sm text-white/70">Total Repayment</p>
                    <p className="text-xl font-semibold">
                      {formatNaira(result * parseFloat(current.duration))}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CalculatorsPage;
