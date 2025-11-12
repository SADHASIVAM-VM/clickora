import { motion } from "framer-motion";
import { ClipboardIcon, CheckIcon, PhotoIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useContexts } from "../config/contextApp";
import { Text2Description } from "../features/textToDesc";
import { ArrowRightCircle, ArrowRightCircleIcon } from "lucide-react";
import Navbar from "./navbar";

export default function FeatureSection() {
  const { generateData } = Text2Description();
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const { responseData, contentLoading, setContentLoading } = useContexts();
  const [copied, setCopied] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const handleGenerate = () => {
    setCopied(false)
    setContentLoading(true);
    generateData(title);
  };

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <>
    <Navbar/>
    <section className="relative py-24 min-h-[80vh]  bg-gray-100 md:m-5 mt-2 rounded-3xl  text-black flex flex-col items-center px-6 overflow-hidden">
      {/* Background Glow */}
    
      <div className="relative max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 z-10">
        {/* ===== Image to Description ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-8 border b backdrop-blur-lg border-gray-200 bg-white hover:border-blue-500/40 transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-6">
            <PhotoIcon className="h-8 w-8 text-blue-400" />
            <h2 className="text-2xl flex gap-2 items-center font-bold subTitle">
              Image <ArrowRightCircle color="blue"/> Product Description
            </h2>
          </div>

          <label
            htmlFor="file"
            className="flex flex-col justify-center items-center border-2 border-dashed border-gray-600 rounded-2xl py-12 cursor-pointer hover:border-blue-400 hover:bg-white/5 transition"
          >
            {image ? (
              <img
                src={image}
                alt="preview"
                className="w-56 h-56 object-cover rounded-2xl shadow-md"
              />
            ) : (
              <>
                <PhotoIcon className="h-14 w-14 text-gray-400 mb-3" />
                <p className="text-gray-400 font-light">Click or drag image to upload</p>
              </>
            )}
            <input
              id="file"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>

          <button
            className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 font-semibold hover:scale-105 transition-transform shadow-lg"
          >
            Generate From Image (Coming Soon)
          </button>

          <p className="p-5 text-center">Under the process..</p>
        </motion.div>

        {/* ===== Title to Description ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-3xl p-3 md:p-8  bg-white border border-gray-200   transition-all duration-300"
        >
          <div className="flex items-centergap-3 mb-6">
            
            <h2 className="text-xl md:text-2xl font-semibold subTitle text-black flex items-center gap-2">
              Text <ArrowRightCircleIcon color="red"/>  Product Description & SEO
            </h2>
          </div>

          <input
            type="text"
            placeholder="Enter your product title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-4 rounded-lg bg-white/5 border border-gray-600 text-black placeholder-gray-400 focus:outline-none focus:border-pink-400"
          />

          <button
            onClick={handleGenerate}
            className="mt-6 p-3 text-gray-800 text-xs md:text-sm rounded-xl bg-gradient-to-r from-blue-200 via-blue-100 border font-semibold hover:scale-105 transition-transform "
          >
            Generate Description
          </button>

          {/* Result Section */}
          {!contentLoading ? (
            responseData && (
              <div className="mt-8 p-2 md:p-6 bg-gray-50 rounded-2xl border border-white/10 shadow-inner">
                <h3 className="text-lg font-semibold mb-2  text-black/80">
                  {responseData.title}
                </h3>

                <div className="flex justify-between items-center mb-3">
                  <p className="text-gray-400">Description:</p>
                  <button
                    onClick={() => handleCopy(responseData.description + "\n( powered by clickora. )")}
                    className="flex items-center gap-1 text-xs bg-white/10 text-gray-400 px-3 py-1 rounded-lg hover:bg-white/20 transition-all"
                  >
                    {copied ? (
                      <CheckIcon className="w-4 h-4 text-green-400" />
                    ) : (
                      <ClipboardIcon className="w-4 h-4 text-gray-500" />
                    )}
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>

                <p className="text-gray-500 mb-4 leading-relaxed">
                  {responseData.description} <small className="text-gray-400">powered by clickora.</small>
                </p>

                <p className="text-orange-400 font-medium mb-2">SEO Tags:</p>
                <div className="flex flex-wrap gap-2">
                  {responseData.seo?.map((tag, i) => (
                    <motion.p
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full "
                    >
                      #{tag}
                    </motion.p>
                  ))}
                </div>
              </div>
            )
          ) : (
            <div className="text-center mt-10 text-gray-400 animate-pulse">Generating...</div>
          )}
        </motion.div>
      </div>
    </section></>
  );
}
