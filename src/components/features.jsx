import { motion } from "framer-motion";
import { ClipboardIcon, CheckIcon, PhotoIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useContexts } from "../config/contextApp";
import { Text2Description } from "../features/textToDesc";




export default function FeatureSection() {
  const {generateData} = Text2Description()
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [result, setResult] = useState("");
const {responseData, contentLoading, setContentLoading} =  useContexts();
const [copied, setCopied] = useState(false);



  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const handleGenerate = () => {
    // placeholder for AI description logic
    setContentLoading(true)
    generateData(title)
 
  };

// Copy with options

const handleCopy = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  } catch (err) {
    console.error("Failed to copy:", err);
  }
};

 
  return (
    <section className="py-20 bg-white w-full min-h-[500px] rounded-t-4xl md:rounded-t-[100px] text-black flex flex-col items-center px-6">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-[2fr_2fr] gap-6">
        {/* ===== Image to Description ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
        >
          <div className="flex items-center gap-2 mb-4">
            <PhotoIcon className="h-6 w-6 text-blue-400" />
            <h2 className="text-xl font-semibold">Image to Description</h2>
          </div>

          <label
            htmlFor="file"
            className="flex flex-col justify-center items-center border-2 border-dashed border-gray-500 rounded-xl py-10 cursor-pointer hover:border-blue-400 transition"
          >
            {image ? (
              <img
                src={image}
                alt="preview"
                className="w-48 h-48 object-cover rounded-lg shadow-md"
              />
            ) : (
              <>
                <PhotoIcon className="h-12 w-12 text-gray-400 mb-3" />
                <p className="text-gray-400">Click or drag an image to upload</p>
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
        </motion.div>


        {/* ===== Title to Description & SEO ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="bg-[#f7f7f7] backdrop-blur-lg rounded-2xl p-6 border border-white/20"
        >
          <div className="flex items-center gap-2 mb-4">
            <SparklesIcon className="h-6 w-6 text-yellow-400" />
            <h2 className="text-xl text-black font-semibold">Title to Description & SEO</h2>
          </div>

          <input
            type="text"
            placeholder="Enter product title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 rounded-lg  border border-gray-500 text-black focus:outline-none focus:border-blue-400"
          />

          <button
            onClick={handleGenerate}
            className="mt-4 min-w-34 p-2 flex justify-self-end text-sm  rounded-lg bg-blue-600 hover:bg-blue-500 transition text-white"
          >
            Generate Description
          </button>

        {!contentLoading ?
        responseData && (
        <div className="mt-6 p-4 bg-white rounded-xl ">
          <h2 className="text-xl to-black font-bold mb-2">{responseData.title}</h2>
          <div className="flex justify-between items-center px-2">

          <p className="my-2">description :</p>
          
      <button
        onClick={() => handleCopy(responseData.description)}
        className="flex items-center gap-1 text-xs bg-gray-100 text-black p-1 rounded-md transition-all duration-200"
      >
        {copied ? (
          <>
            <CheckIcon className="size-4 text-black" />
          
          </>
        ) : (
          <>
            <ClipboardIcon className="size-4 text-black" />
           
          </>
        )}
      </button>
          
          </div>
       
          <p className="text-gray-600 mb-3" >{responseData.description}</p>
          <p className="my-3">tags:</p>
          <div className="flex flex-wrap gap-2">
            
            {responseData.seo?.map((tag, i) => (
              <p
                key={i}
                className="bg-indigo-200 text-blue-800 text-xs px-2 py-1 rounded-full"
              >
                #{tag}
              </p>
            ))}
          </div>
        </div>
      ) : <div className="loader justify-self-center m-10"></div>}
      
        </motion.div>
      </div>
    </section>
  );
}
