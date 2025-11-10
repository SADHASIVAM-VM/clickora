export default function Footer() {
  return (
    <footer className="min-w-[90vh] rounded-xl bg-gradient-to-r m-5 from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        
        {/* Logo or Name */}
        <h2 className="text-xl flex gap-2 items-center font-semibold text-white">
          <img src="/logoo.png" className="w-8" alt="" />ora.
        </h2>

        {/* Small Tagline */}
        <p className="text-sm text-gray-400">
          Empowering eCommerce sellers with smart AI descriptions ✨
        </p>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Clickora. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
