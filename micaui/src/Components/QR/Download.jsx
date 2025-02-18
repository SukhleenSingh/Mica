import React from "react";
import QRCodeImage from "./QR.png";
import GooglePlay from "./PlayStore.png";
import AppStore from "./AppStore.png";
import "../../assets/font/Font.css";
import { useNavigate } from "react-router-dom";


function Download({ onClose }) {
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-2xl p-6 md:p-8 w-[90%] max-w-sm text-center relative">
        {/* Close Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full text-xl font-bold text-gray-700 bg-gray-200 hover:bg-gray-300 transition"
        >
          ×
        </button>

        {/* Title */}
        <h2 className="text-lg md:text-xl font-semibold bg-gradient-to-r from-[#712694] to-[#0355FF] text-transparent bg-clip-text">
          Install the <span className=" font-bold">MiCaWallet.com</span> Wallet
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm mt-2 px-2">
          Scan this QR code with your device’s camera, then follow the instructions to download the app.
        </p>

        {/* Store Buttons */}
        <div className="flex justify-center gap-6 mt-4 bg-[#073F9C] p-2 rounded-2xl">
          <img src={GooglePlay} alt="Google Play" className="h-10 cursor-pointer" />
          <img src={AppStore} alt="App Store" className="h-10 cursor-pointer " />
        </div>

        {/* QR Code */}
        <div className="flex justify-center mt-4">
          <img src={QRCodeImage} alt="QR Code" className="w-32 h-32" />
        </div>
      </div>
    </div>
  );
}

export default Download;
