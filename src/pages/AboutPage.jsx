import { Layout } from "../components/Layout";
const values = [
  {
    title: "Security First",
    desc: "We prioritize the security of your funds and data with bank-grade encryption and compliance with CBN regulations.",
  },
  {
    title: "Customer-Centric",
    desc: "Every feature we build is designed with our users in mind, making financial growth accessible to everyone.",
  },
  {
    title: "Innovation",
    desc: "We leverage cutting-edge technology to provide seamless and efficient financial services.",
  },
  {
    title: "Transparency",
    desc: "We believe in clear communication, fair pricing, and honest business practices.",
  },
];

const journey = [
  {
    year: "Company Founded",
    desc: "PoderMonie was established with a vision to democratize investment access in Nigeria.",
    side: "left",
  },
  {
    year: "CBN License Obtained",
    desc: "Received approval from Central Bank of Nigeria to operate as a financial technology company.",
    side: "right",
  },
  {
    year: "Platform Launch",
    desc: "Successfully launched our mobile-first investment platform with fixed-income products.",
    side: "left",
  },
  {
    year: "10,000 Users",
    desc: "Reached our first major milestone of 10,000 active users and ₦1B in assets under management.",
    side: "right",
  },
  {
    year: "Series A Funding",
    desc: "Raised $5M Series A to expand our product offerings and reach more Nigerians.",
    side: "left",
  },
];

const team = [
  {
    name: "Adebayo Ogundimu",
    role: "Chief Executive Officer",
    exp: "15+ years in Fintech",
    bio: "Former VP at Paystack, passionate about financial inclusion in Africa.",
  },
  {
    name: "Ngozi Amaechi",
    role: "Chief Technology Officer",
    exp: "12+ years in Software Engineering",
    bio: "Ex-Google engineer, expert in building scalable financial platforms.",
  },
  {
    name: "Tunde Bakare",
    role: "Chief Financial Officer",
    exp: "18+ years in Investment Banking",
    bio: "Former MD at ARM Investment, specialist in fixed-income securities.",
  },
  {
    name: "Kemi Adeleke",
    role: "Chief Compliance Officer",
    exp: "10+ years in Regulatory Affairs",
    bio: "Former CBN examiner, ensures full regulatory compliance.",
  },
];

const About = () => {
  return (
    <Layout>
      <div className="bg-white">
        {/* Hero */}
        <section
          className="px-6 md:px-16 pt-16 pb-20 text-center"
          style={{
            backgroundImage:
              "linear-gradient(157deg, rgb(185,221,235) 0%, rgb(213,235,243) 50%, rgb(248,252,253) 99%)",
          }}
        >
          <h1 className="text-3xl md:text-5xl font-semibold mb-4">
            About <span className="text-brand">PoderMonie</span>
          </h1>
          <p className="text-[#464444] max-w-2xl mx-auto">
            We're on a mission to democratize financial services in Nigeria by
            providing secure, accessible, and profitable investment
            opportunities for everyone.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="px-6 md:px-16 py-16 grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">
              Our Mission &amp; Vision
            </h2>
            <h3 className="text-brand text-xl font-semibold mb-3">Mission</h3>
            <p className="text-[#464444] mb-8 leading-relaxed">
              To empower Nigerians and institutional investors to manage their
              money with confidence by providing secure, accessible, and
              profitable fixed-income investments, savings solutions, and
              cash-backed loans through our innovative mobile-first platform.
            </p>
            <h3 className="text-brand text-xl font-semibold mb-3">Vision</h3>
            <p className="text-[#464444] leading-relaxed">
              To become the leading financial technology platform in Africa,
              democratizing access to investment opportunities and building a
              financially inclusive ecosystem where everyone can achieve their
              wealth-building goals.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden h-[300px] md:h-[395px] bg-gradient-to-br from-brand to-blue-300 flex items-center justify-center text-white/70">
            <span className="rotate-[-8deg] bg-white text-black px-6 py-3 rounded shadow-lg font-mono">
              INVESTMENTS
            </span>
          </div>
        </section>

        {/* Core Values */}
        <section className="bg-[#f9fafb] px-6 md:px-16 py-20 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">
            Our Core Values
          </h2>
          <p className="text-[#464444] mb-12">
            These principles guide everything we do and shape our company
            culture
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((v, i) => (
              <div
                key={i}
                className="rounded-xl p-8 text-white flex flex-col items-center gap-4 shadow-lg"
                style={{
                  backgroundImage:
                    "linear-gradient(130deg, rgb(39,81,181) 12%, rgb(71,138,255) 57%, rgb(32,70,182) 100%)",
                }}
              >
                <div className="bg-[#557bcd] rounded-xl p-4 w-16 h-16 flex items-center justify-center text-2xl">
                  ★
                </div>
                <p className="font-semibold text-xl">{v.title}</p>
                <p className="text-sm text-center text-white/90">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Journey */}
        <section className="px-6 md:px-16 py-20 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">
            Our Journey So Far
          </h2>
          <p className="text-[#464444] mb-16">
            From idea to reality - here's how we're building the future of
            financial services in Nigeria
          </p>
          <div className="relative max-w-4xl mx-auto">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-brand -translate-x-1/2" />
            <div className="flex flex-col gap-10">
              {journey.map((j, i) => (
                <div
                  key={i}
                  className={`md:flex ${j.side === "right" ? "md:justify-end" : "md:justify-start"}`}
                >
                  <div className="md:w-[45%] border border-brand rounded-xl p-6 text-left bg-white shadow-sm">
                    <p className="text-brand font-semibold text-xl mb-2">
                      {j.year}
                    </p>
                    <p className="text-[#464444] text-sm">{j.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-[#f9fafb] px-6 md:px-16 py-20 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">
            Meet Our Leadership Team
          </h2>
          <p className="text-[#464444] mb-12">
            Experienced leaders with deep expertise in fintech, banking, and
            technology
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {team.map((m, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-full bg-brand/10 mb-4 flex items-center justify-center text-brand font-semibold text-xl">
                  {m.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <p className="text-brand font-semibold text-lg">{m.name}</p>
                <p className="text-brand text-xs font-semibold mt-1">
                  {m.role}
                </p>
                <p className="text-[#464444] text-xs mt-2">{m.exp}</p>
                <p className="text-[#464444] text-sm text-center mt-3">
                  {m.bio}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};
export default About;
