import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Mobile from "./Mobilebg.png";
import LoginBg from "./Loginbg.png";
import Logo from "./Logo.png";
import "../../assets/font/Font.css";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", formData);
      setMessage(response.data.message);
      alert("Login Successful!");
      localStorage.setItem("token", response.data.token); // Save JWT token
    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="container mx-auto min-h-screen flex flex-col md:flex-row">
      <div
        className="w-full md:w-1/2 bg-cover bg-center flex items-center px-6 md:px-16 py-10"
        style={{ backgroundImage: `url(${Mobile})`, backgroundColor: "black" }}
      >
        <div className="text-left lg:mt-70 lg:ml-20 space-y-4">
          <p className="text-white text-lg">
            First Ever <span className="text-[#D5007D] font-bold">100% MiCa</span> Compliant Wallet
          </p>
          <h1 className="text-white text-2xl md:text-4xl tracking-wide" style={{ fontFamily: "Dunbar Tall" }}>
            True crypto ownership
          </h1>
          <h2 className="text-white text-2xl md:text-4xl tracking-wide" style={{ fontFamily: "Dunbar Tall" }}>
            Powerful Web3 experiences
          </h2>
          <p className="text-white text-sm md:text-lg font-light">
            The World’s 1st ICO Platform That Offers Rewards and helps investors easily buy and sell their tokens.
          </p>
        </div>
      </div>

      <div
        className="w-full md:w-1/2 bg-cover bg-center flex flex-col justify-center px-6 md:px-20 py-10 "
        style={{ backgroundImage: `url(${LoginBg})` }}
      >
        <div className="flex flex-col justify-center items-center text-center">
          <img src={Logo} alt="Logo" className="w-20 h-auto mb-4" />
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-medium">MiCA Wallet</h1>
          <p className="text-[#D5007D] text-lg">
            First Ever <span className="font-bold">100% MiCa</span> Compliant Wallet
          </p>
        </div>

        <div className="md:mt-0 lg:mt-8 w-full max-w-sm mx-auto">
          <h1 className="text-2xl md:text-3xl font-semibold text-[#000066] mb-6" style={{ fontFamily: "Dunbar Tall" }}>
            Login
          </h1>

          {message && <p className="text-red-500 text-sm">{message}</p>}

          <form className="space-y-6 w-full" onSubmit={handleSubmit}>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 top-3 flex items-center text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>

            <div className="text-right">
              <Link to="/forget-password" className="text-black hover:underline">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-[#0969E4] to-[#D861E1] text-white font-medium rounded-lg hover:opacity-90 transition"
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
