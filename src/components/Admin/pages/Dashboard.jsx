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
  {
    title: "Website Visitors",
    val: "12,540",
    icon: TrendingUp,
    growth: "+18% This Month",
  },
  {
    title: "Active Projects",
    val: "48",
    icon: Briefcase,
    growth: "+6 New Projects",
  },
  {
    title: "Conversion Rate",
    val: "3.2%",
    icon: Target,
    growth: "+0.8% Growth",
  },
  {
    title: "Client Messages",
    val: "128",
    icon: MessageSquare,
    growth: "15 Pending",
  },
];

const activities = [
  "New user registered successfully.",
  "Homepage content updated.",
  "New project added to portfolio.",
  "Client submitted a contact form.",
  "Website backup completed.",
];

const Dashboard = () => {
  return (
    <div className="space-y-8">

      {/* Welcome Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl bg-gradient-to-r from-sky-500 via-blue-200 to-indigo-600 p-8 text-white shadow-xl"
      >
        <h1 className="text-3xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="mt-2 text-blue-100 max-w-2xl">
          Monitor your website performance, manage content, and keep
          everything up to date from one beautiful dashboard.
        </p>

        <button className="mt-6 px-5 py-3 rounded-xl bg-white text-blue-600 font-semibold hover:scale-105 transition">
          Explore Dashboard
        </button>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6 }}
            className="bg-white dark:bg-[#1B1B2B] rounded-2xl p-6 border border-sky-100 dark:border-[#3B2F5C] shadow-sm"
          >
            <div className="flex justify-between">
              <div>
                <p className="text-xs uppercase text-gray-500 font-semibold">
                  {item.title}
                </p>

                <h2 className="text-3xl font-bold mt-2 text-[#4A044E] dark:text-white">
                  {item.val}
                </h2>

                <div className="flex items-center gap-1 mt-3 text-green-500 text-sm font-medium">
                  <ArrowUpRight size={15} />
                  {item.growth}
                </div>
              </div>

              <div className="w-12 h-12 rounded-xl bg-sky-100 dark:bg-sky-900 flex items-center justify-center">
                <item.icon
                  size={22}
                  className="text-sky-600 dark:text-sky-300"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="grid lg:grid-cols-2 gap-6">

        {/* Recent Activity */}
        <motion.div
          whileHover={{ y: -4 }}
          className="bg-white dark:bg-[#1B1B2B] rounded-2xl p-6 shadow-sm border border-sky-100 dark:border-[#3B2F5C]"
        >
          <div className="flex items-center gap-2 mb-5">
            <Clock className="text-sky-500" />
            <h2 className="text-xl font-bold dark:text-white">
              Recent Activity
            </h2>
          </div>

          <div className="space-y-4">
            {activities.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 border-b pb-3 last:border-none"
              >
                <div className="w-3 h-3 rounded-full bg-sky-500 mt-2"></div>

                <div>
                  <p className="font-medium dark:text-white">
                    {item}
                  </p>

                  <span className="text-xs text-gray-500">
                    Just now
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick Overview */}
        <motion.div
          whileHover={{ y: -4 }}
          className="bg-white dark:bg-[#1B1B2B] rounded-2xl p-6 shadow-sm border border-sky-100 dark:border-[#3B2F5C]"
        >
          <h2 className="text-xl font-bold mb-6 dark:text-white">
            Quick Overview
          </h2>

          <div className="space-y-5">

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="dark:text-white">Website Progress</span>
                <span>85%</span>
              </div>

              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 w-[85%] rounded-full bg-sky-500"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="dark:text-white">Content Updated</span>
                <span>70%</span>
              </div>

              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 w-[70%] rounded-full bg-pink-500"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="dark:text-white">SEO Score</span>
                <span>92%</span>
              </div>

              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 w-[92%] rounded-full bg-green-500"></div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Dashboard;