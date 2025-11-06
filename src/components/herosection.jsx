import { motion } from "framer-motion";


export default function HeroSection() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6">
        <div className=" ">
            <p className="bg-green-100 p-1 px-2 rounded-3xl text-sm">helping Indian E-commerce sellers </p></div>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
      >
        Turn Your Products Into <br />
        <span className="text-[#e4ff75] subTitle"> Click-Worthy Stories</span>
      </motion.h1>
  

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-gray-200 text-lg md:text-lg max-w-2xl"
      >
        Clickora helps online sellers generate powerful titles and
        product descriptions,
        Transform your eCommerce product copy in seconds. Generate at scale, stay on-brand, and capture visibility in both search engines and AI-driven discovery.
      </motion.p>
    </section>
  );
}
