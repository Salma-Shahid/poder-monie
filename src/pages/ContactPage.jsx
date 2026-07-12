import { useState } from "react";
import { Layout } from "../components/Layout";

const contactCards = [
  {
    icon: "✉",
    title: "Email Us",
    bold: "hello@podermonie.com",
    desc: "Send us an email and we'll respond within 24 hours.",
  },
  {
    icon: "📞",
    title: "Call Us",
    bold: "+234 901 234 5678",
    desc: "Speak directly with our customer support team.",
  },
  {
    icon: "📍",
    title: "Visit Us",
    bold: "Our head office is located in the heart of Lagos.",
    desc: "",
  },
  {
    icon: "🕐",
    title: "Business Hours",
    bold: "Mon-Fri: 9AM-6PM WAT",
    desc: "We're here to help during business hours.",
  },
];

const departments = [
  {
    title: "Customer Support",
    desc: "General inquiries, account issues, and product questions",
    email: "support@podermonie.com",
  },
  {
    title: "Business Development",
    desc: "Partnership opportunities and corporate accounts",
    email: "business@podermonie.com",
  },
  {
    title: "Media & Press",
    desc: "Press inquiries and media requests",
    email: "press@podermonie.com",
  },
];

const faqs = [
  {
    q: "How do I get started with PoderMonie?",
    a: "Download our mobile app, complete the KYC process with your BVN and NIN, fund your wallet, and start investing or saving.",
  },
  {
    q: "How secure are my funds?",
    a: "Your funds are secured with bank-grade encryption, regulatory compliance, and are backed by government securities for fixed-income investments.",
  },
  {
    q: "Can I withdraw my money anytime?",
    a: "Wallet funds can be withdrawn anytime. Fixed-income investments and fixed savings have specific maturity dates and early withdrawal penalties may apply.",
  },
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    inquiry: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (wire this up to your backend/email service)");
  };

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
            Get in <span className="text-brand">Touch</span>
          </h1>
          <p className="text-[#464444] max-w-2xl mx-auto">
            Have questions about our products or need support? We're here to
            help you on your financial journey. Reach out to us anytime.
          </p>
        </section>

        <section className="px-6 md:px-16 -mt-10 pb-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactCards.map((c, i) => (
              <div
                key={i}
                className="rounded-xl p-8 text-white flex flex-col items-center gap-4 text-center shadow-lg"
                style={{
                  backgroundImage:
                    "linear-gradient(130deg, rgb(39,81,181) 12%, rgb(71,138,255) 57%, rgb(32,70,182) 100%)",
                }}
              >
                <div className="bg-[#557bcd] rounded-xl w-16 h-16 flex items-center justify-center text-2xl">
                  {c.icon}
                </div>
                <p className="font-semibold text-xl">{c.title}</p>
                <div>
                  <p className="font-semibold text-lg">{c.bold}</p>
                  {c.desc && (
                    <p className="text-sm text-white/90 mt-1">{c.desc}</p>
                  )}
                </div>
                <button className="bg-white text-brand rounded-lg px-6 py-2 text-sm font-medium">
                  Contact Us
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#f9fafb] px-6 md:px-16 py-16">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-brand rounded-2xl p-8"
            >
              <h2 className="text-xl font-semibold mb-2">Send Us A Message</h2>
              <p className="text-[#464444] text-sm mb-6">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-sm font-medium block mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your Full Name"
                    className="w-full bg-[#f3f3f5] rounded-xl h-10 px-4 text-sm outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your Email Address"
                    className="w-full bg-[#f3f3f5] rounded-xl h-10 px-4 text-sm outline-none"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-sm font-medium block mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Enter your Phone Number"
                    className="w-full bg-[#f3f3f5] rounded-xl h-10 px-4 text-sm outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1">
                    Inquiry Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="inquiry"
                    value={form.inquiry}
                    onChange={handleChange}
                    className="w-full bg-[#f3f3f5] rounded-xl h-10 px-4 text-sm outline-none"
                  >
                    <option value="">Select Inquiry Type</option>
                    <option>General</option>
                    <option>Support</option>
                    <option>Business</option>
                    <option>Press</option>
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label className="text-sm font-medium block mb-1">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Brief description of your inquiry"
                  className="w-full bg-[#f3f3f5] rounded-xl h-10 px-4 text-sm outline-none"
                />
              </div>

              <div className="mb-6">
                <label className="text-sm font-medium block mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Please provide detail of your inquiry"
                  rows={5}
                  className="w-full bg-[#f3f3f5] rounded-xl px-4 py-3 text-sm outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand text-white rounded-lg h-11 font-medium"
              >
                Send Message
              </button>
            </form>

            <div className="flex flex-col gap-6">
              <div className="bg-white border border-brand rounded-2xl p-8">
                <h2 className="text-xl font-semibold mb-6">
                  Direct Department Contacts
                </h2>
                <div className="flex flex-col gap-6">
                  {departments.map((d, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="bg-[#557bcd] rounded-xl w-14 h-14 flex-shrink-0 flex items-center justify-center text-white text-xl">
                        ✦
                      </div>
                      <div>
                        <p className="font-semibold">{d.title}</p>
                        <p className="text-[#464444] text-sm mt-1">{d.desc}</p>
                        <a
                          href={`mailto:${d.email}`}
                          className="text-brand text-sm underline"
                        >
                          {d.email}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-brand rounded-2xl p-8 flex items-center gap-4">
                <div className="bg-[#557bcd] rounded-xl w-14 h-14 flex-shrink-0 flex items-center justify-center text-white text-xl">
                  ⏱
                </div>
                <div>
                  <p className="font-semibold">Quick Response Time</p>
                  <p className="text-[#464444] text-sm mt-1">
                    We typically respond to all inquiries within 24 hours during
                    business days. For urgent matters, please call our support
                    line.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-16 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#464444] mb-12">
            Quick answers to common questions about PoderMonie
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto text-left">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="bg-white border border-brand rounded-xl p-6"
              >
                <p className="text-brand font-semibold text-xl mb-3">{f.q}</p>
                <p className="text-[#464444] text-sm">{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
