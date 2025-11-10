import React, { useEffect, useState } from "react";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { toast } from "react-toastify";
import {auth} from '../lib/firebase'
import { signUp, login, googleLogin, logout } from "../lib/authService"
import { Navigate, useNavigate } from "react-router-dom";

const baseUrl = import.meta.env.VITE_BASE_URL;

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "customer",
  });
const navigate = useNavigate()
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");




  // Update field values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // LOGIN
  const handleLogin = async () => {
    if (!formData.email || !formData.password)
      return toast.warn("Please fill all fields.");

    setIsLoading(true);
    try {

    const email = formData.email;
    const password = formData.password;

    await login(email, password);
    toast.success("Sucessfully Login");
    localStorage.setItem('isLoggedIn', true);
     navigate('/generate')
    setIsLoading(false);
 
    } catch (err) {
      console.error(err);
      toast.error("Login failed. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // SIGNUP
  const handleSignup = async () => {
    if (!formData.email || !formData.password || !formData.username)
      return toast.warn("Please fill all fields.");

    setIsLoading(true);
   try {
      await signUp(formData.email, formData.password);
      toast.success("Account created successfully!");
    } catch (err) {
      toast.warn(err.message);
    }finally {
      setIsLoading(false);
    }
  };




  return (
    <div className="min-h-screen flex bg-amber-50 items-center justify-center">
   
      <div className="w-full max-w-md   space-y-6 bg-white rounded-3xl  p-5">
          {/* Logo */}
          <div className="mb-4 flex items-center gap-2">
            <div className="w-6 h-6 rounded-sm">
                <img src="/logoo.png" alt="" />
            </div>
            <h1 className="font-semibold text-lg">ClickOra</h1>
          </div>

          {/* Heading */}
          <div>
            <h2 className="text-2xl font-semibold">
              {isLogin ? "Sign in" : "Create account"}
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              {isLogin
                ? "Welcome back! Please enter your details."
                : "Join us to start your ClickOra experience."}
            </p>
          </div>

          {/* Fields */}
          <div className="space-y-4 mt-4">
            {!isLogin && (
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  name="username"
                  placeholder="Full Name"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full h-10 border border-gray-300 rounded-md pl-9 pr-3 text-sm focus:ring-2 focus:ring-black outline-none"
                />
              </div>
            )}

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-10 border border-gray-300 rounded-md pl-9 pr-3 text-sm focus:ring-2 focus:ring-black outline-none"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full h-10 border border-gray-300 rounded-md pl-9 pr-9 text-sm focus:ring-2 focus:ring-black outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Remember Me / Toggle */}
          {isLogin && (
            <div className="flex items-center justify-between text-xs text-gray-600">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-black" /> Remember me
              </label>
              <button className="hover:underline">Forgot Password?</button>
            </div>
          )}

          {/* Button */}
          <button
            onClick={isLogin ? handleLogin : handleSignup}
            disabled={isLoading}
            className="w-full bg-black text-white h-10 rounded-md text-sm font-medium hover:bg-gray-900 transition-colors disabled:opacity-50"
          >
            {isLoading
              ? isLogin
                ? "Signing in..."
                : "Creating account..."
              : isLogin
              ? "Sign In"
              : "Sign Up"}
          </button>

          {/* Switch */}
          <p className="text-center text-xs text-gray-600">
            {isLogin ? (
              <>
                Don’t have an account?{" "}
                <button
                  onClick={() => setIsLogin(false)}
                  className="font-medium text-black hover:underline"
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  onClick={() => setIsLogin(true)}
                  className="font-medium text-black hover:underline"
                >
                  Sign in
                </button>
              </>
            )}
          </p>

          {/* Social Buttons */}
          <div className="flex justify-center gap-3 mt-4">
            <button className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              <img src="/google.svg" alt="Google" className="w-4 h-4" />
            </button>
            <button className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              <img src="/github.svg" alt="GitHub" className="w-4 h-4" />
            </button>
            <button className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              <img src="/facebook.svg" alt="Facebook" className="w-4 h-4" />
            </button>
          </div>
        </div>
    </div>
  );
};

export default AuthPage;
