import { Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Careers", path: "/careers" },
  { name: "Gallery", path: "/gallery" },
  { name: "Blogs", path: "/blogs" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 px-4 py-12 text-white sm:px-6">
      <div className="mx-auto max-w-7xl border-t border-slate-700/50 pt-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
          <div className="space-y-3">
            <p className="text-lg font-extrabold text-teal-300">VPP MFD PVT LTD</p>
            <p className="max-w-xl text-sm leading-6 text-slate-400">
              Professional advisory, consulting, and financial guidance designed to help people and businesses make confident decisions.
            </p>
          </div>

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-300">
              Quick Links
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-300">
              {quickLinks.map((link) => (
                <a key={link.name} href={link.path} className="transition hover:text-teal-300">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-300">
              Contact
            </p>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-teal-300" /> Kanpur, Uttar Pradesh
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-teal-300" /> +91 8726007232
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-teal-300" /> VPP.MFD@GMAIL.COM
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-500">
          Copyright 2026 VPP MFD PVT LTD. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
