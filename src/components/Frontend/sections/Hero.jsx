import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <span className="bg-teal-500/20 text-teal-400 px-4 py-1 rounded-full text-sm">
            Empowering Your Wealth
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mt-6 leading-tight">
            Smart Investing for a{" "}
            <span className="text-teal-400">Brighter Future</span>
          </h1>

          <p className="text-slate-400 mt-6 text-lg">
            We simplify complex investments to help you grow your portfolio
            with transparency, expert guidance, and proven strategies.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-teal-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-teal-600 transition">
              Start Investing
            </button>

            <button className="border border-slate-600 px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition">
              View Products
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <div className="absolute w-full h-[400px] bg-gradient-to-tr from-teal-500 to-blue-600 rounded-3xl opacity-20 blur-3xl"></div>

          <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl">
            <div className="flex justify-between mb-4">
              <span>Assets Growth</span>
              <span className="text-teal-400">+24%</span>
            </div>

            <div className="h-40 bg-white/5 rounded-2xl flex items-end p-4 gap-2">
              {[40, 70, 50, 90, 60, 80].map((h, i) => (
                <div
                  key={i}
                  className="w-full bg-teal-500 rounded-t-lg"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;