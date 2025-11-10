// src/components/AboutSection.jsx
import { motion } from "framer-motion";
import {
  SparklesIcon,
  EyeIcon,
  FlagIcon,
  LightBulbIcon,
  HeartIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import Navbar from "../components/navbar";

export default function AboutSection() {
  return (
    <>
      <Navbar/>
    <section className="relative py-20 bg-white text-black overflow-hidden">
      {/* Decorative radial glow */}
    
      <div className="absolute -left-52 -top-40 w-[520px] h-[520px] bg-gradient-to-tr from-indigo-600/30 via-pink-500/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-xl font-extrabold  leading-tight ">
            About <span className="bg-clip-text text-3xl text-transparent bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-300">Clickora</span>
          </h2>
          <p className="mt-4 text-gray-800 text-lg">
            AI-crafted titles, descriptions and SEO built for e-commerce sellers. Create click-worthy listings in seconds — tailored for Indian marketplaces like Meesho, Flipkart, and Amazon.in.
          </p>
        </motion.div>

        {/* Grid: About + Vision/Mission + Core Values */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* About Card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="bg-white/6 backdrop-blur rounded-2xl p-6 border border-white/10 shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-500 to-pink-500 flex items-center justify-center">
                <SparklesIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">What is Clickora?</h3>
            </div>
            <p className="text-gray-800">
              Clickora is an AI-first content assistant that helps sellers create professional product titles, descriptions and SEO tags — fast. Built for small & medium sellers who want higher clicks and better conversions without hiring writers.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-green-400 mt-1" />
                <span className="text-gray-600">Fast, ready-to-use product copy</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-green-400 mt-1" />
                <span className="text-gray-600">Localised tone & keywords for Indian marketplaces</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-green-400 mt-1" />
                <span className="text-gray-600">Simple UI — no learning curve</span>
              </li>
            </ul>
          </motion.div>

          {/* Vision & Mission (stacked) */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/8 shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-cyan-400 to-indigo-500 flex items-center justify-center">
                  <EyeIcon className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold">Vision</h4>
              </div>
              <p className="text-gray-600">
                To be the go-to AI companion for every seller — enabling anyone to create brand-quality product listings that resonate with local customers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/8 shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-amber-400 to-red-400 flex items-center justify-center">
                  <FlagIcon className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold">Mission</h4>
              </div>
              <p className="text-gray-600">
                Make high-quality, SEO-optimised product content accessible and affordable — saving sellers time and helping them increase discoverability and sales.
              </p>
            </motion.div>
          </div>

          {/* Core Values Card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/6 backdrop-blur rounded-2xl p-6 border border-white/10 shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-rose-400 to-pink-500 flex items-center justify-center">
                <LightBulbIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Core Values</h3>
            </div>

            <div className="grid gap-3">
              <div className="flex items-start gap-3">
                <HeartIcon className="w-6 h-6 text-pink-400 mt-1" />
                <div>
                  <div className="font-medium">Customer Obsession</div>
                  <p className="text-gray-600 text-sm">We build features that actually help sellers sell more.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <SparklesIcon className="w-6 h-6 text-indigo-400 mt-1" />
                <div>
                  <div className="font-medium">Simplicity</div>
                  <p className="text-gray-600 text-sm">Powerful AI, zero complexity for users.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-green-400 mt-1" />
                <div>
                  <div className="font-medium">Local-first</div>
                  <p className="text-gray-600 text-sm">Tone, keywords and examples built for Indian marketplaces.</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="#"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-full text-sm bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 text-white font-semibold shadow hover:scale-105 transition-transform"
              >
                Join Early Access
              </a>
            </div>
          </motion.div>
        </div>

        {/* Footer small note */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-12 text-center text-gray-600"
        >
          Built with ❤️ for sellers. Want early access or to partner? <a className="text-indigo-400 underline" href="#">Get in touch</a>.
        </motion.div>
      </div>
    </section>
    </>
  );
}
