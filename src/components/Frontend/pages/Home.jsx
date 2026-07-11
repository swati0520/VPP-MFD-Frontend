import { motion } from "framer-motion";
import {
  BarChart3,
  Briefcase,
  Globe,
  Megaphone,
  Settings,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import Button from "../components/Button";
import Card from "../components/Card";

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
];

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 px-6 pb-20 pt-32 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <span className="inline-flex rounded-full bg-teal-500/20 px-4 py-1 text-sm font-semibold text-teal-300">
              Empowering Your Wealth
            </span>
            <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">
              Smart Investing for a <span className="text-teal-400">Brighter Future</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              We simplify complex investments to help you grow your portfolio with transparency, expert guidance, and proven strategies.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button to="/services" className="w-full sm:w-auto" showIcon={false}>
                Start Investing
              </Button>
              <Button to="/services" variant="secondary" className="w-full sm:w-auto" showIcon={false}>
                View Products
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="relative">
            <div className="absolute h-[400px] w-full rounded-3xl bg-gradient-to-tr from-teal-500 to-blue-600 opacity-20 blur-3xl" />
            <div className="relative z-10 rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
              <div className="mb-4 flex justify-between">
                <span>Assets Growth</span>
                <span className="text-teal-400">+24%</span>
              </div>
              <div className="flex h-40 items-end gap-2 rounded-2xl bg-white/5 p-4">
                {[40, 70, 50, 90, 60, 80].map((height, index) => (
                  <div
                    key={index}
                    className="w-full rounded-t-lg bg-teal-500"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-24 text-slate-100 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center sm:mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-3 text-sm font-bold uppercase tracking-widest text-teal-300"
            >
              Our Services
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl"
            >
              Solutions Tailored for Growth
            </motion.h3>
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
                    <p className="mb-6 leading-relaxed text-slate-300">{service.description}</p>
                    <Button to="/services" variant="ghost" className="mt-auto self-start">
                      Learn More
                    </Button>
                  </Card>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-12 flex justify-center">
            <Button to="/services">View All Services</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
