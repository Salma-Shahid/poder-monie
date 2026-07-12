import { useState } from "react";
import { Layout } from "../components/Layout";

const featured = [
  {
    tag: "Investment Guide",
    tagColor: "bg-[#dbeafe] text-brand",
    title: "Getting Started with Fixed-Income Investments in Nigeria",
    excerpt:
      "Learn the basics of Treasury Bills, Bonds, and how to start your investment journey with as little as ₦10,000.",
    author: "Adebayo Ogundimu",
    meta: "1/30/2025 · 5 min read",
  },
  {
    tag: "Investment Guide",
    tagColor: "bg-[#dbeafe] text-brand",
    title: "Getting Started with Fixed-Income Investments in Nigeria",
    excerpt:
      "Learn the basics of Treasury Bills, Bonds, and how to start your investment journey with as little as ₦10,000.",
    author: "Adebayo Ogundimu",
    meta: "1/30/2025 · 6 min read",
  },
];

const latest = [
  {
    tag: "Personal Finance",
    tagColor: "bg-[#dbfce7] text-[#16a34a]",
    title: "Building an Emergency Fund: Your Financial Safety Net",
    excerpt:
      "Discover why every Nigerian needs an emergency fund and how to build one that can weather any storm.",
    author: "Ngozi Amaechi",
    meta: "7 min read",
  },
  {
    tag: "Investment Guide",
    tagColor: "bg-[#dbeafe] text-brand",
    title: "Understanding Interest Rates: Simple vs Compound Interest",
    excerpt:
      "Master the mathematics of money and understand how different interest calculations affect your returns.",
    author: "Tunde Bakare",
    meta: "7 min read",
  },
  {
    tag: "Investment Guide",
    tagColor: "bg-[#dbeafe] text-brand",
    title: "How to Diversify Your Investment Portfolio",
    excerpt:
      "Learn the importance of diversification and practical strategies to spread risk across different asset classes.",
    author: "Tunde Bakare",
    meta: "7 min read",
  },
  {
    tag: "Industry Insights",
    tagColor: "bg-[#fcdbdb] text-red-600",
    title: "The Future of Fintech in Nigeria: 2024 Trends",
    excerpt:
      "Explore the latest developments in Nigerian fintech and what they mean for everyday consumers.",
    author: "Adebayo Ogundimu",
    meta: "7 min read",
  },
];

function ArticleCard({ article }) {
  return (
    <a
      href="#"
      className="bg-white rounded-2xl shadow-md overflow-hidden block hover:shadow-lg transition-shadow"
    >
      <div className="h-52 bg-gradient-to-br from-brand/30 to-blue-200" />
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span
            className={`text-[10px] font-medium px-3 py-1 rounded-full ${article.tagColor}`}
          >
            {article.tag}
          </span>
          <span className="text-[#464444] text-xs">{article.meta}</span>
        </div>
        <h3 className="text-xl font-medium mb-3">{article.title}</h3>
        <p className="text-[#464444] text-sm mb-4">{article.excerpt}</p>
        <div className="flex items-center justify-between text-xs text-[#464444]">
          <span>{article.author}</span>
          <span className="text-brand">Read More</span>
        </div>
      </div>
    </a>
  );
}

const Blog = () => {
  const [search, setSearch] = useState("");
  return (
    <Layout>
      <div className="bg-white">
        <section
          className="px-6 md:px-16 pt-16 pb-20 text-center"
          style={{
            backgroundImage:
              "linear-gradient(157deg, rgb(185,221,235) 0%, rgb(213,235,243) 50%, rgb(248,252,253) 99%)",
          }}
        >
          <h1 className="text-3xl md:text-5xl font-semibold mb-4">
            Financial Literacy <span className="text-brand">Blog</span>
          </h1>
          <p className="text-[#464444] max-w-2xl mx-auto">
            Stay informed with expert insights, practical tips, and the latest
            trends in personal finance and investment strategies for Nigerians.
          </p>
        </section>

        <div className="px-6 md:px-16 py-8 shadow-sm">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search articles....."
            className="w-full max-w-xl mx-auto block bg-[#f0f0f5] rounded-xl h-14 px-6 text-[#464444] outline-none"
          />
        </div>

        <section className="bg-[#f9fafb] px-6 md:px-16 py-16">
          <h2 className="text-2xl font-semibold mb-8 max-w-6xl mx-auto">
            Featured Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featured.map((a, i) => (
              <ArticleCard key={i} article={a} />
            ))}
          </div>

          <h2 className="text-2xl font-semibold mb-8 mt-16 max-w-6xl mx-auto">
            Latest Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {latest.map((a, i) => (
              <ArticleCard key={i} article={a} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};
export default Blog;
