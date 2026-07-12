import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";

const SignupPage = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Signup form submitted. Connect this to your backend later.");
  };

  return (
    <Layout>
      <section className="bg-slate-50 px-6 py-16 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-center">
          <div className="max-w-xl flex-1">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-brand-600">
              Join PoderMonie
            </p>
            <h1 className="mb-4 text-4xl font-semibold text-slate-900 sm:text-5xl">
              Create your account and start growing your money
            </h1>
            <p className="text-lg leading-relaxed text-slate-600">
              Register in minutes to access smart savings, secure investments,
              and helpful financial plans.
            </p>
          </div>

          <div className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/70">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  className="mb-2 block text-sm font-medium text-slate-700"
                  htmlFor="name"
                >
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-0 focus:border-brand-500"
                  required
                />
              </div>

              <div>
                <label
                  className="mb-2 block text-sm font-medium text-slate-700"
                  htmlFor="email"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-0 focus:border-brand-500"
                  required
                />
              </div>

              <div>
                <label
                  className="mb-2 block text-sm font-medium text-slate-700"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-0 focus:border-brand-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-brand-600 px-4 py-3 font-semibold text-white transition hover:bg-brand-700"
              >
                Sign up
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-brand-600 hover:text-brand-700"
              >
                Login here
              </Link>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SignupPage;
