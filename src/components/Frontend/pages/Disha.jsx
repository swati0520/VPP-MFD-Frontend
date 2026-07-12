import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, User, Calendar, Building } from 'lucide-react';
import { motion } from 'framer-motion';
import Card from '../components/Card';

// Reusable spring-based entrance variant for smooth, non-aggressive motion
const cardEntranceVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 18,
      mass: 0.8,
      delay: 0.1
    }
  }
};

const Disha = () => {
  const [formData, setFormData] = useState({
    fullName: '', dob: '', phone: '', company: '', location: '', jobType: '', message: ''
  });

  const handleSubmit = (event) => event.preventDefault();

  return (
    <main className="min-h-screen bg-slate-950 font-sans text-slate-100 antialiased">
      {/* Hero Section */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-20 sm:px-6 lg:flex-row lg:gap-12 lg:py-24"
      >
        <div className="flex-1 space-y-5">
          <span className="inline-block rounded-full bg-teal-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">VPP MFD PVT LTD</span>
          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">Your Trusted Job Guidance Partner</h1>
          <p className="max-w-2xl leading-7 text-slate-300 sm:text-lg">At VPP MFD PVT LTD, we value the role of independent and experienced traders in driving economic growth. We bridge the gap between your expertise and market demand.</p>
        </div>
        <motion.div
          variants={cardEntranceVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="group relative h-80 w-full flex-1 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-soft transition duration-300 hover:border-teal-400/50 sm:h-96"
        >
          <div className="absolute inset-0 flex scale-100 items-center justify-center bg-gradient-to-tr from-slate-900 via-slate-800 to-teal-950 font-bold text-teal-300 transition-transform duration-500 ease-out group-hover:scale-105">Analytics Dashboard Image</div>
        </motion.div>
      </motion.header>

      {/* Offerings Section */}
      <section className="bg-slate-950 px-4 py-20 sm:px-6 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            variants={cardEntranceVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-soft transition duration-300 ease-in-out hover:-translate-y-1.5 hover:border-teal-400/50 md:p-10"
          >
            <span className="mb-6 inline-block rounded-full bg-teal-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">VPP MFD PVT LTD</span>
            <h2 className="mb-8 text-3xl font-extrabold text-white sm:text-4xl">What We Offer</h2>
            <ul className="space-y-5">
              {[
                "Job Matching for Skilled & Semi-Skilled Workers",
                "Verified Openings from Trusted Companies",
                "Resume Support & Career Counseling",
                "Interview Preparation & Placement Assistance",
                "Specialized Support for Experienced Candidates (10+ yrs)"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-lg leading-7 text-slate-300">
                  <CheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-teal-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            variants={cardEntranceVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="h-96 rounded-3xl border border-slate-800 bg-gradient-to-tr from-slate-900 via-slate-800 to-teal-950 shadow-soft transition duration-300 ease-in-out hover:scale-[1.01] hover:border-teal-400/50 md:h-[32rem]"
          ></motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-950 px-4 py-20 text-center sm:px-6 lg:py-24">
        <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-3xl font-extrabold text-white sm:mb-16 sm:text-4xl lg:text-5xl">Why Choose Us?</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Get assistance in supply chain & raw material sourcing",
            "Opportunity to be listed in verified manufacturer directories",
            "Support for branding, promotions, and lead generation",
            "Discover reliable traders and partners",
            "Digital visibility for your manufacturing firm"
          ].map((text, i) => (
            <motion.div
              key={i}
              variants={cardEntranceVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...cardEntranceVariants.visible.transition, delay: i * 0.05 }}
              className={`group h-48 lg:h-56 ${i === 3 ? 'sm:col-start-1 lg:col-start-1' : ''} ${i === 4 ? 'sm:col-start-2 lg:col-start-2' : ''}`}
            >
              <Card className="flex h-full items-center justify-center bg-slate-900 p-8 text-lg font-semibold leading-7 text-slate-100 transition duration-300 ease-out group-hover:-translate-y-2 group-hover:border-teal-400/50 group-hover:text-teal-300">
                {text}
              </Card>
            </motion.div>
          ))}
        </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 md:grid-cols-12 lg:gap-16">
          <motion.div
            variants={cardEntranceVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="md:col-span-5 space-y-8"
          >
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">Registration Now</h2>
            <div className="group h-72 w-full overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-soft">
               <div className="flex h-full w-full items-center justify-center bg-gradient-to-tr from-slate-900 via-slate-800 to-teal-950 text-slate-400 transition-transform duration-700 ease-in-out group-hover:scale-105">Image/Map</div>
            </div>
          </motion.div>
          <motion.form
            variants={cardEntranceVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-5 rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-soft transition duration-300 hover:border-teal-400/50 md:col-span-7 md:p-10"
          >
            {[
              { label: 'Full Name', id: 'fullName', icon: User, placeholder: 'John Doe' },
              { label: 'Date of Birth', id: 'dob', icon: Calendar, placeholder: 'YYYY-MM-DD' },
              { label: 'Contact Number', id: 'phone', icon: Phone, placeholder: '+91 0000000000' },
              { label: 'Company / Firm Name', id: 'company', icon: Building, placeholder: 'Your Company' },
            ].map(({ label, id, icon: Icon, placeholder }) => (
              <div key={id}>
                <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-slate-300">{label} *</label>
                <div className="relative group/input">
                  <Icon className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-500 transition-colors group-focus-within/input:text-teal-400" />
                  <input id={id} placeholder={placeholder} className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3.5 pl-12 text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-500" type="text" onChange={e => setFormData({...formData, [id]: e.target.value})} />
                </div>
              </div>
            ))}
            <button type="submit" className="w-full rounded-2xl bg-teal-500 py-4 text-lg font-bold text-white shadow-sm shadow-teal-900/10 transition duration-300 hover:bg-teal-600 hover:shadow-lg active:scale-[0.99]">Register Now</button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 px-4 pb-8 pt-16 text-slate-400 sm:px-6">
        <div className="mx-auto mb-12 grid max-w-7xl gap-12 md:grid-cols-3">
          <div className="space-y-4">
            <div className="text-3xl font-extrabold tracking-tight text-white">VPP MFD</div>
            <p className="max-w-sm text-base leading-7 text-slate-400">Work in an environment that encourages creativity, new ideas, and continuous improvement.</p>
          </div>
          <div className="space-y-5 text-lg">
            <div className="flex items-center gap-3"><MapPin size={20} className="text-teal-400" /> Kanpur, Uttar Pradesh</div>
            <div className="flex items-center gap-3"><Phone size={20} className="text-teal-400" /> +91 8726007232</div>
            <div className="flex items-center gap-3"><Mail size={20} className="text-teal-400" /> VPP.MFD@GMAIL.COM</div>
          </div>
          <div className="space-y-3">
            <h4 className="mb-5 text-xl font-bold tracking-tight text-white">Quick Links</h4>
            {['Home', 'About Us', 'Careers', 'Services', 'Contact Us'].map(l => <div key={l} className="cursor-pointer text-lg transition-colors duration-200 hover:text-teal-300">{l}</div>)}
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-7xl border-t border-slate-800 pt-8 text-center text-sm">Â© 2024 Copyright VPP MFD PVT LTD</div>
      </footer>
    </main>
  );
};

export default Disha;
