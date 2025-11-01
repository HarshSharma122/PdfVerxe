"use client";

import React from "react";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <section className="relative py-24 bg-linear-to-b from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-linear-to-br from-blue-100 via-indigo-50 to-transparent blur-3xl opacity-40 rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-sm md:text-base text-gray-500 font-light max-w-lg mx-auto">
            Start free and upgrade when you're ready. No credit card required.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Free Plan */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white rounded-2xl border border-gray-200 p-10 hover:shadow-lg transition-all duration-300 group relative"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                Free Plan
              </h3>
              <p className="text-sm text-gray-500 font-light">
                Perfect for getting started
              </p>
            </div>

            <div className="mb-10">
              <h4 className="text-5xl font-light text-gray-900 mb-1">$0</h4>
              <p className="text-xs text-gray-400">per month</p>
            </div>

            <ul className="space-y-3.5 mb-10 text-left">
              {[
                "Unlimited PDF creation",
                "Unlimited PDF editing",
                "Merge & compress files",
                "Convert Word ↔ PDF",
                "Export with watermark",
                "No signup required",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center text-sm text-gray-600"
                >
                  <span className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mr-3 text-xs text-gray-600 group-hover:bg-gray-200 transition-colors">
                    ✓
                  </span>
                  {item}
                </li>
              ))}

              {["AI summary features", "E-sign & instant sharing"].map(
                (item, i) => (
                  <li
                    key={i}
                    className="flex items-center text-sm text-gray-400"
                  >
                    <span className="w-5 h-5 bg-gray-50 rounded-full flex items-center justify-center mr-3 text-xs">
                      ✗
                    </span>
                    {item}
                  </li>
                )
              )}
            </ul>

            <button className="w-full py-3.5 rounded-xl border border-gray-300 text-gray-800 text-sm font-medium hover:bg-gray-100 hover:border-gray-400 transition-all duration-300 tracking-wide">
              Get Started Free
            </button>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 180 }}
            className="relative bg-linear-to-br from-gray-900 via-gray-800 to-black text-white rounded-2xl p-10 shadow-2xl overflow-hidden group"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-linear-to-tr from-indigo-500/20 via-transparent to-transparent opacity-60 pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-block bg-white/10 px-3 py-1 rounded-full text-xs font-medium tracking-wide mb-4 border border-white/10 backdrop-blur-sm">
                MOST POPULAR
              </div>

              <h3 className="text-2xl font-semibold mb-2">Pro Plan</h3>
              <p className="text-sm text-gray-300 font-light">
                For professionals & power users
              </p>

              <div className="mt-8 mb-10">
                <h4 className="text-5xl font-light mb-1">$5</h4>
                <p className="text-xs text-gray-400">per month</p>
              </div>

              <ul className="space-y-3.5 mb-10 text-left">
                {[
                  "Unlimited PDF creation",
                  "Unlimited PDF editing",
                  "Remove watermark",
                  "5 AI summaries per day",
                  "Convert multiple formats",
                  "E-sign & instant sharing",
                  "Priority support",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center text-sm text-gray-100"
                  >
                    <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center mr-3 text-xs group-hover:bg-white/30 transition-colors">
                      →
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ y: -2 }}
                className="w-full py-3.5 rounded-xl bg-white text-gray-900 text-sm font-semibold hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg tracking-wide"
              >
                Upgrade to Pro — $5/month
            </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-14 text-center">
          <p className="text-xs text-gray-500 font-light tracking-wide">
            All plans include basic security • Cancel anytime • 30-day money-back guarantee
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
