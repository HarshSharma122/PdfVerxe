"use client";

import { Button } from "@/components/ui/button";
import { Shield, Users, Zap, ArrowRight, Play } from "lucide-react";
import React from "react";

const HomePage = () => {
  const countUser = 12500;

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="relative z-10 mt-20 flex items-center justify-center flex-col gap-6 px-4 sm:px-6 lg:px-8">
        {/* Main heading with better typography */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-[#000814]">
            All Your PDF Needs in{" "}
            <span className="text-[#ae2012]">One Place</span>
          </h1>
        </div>

        {/* Subtitle with improved styling */}
        <div className="max-w-2xl mx-auto">
          <p className="text-[14px] sm:text-[14px] text-gray-600 text-center leading-relaxed">
            Generate, edit, sign, convert, and manage your PDF documents with
            our powerful online tools. No downloads required - everything works
            right in your browser.
          </p>
        </div>

        {/* CTA section with enhanced buttons */}
        <section className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Button className="">
            Start Converting Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="destructive">
            <Play className="mr-2 w-5 h-5" />
            Watch Demo
          </Button>
        </section>

        {/* Stats section with cards */}
        <section className="mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center space-x-3">
                <div className="p-3 bg-green-100 rounded-xl">
                  <Shield className="w-4 h-4 text-green-600" />
                </div>
                <div className="text-[13px]">
                  <h3 className="font-semibold text-gray-900">100% Secure</h3>
                  <p className="text-sm text-gray-600">Bank-level encryption</p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center space-x-3">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Zap className="w-4 h-4 text-blue-600" />
                </div>
                <div className="text-[13px]">
                  <h3 className="font-semibold text-gray-900">
                    Lightning Fast
                  </h3>
                  <p className="text-sm text-gray-600">Process in seconds</p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center space-x-3">
                <div className="p-3 bg-purple-100 rounded-xl">
                  <Users className="w-4 h-4 text-purple-600" />
                </div>
                <div className="text-[13px]">
                  <h3 className="font-semibold text-gray-900">
                    {countUser.toLocaleString()}+ Users
                  </h3>
                  <p className="text-sm text-gray-600">Trusted worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
