import { motion } from "framer-motion";
import { BookOpen, Calendar, CheckCircle2, Mail, Phone, User } from "lucide-react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import heroBanner from "../../../assets/image.png";
import contactImage from "../../../assets/contact-us-contact-call-us-message-4193637.jpg";
import teamWorkImage from "../../../assets/client-business-marketing-website-3691432.jpg";

const registrationRequirements = [
  "10+ years of work experience",
  "Ground-level knowledge in any sector",
  "A willingness to grow or guide others",
  "A desire to explore digital transformation and new opportunities",
  "Passion for Your Success",
];

const formFields = [
  { label: "Full Name", Icon: User },
  { label: "Date of Birth", Icon: Calendar },
  { label: "Contact Number", Icon: Phone },
  { label: "Email id", Icon: Mail },
  { label: "Nature of work", Icon: BookOpen },
  { label: "Total Experience [In Years]", Icon: BookOpen },
];

const inputClasses = "mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-slate-100 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20";

export default function KushalConnection() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative isolate flex min-h-[280px] items-center justify-center overflow-hidden bg-slate-950 px-4 pb-16 pt-36 text-center text-white sm:min-h-[320px] sm:px-6 sm:pb-20 sm:pt-40">
        <div className="absolute inset-0 -z-20 bg-cover bg-center" style={{ backgroundImage: `url(${heroBanner})` }} />
        <div className="absolute inset-0 -z-10 bg-slate-950/70" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950/45 via-slate-950/30 to-teal-950/40" />
        <div className="mx-auto max-w-4xl">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Kushal Connection
          </motion.h1>
          <motion.nav initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.08 }} aria-label="Breadcrumb" className="mt-5 flex items-center justify-center gap-2 text-sm font-semibold text-slate-200 sm:text-base">
            <Link to="/" className="transition hover:text-teal-300">Home</Link>
            <span className="text-teal-300" aria-hidden="true">&gt;</span>
            <span className="text-teal-300">Kushal Connection</span>
          </motion.nav>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }}>
            <p className="text-sm font-semibold text-teal-300">Kushal Connect</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">Empowering Experience. Connecting Excellence</h2>
            <p className="mt-5 max-w-2xl leading-7 text-slate-300 sm:text-lg">
              Kushal Connect is a dedicated platform for skilled professionals with over 10 years of hands-on experience across various industries — from manufacturing to services and beyond. Whether you're a seasoned worker, technician, operator, or supervisor, Kushal Connect helps you showcase your experience, connect with businesses that value real-world skills, and explore new avenues of growth.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.08 }} className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-teal-500 to-blue-600 opacity-20 blur-3xl" />
            <Card className="relative h-64 overflow-hidden border-slate-700 p-0 sm:h-80">
              <img src={teamWorkImage} alt="Professionals collaborating at work" className="h-full w-full object-cover" />
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center sm:mb-16"><p className="text-sm font-semibold uppercase tracking-widest text-teal-300">Eligibility</p><h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">Who Can Register?</h2></div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {registrationRequirements.map((requirement, index) => (
              <motion.article key={requirement} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.5, delay: index * 0.07 }} whileHover={{ y: -8 }}>
                <Card className="group h-full p-6 transition hover:border-teal-400/50"><CheckCircle2 className="mb-5 h-7 w-7 text-teal-400" /><p className="font-semibold leading-7 text-slate-100">{requirement}</p></Card>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 pt-20 sm:px-6 lg:pt-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Kushal Connection</h2>
            <div className="mt-6 h-64 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-soft sm:h-80"><img src={contactImage} alt="Contact support representative" className="h-full w-full object-cover" /></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.08 }}>
            <Card className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-white">Register Now</h2>
              <form className="mt-6 space-y-4">
                {formFields.map(({ label, Icon }) => (
                  <label key={label} className="block text-sm font-medium text-slate-300"><span className="flex items-center gap-2"><Icon className="h-4 w-4 text-teal-300" />{label} *</span><input type="text" className={inputClasses} /></label>
                ))}
                <label className="block text-sm font-medium text-slate-300">Any other message<textarea className={`${inputClasses} h-24 resize-none`} /></label>
                <button className="w-full rounded-2xl bg-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-teal-900/10 transition duration-300 hover:bg-teal-600 hover:shadow-lg">Register Now</button>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
