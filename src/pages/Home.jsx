import React, { useState } from 'react';
import { TrendingUp, ChevronRight, Handshake, SparklesIcon } from 'lucide-react';
import { motion } from "framer-motion";
import Navbar from '../components/navbar';
import { useNavigate } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/24/outline';
export default function Homex() {
  const [isConnected, setIsConnected] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[url('/h1.jpg')] bg-no-repeat bg-linear-to-br from-gray-200 via-gray-100 to-gray-200 relative overflow-hidden">
      {/* Decorative curved backgrounds */}
      <div className="absolute top-0 left-0 w-96 h-full bg-linear-to-br from-gray-300/40 to-transparent rounded-r-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-96 h-full bg-linear-to-bl from-gray-300/40 to-transparent rounded-l-full blur-3xl"></div>
      
      <div className="relative z-10">
      <Navbar/>

        {/* Hero Section */}
        <div className="text-center px-8 mt-16 mb-12">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-medium  text-gray-900 mb-3 md:mb-6">
           Turn Your Products Into <br />
        <span className="text-[#0f0f0f] font-normal "> Click-Worthy Stories</span></h1>
          <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-gray-800 text-sm md:text-lg max-w-2xl mx-auto"
      >
        Transform your eCommerce product copy in seconds. Generate at scale, stay on-brand, and capture visibility in both search engines and AI-driven discovery.
      </motion.p>
          {/* Progress dots */}
          <div className="flex items-center justify-center space-x-4 mt-12">
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <div className="w-8 h-0.5 bg-gray-300"></div>
           <div className="border-2 border-gray-300 rounded-full p-1">
             <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
           </div>
            <div className="w-8 h-0.5 bg-gray-300"></div>
            <p className="w- h-8 border rounded-lg flex items-center justify-center p-2 text-xs text-gray-500 bg-green-100">
           <span className='hidden md:flex'>Helping Indian E-com Sellers</span> ⚡
            </p>
            <div className="w-8 h-0.5 bg-gray-300"></div>
             <div className="border-2 border-gray-300 rounded-full p-1">
             <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
           </div>
            <div className="w-8 h-0.5 bg-gray-300"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          </div>
        </div>

        {/* Main Content Cards */}
       <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 place-content-center items-center">
    
    {/* AI Title & Description Card */}
    <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 h-[350px]  hover:shadow-2xl transition-all duration-300">
      <h2 className="text-md md:text-xl font-semibold mb-4 bg-linear-to-r from-red-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        AI Title & Description
      </h2>
      <p className="text-gray-600 mb-6 text-sm">
        Instantly generate catchy titles and professional product descriptions for your e-commerce listings using Clickora’s advanced AI engine.
      </p>
      
      <div className="relative h-20">
        <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
          <path
            d="M 0 80 Q 30 85, 60 75 T 120 65 T 180 45 T 240 30 T 300 20"
            fill="none"
            stroke="url(#grad1)"
            strokeWidth="3"
            className="animate-pulse"
          />
          <defs>
            <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <button className="md:mt-8 mt-4 text-xs md:text-sm bg-gradient-to-r  from-indigo-600 via-purple-500 to-pink-500 text-white font-semibold px-4 py-2 rounded-full shadow hover:scale-105 transition-transform" onClick={()=> navigate('/generate')}>
        Try It Now
      </button>
    </div>

    {/* Image-Based Generator */}
    <div className="bg-white/80 backdrop-blur-lg   rounded-3xl p-8 shadow-lg  h-[450px] bg-linear-to-b from-blue-100 to-green-100 flex flex-col items-center justify-center hover:shadow-2xl transition-all duration-300">
    
      <h2 className="text-xl md:text-3xl font-semibold mb-4 z-10 bg-gradient-to-r from-black via-50% to-black/10 bg-clip-text text-transparent">
        Image-Based Text Generator
      </h2>
      <p className="text-gray-600 text-sm md:text-md text-center mb-6">
        Upload any product image and let Clickora’s AI analyze and craft optimized content for your store — title, description, and SEO in seconds.
      </p>

      <div className="flex flex-col items-center space-y-4">
        <div className="w-18 h-18 bg-gradient-to-r from-yellow-200 via-red-100 animate-bounce to-blue-100 rounded-full flex items-center justify-center text-black font-bold text-xl md:text-2xl shadow-lg">
          AI
        </div>
        <p className="text-gray-500 text-[10px] border  bg-white px-2 rounded-2xl">Smart Visual Recognition</p>
      </div>

      <button className="mt-8 text-xs md:text-sm bg-gradient-to-r from-amber-500 via-30% to-amber-500 text-white font-semibold px-6 py-3 rounded-full shadow hover:scale-105 transition-transform" onClick={()=> navigate('/generate')}>
        Upload Image
      </button>
    </div>

    {/* SEO & Tag Optimizer */}
    <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 h-[400px] hover:shadow-2xl transition-all duration-300">
      <h2 className="text-md md:text-xl font-semibold mb-4 bg-linear-to-r from-orange-400 via-rose-500 to-red-600 bg-clip-text text-transparent">
        SEO & Tag Optimizer
      </h2>
      <p className="text-gray-600 mb-6 text-sm">
        Clickora boosts your reach with AI-driven SEO keywords and local-friendly tags for Indian e-commerce platforms like Amazon, Flipkart, and Meesho.
      </p>

      <div className="space-y-2">
        <p className="border border-gray-400 rounded-2xl p-4 text-xs text-gray-700 shadow-sm">
          <strong>AI Suggestion:</strong> Stylish Cotton Kurti for Women 
        </p>
        <p className="border border-gray-400 rounded-2xl p-4 text-xs text-gray-700 shadow-sm">
          <strong>SEO Tags:</strong> #kurti #women #affordablewear
        </p>
      </div>

      <button className="mt-2 text-xs md:text-sm w-full bg-gradient-to-r from-orange-400 via-rose-500 to-red-600 text-white font-semibold px-6 py-3 rounded-full shadow hover:scale-105 transition-transform" onClick={()=> navigate('/generate')}>
        Optimize My Listing
      </button>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}