import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import heroBanner from "../../../assets/image.png";
import careerJoinTeam from "../../../assets/career-join-team.png";

const faqData = [
  {
    question: "What services do you offer?",
    answer: "We offer a wide range of services including business consulting, problem-solving solutions for various business challenges, and tailored advice to help companies grow and succeed. Our services cater to both small businesses and large enterprises.",
  },
  {
    question: "How do I get started with your services?",
    answer: "Getting started is easy! Simply reach out to us through our contact form or call us directly to schedule a consultation. We'll discuss your business needs and recommend the best solutions to address them.",
  },
  {
    question: "Do you provide custom business solutions?",
    answer: "Yes, we specialize in providing customized solutions based on your business's unique challenges and goals. We take the time to understand your business and offer strategies that align with your specific needs.",
  },
  {
    question: "How long does it take to see results?",
    answer: "The time it takes to see results depends on the complexity of your business challenges and the solutions implemented. Typically, you may start seeing improvements within a few weeks to a few months, depending on the nature of the services provided.",
  },
];

const positions = ["Business Analyst", "Project Manager", "Marketing Strategist"];
const benefits = ["Dynamic Work Environment", "Growth Opportunities", "Impactful Work"];
const lifeAtVpp = [
  "Celebrating success through team events.",
  "Opportunities to work on impactful projects.",
  "A supportive environment for work-life balance.",
];

export default function Careers() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative isolate flex min-h-[280px] items-center justify-center overflow-hidden bg-slate-950 px-4 pb-16 pt-36 text-center text-white sm:min-h-[320px] sm:px-6 sm:pb-20 sm:pt-40">
        <div className="absolute inset-0 -z-20 bg-cover bg-center" style={{ backgroundImage: `url(${heroBanner})` }} />
        <div className="absolute inset-0 -z-10 bg-slate-950/70" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950/45 via-slate-950/30 to-teal-950/40" />
        <div className="mx-auto max-w-4xl">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Careers</motion.h1>
          <motion.nav initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.08 }} aria-label="Breadcrumb" className="mt-5 flex items-center justify-center gap-2 text-sm font-semibold text-slate-200 sm:text-base">
            <Link to="/" className="transition hover:text-teal-300">Home</Link><span className="text-teal-300" aria-hidden="true">&gt;</span><span className="text-teal-300">Careers</span>
          </motion.nav>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-20 sm:px-6 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }}>
            <span className="text-sm font-semibold text-teal-300">Join Our Team</span>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">Unleash Your Potential with VPP MFD</h2>
            <p className="mt-5 leading-7 text-slate-300 sm:text-lg">
              At VPP MFD PVT LTD, we believe in fostering a culture of innovation, collaboration, and excellence. We are always looking for talented, passionate individuals who want to make a meaningful impact in the world of business consulting and solutions.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {benefits.map((benefit) => (
                <Card key={benefit} className="flex min-h-28 items-start gap-3 p-5 transition hover:border-teal-400/50">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" />
                  <span className="text-sm font-semibold leading-6 text-slate-100">{benefit}</span>
                </Card>
              ))}
            </div>
            <button className="mt-8 inline-flex items-center rounded-2xl bg-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-teal-900/10 transition duration-300 hover:bg-teal-600 hover:shadow-lg">
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.08 }} className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-teal-500 to-blue-600 opacity-20 blur-3xl" />
            <div className="relative h-80 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-soft sm:h-96">
              <img src={careerJoinTeam} alt="Professional profile" className="h-full w-full object-contain object-bottom" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-20 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center sm:mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-300">Open Positions</p>
            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-3 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Shape the Future, Start Here
            </motion.h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {positions.map((position, index) => (
              <motion.article key={position} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.5, delay: index * 0.08 }} whileHover={{ y: -8 }}>
                <Card className="group h-full overflow-hidden p-8 transition hover:border-teal-400/50">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/20 text-xl font-bold text-teal-300">{index + 1}</div>
                  <h3 className="mb-4 text-xl font-bold text-white transition-colors group-hover:text-teal-300">{position}</h3>
                  <p className="leading-7 text-slate-300">Collaborate with clients to analyze business processes, identify challenges, and propose data-driven solutions.</p>
                </Card>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-20 sm:px-6 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">How to Apply?</h2>
            <p className="mt-5 leading-7 text-slate-300">If you're ready to take the next step in your career and contribute to transformative business solutions, we'd love to hear from you!</p>
            <p className="mt-8 font-semibold text-white">Email Your Resume</p>
            <p className="mt-2 text-teal-300">VPP.MFD@GMAIL.COM</p>
            <h3 className="mt-10 text-2xl font-bold text-white">Life at VPP MFD</h3>
            <ul className="mt-5 space-y-3 text-slate-300">
              {lifeAtVpp.map((item) => <li key={item} className="flex gap-3"><CheckCircle2 className="h-5 w-5 shrink-0 text-teal-400" />{item}</li>)}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.08 }}>
            <Card className="p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-white">Register Now</h3>
              <form className="mt-6 space-y-4">
                {[{ label: "Full Name *", type: "text" }, { label: "Email *", type: "email" }, { label: "Phone number *", type: "tel" }].map((field) => (
                  <label key={field.label} className="block text-sm font-medium text-slate-300">{field.label}<input type={field.type} className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white outline-none transition placeholder:text-slate-500 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20" /></label>
                ))}
                <label className="block text-sm font-medium text-slate-300">Enter Your Resume<input type="file" className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 p-2 text-sm text-slate-300 file:mr-4 file:rounded-lg file:border-0 file:bg-teal-500 file:px-3 file:py-1.5 file:text-sm file:font-semibold file:text-white hover:file:bg-teal-600" /></label>
                <button className="mt-2 w-full rounded-2xl bg-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-teal-900/10 transition duration-300 hover:bg-teal-600 hover:shadow-lg">Register</button>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 pb-24 pt-20 text-white sm:px-6 lg:pt-24">
        <div className="mx-auto max-w-7xl rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-soft sm:p-8 lg:p-10">
          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }} className="mx-auto max-w-xl text-center lg:text-left">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Frequently Asked Questions</h2>
              <p className="mt-5 leading-7 text-slate-300">We work with a wide range of industries, including but not limited to, healthcare, retail, finance, technology</p>
              <button className="mt-6 inline-flex items-center text-sm font-semibold text-teal-300 transition hover:text-teal-200">Contact support <ChevronRight className="h-4 w-4" /></button>
            </motion.div>
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <motion.div key={item.question} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.5, delay: index * 0.06 }} className="rounded-2xl border border-slate-800 bg-slate-950 p-5 transition hover:border-teal-400/50">
                  <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
