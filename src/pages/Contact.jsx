// src/components/ContactSection.jsx
import { motion } from "framer-motion";
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function ContactSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-indigo-500/30 via-pink-500/20 to-transparent blur-3xl rounded-full -translate-x-1/2 -translate-y-1/3 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            Get in <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-300">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a question, feature request, or partnership idea? We'd love to hear from you.  
            Let’s make Clickora even better together.
          </p>
        </motion.div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <EnvelopeIcon className="w-6 h-6 text-indigo-400 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-200">Email</h4>
                  <p className="text-gray-400 text-sm">support@clickora.ai</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <PhoneIcon className="w-6 h-6 text-pink-400 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-200">Phone</h4>
                  <p className="text-gray-400 text-sm">+91 98765 43210</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPinIcon className="w-6 h-6 text-yellow-400 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-200">Location</h4>
                  <p className="text-gray-400 text-sm">Chennai, Tamil Nadu, India</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <ClockIcon className="w-6 h-6 text-green-400 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-200">Support Hours</h4>
                  <p className="text-gray-400 text-sm">Mon–Sat: 10:00 AM – 7:00 PM IST</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent successfully! (You can integrate backend here.)");
            }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2 text-sm font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-gray-300 mb-2 text-sm font-medium">
                Message
              </label>
              <textarea
                placeholder="Type your message..."
                rows="5"
                className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              ></textarea>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 text-black font-semibold shadow-lg hover:scale-[1.02] transition-transform"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
