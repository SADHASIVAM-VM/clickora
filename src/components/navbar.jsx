import { UserIcon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { useContexts } from "../config/contextApp";
import { logout } from "../lib/authService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Navbar() {
  const {user} = useContexts();
  const isUser = localStorage.getItem("isLoggedIn")
  const navigate = useNavigate()

    const handleLogout = async()=>{
    await logout();
    localStorage.removeItem('isLoggedIn')
    toast.success("Signed off..")
  }
  return (
    <nav className="flex items-center justify-between px-16 py-6">
          <div className="flex items-center space-x-1">
           <img src="/logoo.png" alt=""  className="w-8"/>
            <span className="text-xl font-semibold text-gray-800">Ora.</span>
          </div>
          
          <div className="flex items-center space-x-8 text-gray-700">
            <a href="/about" className="hover:text-gray-900">About</a>
            <a href="/" className="hover:text-gray-900">Pricing</a>
            <a href="contact" className="hover:text-gray-900">Contact</a>
          </div>
          
          <p className="text-white bg-black p-2 rounded-xl hover:text-gray-200 text-xs font-medium">
            {
              isUser || user != null ? <span onClick={()=>handleLogout()}>sign out</span>: <span onClick={()=> navigate('/login')}>sign in</span>
            }
          </p>
        </nav>

  );
}
