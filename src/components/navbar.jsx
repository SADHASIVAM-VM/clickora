import { UserIcon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <nav className="w-full z-50 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* ===== Left Section (Logo + Menu) ===== */}
        <div className="flex items-center gap-2">
          {/* Logo */}
          <a href="/" className="">
            <img src="/logoo.png" alt="" className="w-8"/>
          </a>

          {/* Menu Items */}
          <div className="hidden md:flex gap-6 text-sm font-medium bg-white/30 p-2 border border-gray-400 text-gray-200  rounded-3xl px-4">
            <a
              href="/"
              className={({ isActive }) =>
                `hover:text-blue-400 transition ${isActive ? "text-blue-400" : ""}`
              }
            >
              Home
            </a>
            <a
              href="/about"
              className={({ isActive }) =>
                `hover:text-blue-400 transition ${isActive ? "text-blue-400" : ""}`
              }
            >
              About
            </a>
            <a
              href="/pricing"
              className={({ isActive }) =>
                `hover:text-blue-400 transition ${isActive ? "text-blue-400" : ""}`
              }
            >
              Pricing
            </a>
          </div>
        </div>

        {/* ===== Right Section (Icons) ===== */}
        <div className="flex items-center gap-2">
          <a href="/login" className="flex items-center gap-1 text-gray-200 hover:text-blue-400 transition">
            
            <span className="hidden sm:inline text-xs">Login</span>
          </a>
          
          <a href="/signup" className="flex items-center  text-black bg-white rounded-md p-1 hover:text-blue-400 transition">
           
            <span className="hidden sm:inline text-xs ">Signup</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
