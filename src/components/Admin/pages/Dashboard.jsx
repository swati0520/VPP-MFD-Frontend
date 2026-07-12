import { motion } from "framer-motion";
import {
  TrendingUp,
  Briefcase,
  Target,
  MessageSquare,
  ArrowUpRight,
  Clock,
} from "lucide-react";

const stats = [
  { title: "Website Visitors", val: "12,540", icon: TrendingUp, growth: "+18% This Month" },
  { title: "Active Projects", val: "48", icon: Briefcase, growth: "+6 New Projects" },
  { title: "Conversion Rate", val: "3.2%", icon: Target, growth: "+0.8% Growth" },
  { title: "Client Messages", val: "128", icon: MessageSquare, growth: "15 Pending" },
];

const activities = [
  "New user registered successfully.",
  "Homepage content updated.",
  "New project added to portfolio.",
  "Client submitted a contact form.",
  "Website backup completed.",
];

const Dashboard = () => (
  <div className="space-y-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl bg-gradient-to-r from-sky-500 via-blue-200 to-indigo-600 p-8 text-white shadow-xl"
    >
      <h1 className="text-3xl font-bold">Welcome Back 👋</h1>
      <p className="mt-2 max-w-2xl text-blue-100">
        Monitor your website performance, manage content, and keep everything up to date from one beautiful dashboard.
      </p>
      <button type="button" className="mt-6 rounded-xl bg-white px-5 py-3 font-semibold text-blue-600 transition hover:scale-105">
        Explore Dashboard
      </button>
    </motion.div>

    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.title}
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm dark:border-[#3B2F5C] dark:bg-[#1B1B2B]"
          >
            <div className="flex justify-between">
              <div>
                <p className="text-xs font-semibold uppercase text-gray-500">{item.title}</p>
                <h2 className="mt-2 text-3xl font-bold text-[#4A044E] dark:text-white">{item.val}</h2>
                <div className="mt-3 flex items-center gap-1 text-sm font-medium text-green-500">
                  <ArrowUpRight size={15} /> {item.growth}
                </div>
              </div>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 dark:bg-sky-900">
                <Icon size={32} className="text-sky-600 dark:text-sky-300" />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>

    <div className="grid gap-6 lg:grid-cols-2">
      <motion.div whileHover={{ y: -4 }} className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm dark:border-[#3B2F5C] dark:bg-[#1B1B2B]">
        <div className="mb-5 flex items-center gap-2">
          <Clock size={28} className="text-sky-500" />
          <h2 className="text-xl font-bold dark:text-white">Recent Activity</h2>
        </div>
        <div className="space-y-4">
          {activities.map((item) => (
            <div key={item} className="flex items-start gap-3 border-b pb-3 last:border-none">
              <div className="mt-2 h-3 w-3 rounded-full bg-sky-500" />
              <div>
                <p className="font-medium dark:text-white">{item}</p>
                <span className="text-xs text-gray-500">Just now</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div whileHover={{ y: -4 }} className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm dark:border-[#3B2F5C] dark:bg-[#1B1B2B]">
        <h2 className="mb-6 text-xl font-bold dark:text-white">Quick Overview</h2>
        <div className="space-y-5">
          {[
            ["Website Progress", "85%", "w-[85%] bg-sky-500"],
            ["Content Updated", "70%", "w-[70%] bg-pink-500"],
            ["SEO Score", "92%", "w-[92%] bg-green-500"],
          ].map(([label, value, barClass]) => (
            <div key={label}>
              <div className="mb-2 flex justify-between text-sm">
                <span className="dark:text-white">{label}</span><span>{value}</span>
              </div>
              <div className="h-2 rounded-full bg-gray-200">
                <div className={`h-2 rounded-full ${barClass}`} />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
);

export default Dashboard;
