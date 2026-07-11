import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import Button from "../components/Button";
import Card from "../components/Card";
import heroBanner from "../../../assets/image.png";

const contactData = {
  intro: {
    title: "Have Questions?",
    subtitle: "Don't Hesitate to Contact Us",
    description:
      "We believe in fostering a culture of innovation, collaboration, and growth. We are always on the lookout for passionate, driven, and talented individuals to join our dynamic team. Whether you're an experienced professional or just starting your career, we offer opportunities that allow you to grow and make an impact.",
  },
  details: [
    {
      label: "Kanpur, Uttar Pradesh",
      href: null,
      Icon: MapPin,
    },
    {
      label: "+91 8726007232",
      href: "tel:+918726007232",
      Icon: Phone,
    },
    {
      label: "VPP.MFD@GMAIL.COM",
      href: "mailto:VPP.MFD@GMAIL.COM",
      Icon: Mail,
    },
  ],
  form: {
    title: "Connect with Us",
    successMessage: "Message sent successfully!",
    fields: [
      {
        name: "name",
        type: "text",
        placeholder: "Full Name",
      },
      {
        name: "email",
        type: "email",
        placeholder: "Email",
      },
      {
        name: "mobile",
        type: "tel",
        placeholder: "Mobile",
      },
    ],
    message: {
      name: "message",
      placeholder: "Write your message here...",
    },
    submitLabel: "Send Message",
  },
};

const inputClasses =
  "w-full rounded-2xl border border-slate-800 bg-slate-950 p-4 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-teal-300 focus:ring-2 focus:ring-teal-300/20";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(contactData.form.successMessage);
    setFormData({ name: "", email: "", mobile: "", message: "" });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((previousFormData) => ({
      ...previousFormData,
      [name]: value,
    }));
  };

  return (
    <main className="bg-slate-950 text-slate-100">
      <section className="relative isolate flex min-h-[280px] items-center justify-center overflow-hidden bg-slate-950 px-4 pb-16 pt-36 text-center text-white sm:min-h-[320px] sm:px-6 sm:pb-20 sm:pt-40">
        <div className="absolute inset-0 -z-20 bg-cover bg-center" style={{ backgroundImage: `url(${heroBanner})` }} />
        <div className="absolute inset-0 -z-10 bg-slate-950/70" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950/45 via-slate-950/30 to-teal-950/40" />
        <div className="mx-auto max-w-4xl">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Contact Us</motion.h1>
          <motion.nav initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.08 }} aria-label="Breadcrumb" className="mt-5 flex items-center justify-center gap-2 text-sm font-semibold text-slate-200 sm:text-base">
            <Link to="/" className="transition hover:text-teal-300">Home</Link><span className="text-teal-300" aria-hidden="true">&gt;</span><span className="text-teal-300">Contact Us</span>
          </motion.nav>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full p-6 sm:p-8">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                {contactData.intro.title}
                <br />
                {contactData.intro.subtitle}
              </h2>
              <p className="mt-5 leading-7 text-slate-300">
                {contactData.intro.description}
              </p>

              <div className="mt-8 space-y-4">
                {contactData.details.map((detail) => {
                  const { Icon } = detail;

                  return detail.href ? (
                    <a
                      key={detail.label}
                      href={detail.href}
                      className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950 p-4 transition hover:border-teal-400/60 hover:text-teal-300"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-500/20 text-teal-300">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-semibold text-slate-100">{detail.label}</span>
                    </a>
                  ) : (
                    <div
                      key={detail.label}
                      className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950 p-4"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-500/20 text-teal-300">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-semibold text-slate-100">{detail.label}</span>
                    </div>
                  );
                })}
              </div>
            </Card>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <Card className="h-full p-6 sm:p-8">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                {contactData.form.title}
              </h2>
              <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
                {contactData.form.fields.map((field) => (
                  <input
                    key={field.name}
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                    className={inputClasses}
                    required
                  />
                ))}
                <textarea
                  name={contactData.form.message.name}
                  placeholder={contactData.form.message.placeholder}
                  value={formData[contactData.form.message.name]}
                  onChange={handleInputChange}
                  className={`${inputClasses} h-36 resize-none`}
                  required
                />
                <Button type="submit" className="w-full justify-center gap-2" showIcon={false}>
                  <Send className="h-4 w-4" />
                  {contactData.form.submitLabel}
                </Button>
              </form>
            </Card>
          </motion.section>
        </div>
      </section>
    </main>
  );
};

export default Contact;
