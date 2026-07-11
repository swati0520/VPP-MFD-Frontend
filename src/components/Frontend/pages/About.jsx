import { ChevronRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import heroBanner from "../../../assets/image.png";

const aboutData = {
  intro: {
    heading: "Unlocking Potential, Delivering Results",
    description:
      "At VPP MFD PVT LTD, we specialize in providing expert business consulting and comprehensive solutions to address every challenge your company may face. Our experienced team is committed to offering tailored strategies and actionable insights to enhance your business operations, streamline processes, and drive sustainable growth.",
    features: ["Corporate Strategy", "Leadership Development", "Influencer Marketing"],
  },
  process: [
    {
      id: "1",
      title: "Our Story",
      desc: "Transform businesses through actionable insights and effective strategies, we have been at the forefront of providing dynamic and customized business solutions.",
    },
    {
      id: "2",
      title: "What We Do",
      desc: "We provide strategic advice to optimize your business processes, enhance productivity, and improve overall performance.",
    },
    {
      id: "3",
      title: "Our Approach",
      desc: "At VPP MFD PVT LTD, we take a holistic approach to business consulting. We work closely with our clients to understand their vision, challenges, and goals.",
    },
  ],
  faq: [
    {
      q: "What services do you offer?",
      a: "We offer a wide range of services including business consulting, problem-solving solutions for various business challenges, and tailored advice to help companies grow and succeed. Our services cater to both small businesses and large enterprises.",
    },
    {
      q: "How do I get started with your services?",
      a: "Getting started is easy! Simply reach out to us through our contact form or call us directly to schedule a consultation. We will discuss your business needs and recommend the best solutions to address them.",
    },
    {
      q: "Do you provide custom business solutions?",
      a: "Yes, we specialize in providing customized solutions based on your business unique challenges and goals. We take the time to understand your business and offer strategies that align with your specific needs.",
    },
    {
      q: "How long does it take to see results?",
      a: "The time it takes to see results depends on the complexity of your business challenges and the solutions implemented. Typically, you may start seeing improvements within a few weeks to a few months, depending on the nature of the services provided.",
    },
  ],
  cta: {
    text: "Have questions or want to book a service? Call us anytime for prompt assistance.",
    buttonLabel: "Get in touch",
  },
};

const About = () => (
  <main className="min-h-screen bg-slate-950 text-slate-100">
    <section className="relative isolate flex min-h-[280px] items-center justify-center overflow-hidden bg-slate-950 px-4 pb-16 pt-36 text-center text-white sm:min-h-[320px] sm:px-6 sm:pb-20 sm:pt-40">
      <div className="absolute inset-0 -z-20 bg-cover bg-center" style={{ backgroundImage: `url(${heroBanner})` }} />
      <div className="absolute inset-0 -z-10 bg-slate-950/70" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950/45 via-slate-950/30 to-teal-950/40" />
      <div className="mx-auto max-w-4xl">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">About Us</motion.h1>
        <motion.nav initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.08 }} aria-label="Breadcrumb" className="mt-5 flex items-center justify-center gap-2 text-sm font-semibold text-slate-200 sm:text-base">
          <Link to="/" className="transition hover:text-teal-300">Home</Link><span className="text-teal-300" aria-hidden="true">&gt;</span><span className="text-teal-300">About Us</span>
        </motion.nav>
      </div>
    </section>

    <section className="bg-slate-950 px-4 py-20 text-slate-100 sm:px-6 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="relative order-2 lg:order-1"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-teal-500 to-blue-600 opacity-20 blur-3xl" />
          <div className="relative h-80 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-soft sm:h-96">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3')] bg-cover bg-center opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="order-1 lg:order-2"
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            {aboutData.intro.heading}
          </h2>
          <p className="mt-5 leading-7 text-slate-300 sm:text-lg">
            {aboutData.intro.description}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {aboutData.intro.features.map((feature) => (
              <Card key={feature} className="flex min-h-28 items-start gap-3 p-5 transition hover:border-teal-400/50">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" />
                <span className="text-sm font-semibold leading-6 text-slate-100">{feature}</span>
              </Card>
            ))}
          </div>

          <button className="mt-8 inline-flex items-center rounded-2xl bg-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-teal-900/10 transition duration-300 hover:bg-teal-600 hover:shadow-lg">
            Learn More <ChevronRight className="ml-2 h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </section>

    <section className="bg-slate-950 px-4 py-20 text-slate-100 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center sm:mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl"
          >
            Our Process: Discover the Benefits
          </motion.h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {aboutData.process.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
            >
              <Card className="group h-full overflow-hidden p-8 transition hover:border-teal-400/50">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/20 text-xl font-bold text-teal-300">
                  {item.id}
                </div>
                <h3 className="mb-4 text-xl font-bold text-white transition-colors group-hover:text-teal-300">
                  {item.title}
                </h3>
                <p className="leading-7 text-slate-300">{item.desc}</p>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-soft sm:p-8 lg:p-10">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-xl text-center lg:text-left"
          >
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-5 leading-7 text-slate-300">
              We work with a wide range of industries including healthcare, retail, finance, and technology.
            </p>
            <a href="#" className="mt-6 inline-flex items-center text-sm font-semibold text-teal-300 transition hover:text-teal-200">
              Contact support <ChevronRight className="h-4 w-4" />
            </a>
          </motion.div>

          <div className="space-y-4">
            {aboutData.faq.map((item, index) => (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-5 transition hover:border-teal-400/50"
              >
                <h4 className="text-lg font-semibold text-white">{item.q}</h4>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="bg-slate-950 px-4 pb-24 text-slate-100 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-900 p-8 shadow-soft sm:p-10 lg:p-12"
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="flex items-start gap-5">
            <div className="mt-1 hidden h-16 w-1.5 rounded-full bg-teal-400 md:block"></div>
            <p className="max-w-2xl text-2xl font-extrabold leading-tight text-white sm:text-3xl">
              {aboutData.cta.text}
            </p>
          </div>
          <button className="w-full rounded-2xl bg-teal-500 px-8 py-3 text-sm font-semibold text-white shadow-sm shadow-teal-900/10 transition duration-300 hover:bg-teal-600 hover:shadow-lg sm:w-fit">
            {aboutData.cta.buttonLabel}
          </button>
        </div>
      </motion.div>
    </section>
  </main>
);

export default About;
