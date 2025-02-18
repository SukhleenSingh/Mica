import React from "react";
import App from './App.png'
import Chrome from './Chrome.png'
import Web from './web.png'
import Andriod from './Andriod.png'

const Wallet = () => {
  // Array of download options
  const downloadOptions = [
    {
      id: 1,
      icon: App,
      title: "DOWNLOAD FOR IOS",
      description: "Get the Coinbase Wallet mobile app from the App Store.",
      linkText: "DOWNLOAD NOW →",
    },
    {
      id: 2,
      icon: Andriod,
      title: "DOWNLOAD FOR ANDROID",
      description: "Get the Coinbase Wallet mobile app from Google Play.",
      linkText: "DOWNLOAD NOW →",
    },
    {
      id: 3,
      icon: Chrome,
      title: "DOWNLOAD FOR CHROME",
      description: "Get the Coinbase Wallet extension from the Chrome Web Store.",
      linkText: "DOWNLOAD NOW →",
    },
    {
      id: 4,
      icon: Web,
      title: "GET STARTED ON WEB",
      description: "Create a new Wallet directly from your browser.",
      linkText: "GET STARTED →",
    },
  ];

  return (
    <div className="w-full py-12 text-center">
      {/* Heading Section */}
      <h1 className='text-white text-4xl tracking-wider sm:text-3xl md:text-4xl lg:text-5xl' style={{ fontFamily: 'Dunbar Tall' }}>
        Download <span className='text-transparent bg-gradient-to-r from-[#D261E1] to-[#0355FF] bg-clip-text'>MiCa Wallet</span>
      </h1>

      <p className='text-white text-[16px] font-light py-8 sm:px-8 md:px-16 lg:px-64 mx-4 sm:text-sm md:text-base'>
        MiCa Wallet is accessible as both a mobile app on iOS and Android, and as a browser extension on Chrome and Brave, making it easy to download the MiCa Wallet app across your preferred devices.
      </p>

      {/* Download Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-10 px-8 sm:px-4 md:px-6 lg:px-4">
        {downloadOptions.map((option) => (
          <div key={option.id} className="bg-[#1154C44D] border border-[#1154c4] p-6 rounded-xl text-white shadow-lg hover:scale-105 transition transform duration-300">
            <img src={option.icon} alt={option.title} className="w-12 h-12 mx-auto mb-4" />
            <h3 className="font-medium text-sm sm:text-base">{option.title}</h3>
            <p className="text-xs font-light text-white mt-2">{option.description}</p>
            <a href="#" className="text-cyan-300 mt-4 inline-block font-normal hover:underline text-xs sm:text-sm">
              {option.linkText}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wallet;
