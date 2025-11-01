"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Download,
  Edit3,
  FileText,
  PenTool,
  Shield,
  Upload,
  Zap,
  ArrowRight,
  Check,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Feature = () => {
  const features = [
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Generate PDF",
      desc: "Instantly create professional PDFs from any document format",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Edit3 className="w-5 h-5" />,
      title: "Edit PDF",
      desc: "Modify text, images, and layouts seamlessly in your PDFs",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <PenTool className="w-5 h-5" />,
      title: "Sign PDF",
      desc: "Add legally binding digital signatures in seconds",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Download className="w-5 h-5" />,
      title: "Convert Files",
      desc: "Convert between PDF, Word, Excel, and more instantly",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: <Upload className="w-5 h-5" />,
      title: "Merge & Split",
      desc: "Combine or extract pages from multiple PDF files easily",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Secure PDFs",
      desc: "Protect your documents with passwords and encryption",
      gradient: "from-gray-700 to-gray-900",
    },
  ];

  const benefits = [
    "No software installation required",
    "Works on any device and browser",
    "Bank-level security encryption",
    "Files automatically deleted after 24 hours",
    "Unlimited file size support",
    "Batch processing available",
  ];

  return (
    <>
      {/* Features Section */}
      <section className="relative bg-linear-to-b from-white to-gray-50 py-16 lg:py-20">
        {/* Background Blobs */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold bg-linear-to-br from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4"
            >
              Powerful PDF Tools
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Everything you need to manage, edit, and protect your documents —
              all in one secure, user-friendly platform.
            </motion.p>
          </div>

          {/* Features Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                custom={i}
                className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-400 border border-gray-100 overflow-hidden"
                whileHover={{ y: -6, scale: 1.01 }}
              >
                <div
                  className={`absolute inset-0 bg-linear-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
                <div
                  className={`relative inline-flex items-center justify-center w-12 h-12 rounded-xl bg-linear-to-br ${feature.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}
                >
                  {feature.icon}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>

                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                  className={`h-0.5 bg-linear-to-r ${feature.gradient} rounded-full mt-3`}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mt-14 lg:mt-20"
          >
            <Button
              size="lg"
              className="relative bg-linear-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white px-6 py-3 text-base font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              Start Converting Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <p className="text-gray-500 text-xs mt-3">
              No credit card required • Free forever plan
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-linear-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-medium mb-4">
              <Check className="w-3.5 h-3.5" />
              Why choose us
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
              Built for{" "}
              <span className="bg-[#ae2012] bg-clip-text text-transparent">
                Performance
              </span>{" "}
              and{" "}
              <span className="bg-[#ae2012] bg-clip-text text-transparent">
                Simplicity
              </span>
            </h2>

            <p className="text-base text-gray-600 mb-8 leading-relaxed">
              We’ve built the most comprehensive and user-friendly PDF toolkit
              available online. Experience the difference with
              enterprise-grade features made accessible to everyone.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-center space-x-3 p-3 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="shrink-0 w-8 h-8 bg-linear-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-800 text-sm font-medium">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-28 h-28 bg-linear-to-br from-blue-500 to-cyan-500 rounded-full -translate-y-12 translate-x-12 opacity-10" />
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-linear-to-br from-purple-500 to-pink-500 rounded-full translate-y-10 -translate-x-10 opacity-10" />

            <div className="relative text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-[#ae2012] to-red-600 rounded-2xl mb-6">
                <FileText className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Ready to Get Started?
              </h3>

              <div className="space-y-3">
                <Button
                  size="lg"
                  className="w-full rounded-xl shadow-md hover:shadow-lg transition-all duration-300 py-5 text-sm font-medium"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Try It Free Now
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full py-5 text-sm font-medium"
                >
                  <Users className="w-4 h-4 mr-2" />
                  View Live Demo
                </Button>
              </div>

              <p className="text-gray-500 text-xs mt-5 leading-relaxed">
                ✓ No installation required • ✓ 100% secure • ✓ Free forever
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Feature;
