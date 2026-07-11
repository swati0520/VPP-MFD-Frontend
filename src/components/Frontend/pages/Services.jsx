import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BarChart3,
  Briefcase,
  CheckCircle2,
  Globe,
  Megaphone,
  Settings,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import Button from "../components/Button";
import Card from "../components/Card";
import heroBanner from "../../../assets/image.png";

const services = [
  {
    title: "Corporate Strategy",
    description:
      "Expert advice on business strategy, operations, and growth to optimize performance and achieve sustainable success.",
    Icon: Briefcase,
    iconClassName: "text-teal-500",
  },
  {
    title: "Financial Solutions",
    description:
      "Customized financial strategies to enhance profitability, manage risks, and ensure long-term stability.",
    Icon: TrendingUp,
    iconClassName: "text-cyan-500",
  },
  {
    title: "Market Research",
    description:
      "In-depth market analysis to identify trends and opportunities, helping you make data-driven decisions.",
    Icon: BarChart3,
    iconClassName: "text-sky-500",
  },
  {
    title: "HR Consulting",
    description:
      "Attract, retain, and develop top talent with our customized human resources strategies and frameworks.",
    Icon: Users,
    iconClassName: "text-teal-500",
  },
  {
    title: "Digital Presence",
    description:
      "Professional web development and digital marketing services to build, optimize, and grow your online presence.",
    Icon: Globe,
    iconClassName: "text-cyan-500",
  },
  {
    title: "Marketing Management",
    description:
      "Impactful marketing campaigns that drive brand awareness, customer engagement, and lasting connections.",
    Icon: Megaphone,
    iconClassName: "text-sky-500",
  },
  {
    title: "Risk Management",
    description:
      "Proactive strategies to identify, analyze, and mitigate potential risks, safeguarding your company's assets.",
    Icon: ShieldCheck,
    iconClassName: "text-teal-500",
  },
  {
    title: "Process Optimization",
    description:
      "Streamlining daily operations and workflows to enhance efficiency, reduce costs, and improve productivity.",
    Icon: Settings,
    iconClassName: "text-cyan-500",
  },
];

const processSteps = [
  "Understand your goals",
  "Build the right strategy",
  "Execute with discipline",
  "Review and optimize",
];

export default function Services() {
  return (
    <main className="bg-slate-950 text-slate-100">
      <section className="relative isolate flex min-h-[280px] items-center justify-center overflow-hidden bg-slate-950 px-4 pb-16 pt-36 text-center text-white sm:min-h-[320px] sm:px-6 sm:pb-20 sm:pt-40">
        <div className="absolute inset-0 -z-20 bg-cover bg-center" style={{ backgroundImage: `url(${heroBanner})` }} />
        <div className="absolute inset-0 -z-10 bg-slate-950/70" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950/45 via-slate-950/30 to-teal-950/40" />
        <div className="mx-auto max-w-4xl">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Services</motion.h1>
          <motion.nav initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.08 }} aria-label="Breadcrumb" className="mt-5 flex items-center justify-center gap-2 text-sm font-semibold text-slate-200 sm:text-base">
            <Link to="/" className="transition hover:text-teal-300">Home</Link><span className="text-teal-300" aria-hidden="true">&gt;</span><span className="text-teal-300">Services</span>
          </motion.nav>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-20 text-slate-100 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center sm:mb-16">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-teal-300">Our Services</p>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Solutions Tailored for Growth
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
              Explore focused consulting, financial, market, and operational solutions delivered with one consistent advisory experience.
            </p>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.Icon;

              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -8 }}
                >
                  <Card className="group h-full overflow-hidden text-slate-100">
                    <div className="mb-6 inline-flex w-fit rounded-xl border border-slate-700 bg-slate-950 p-3">
                      <Icon className={`h-8 w-8 ${service.iconClassName}`} />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-teal-300">
                      {service.title}
                    </h3>
                    <p className="leading-relaxed text-slate-300">{service.description}</p>
                  </Card>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 pb-24 text-slate-100 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-soft sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-teal-300">How we work</p>
              <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">One process, every service</h2>
              <p className="mt-4 leading-7 text-slate-300">
                Each solution follows the same thoughtful path, from discovery to optimization, so the experience feels clear and consistent at every step.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-2xl border border-slate-800 bg-slate-950 p-5"
                >
                  <CheckCircle2 className="mb-4 h-6 w-6 text-teal-400" />
                  <h3 className="font-bold text-white">{step}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    A structured step that keeps the engagement aligned, measurable, and easy to follow.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 pb-24 text-slate-100 sm:px-6">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-900 p-8 shadow-soft sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-teal-300">Ready to begin</p>
              <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
                Build a service plan with a clearer next step.
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                Start with the service that matches your current priority and grow into a complete advisory framework as your needs evolve.
              </p>
            </div>
            <Button to="/contact" className="w-fit">
              Start Investing
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
