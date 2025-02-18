import React, { useState } from 'react';
import Bg from './Bg.png';
import Logo from './logo.png';
import Menu from './Menu.png';
import Vector from './Vector.png';
import Slides from './Slides';
import "../../assets/font/Font.css";
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full relative">
      {/* Hero Section with Background */}
      <div className={`container mx-auto min-h-auto bg-cover bg-center relative ${isOpen ? 'blur-sm' : ''}`} style={{ backgroundImage: `url(${Bg})` }}>
        {/* Navbar */}
        <nav className="flex items-center py-4 px-6 justify-between ">
          {/* Logo */}
          <img src={Logo} alt="logo" className="w-32 h-auto lg:w-45 md:w-32 sm:w-24 xs:w-16 xs:h-16" />
          {/* Menu Icon for Small Screens */}
          <button className="lg:hidden xs:absolute right-4 z-50" onClick={() => setIsOpen(!isOpen)}>
            <img src={Menu} alt="menu" className="w-10 h-10 sm:w-8 sm:h-8" />
          </button>

          {/* Menu Items for Large Screens */}
          <ul className="text-white hidden lg:flex justify-center space-x-12 items-center mx-auto text-[14px]" style={{ fontFamily: 'sans-serif' }}>
            <li className='hover:cursor-pointer' onClick={() => scrollToSection('wallet-section')}>WALLET</li>
            <li className='hover:cursor-pointer' onClick={() => scrollToSection('features-section')}>FEATURES</li>
            <li className='hover:cursor-pointer' onClick={() => scrollToSection('build-section')}>BUILD</li>
            <li className='hover:cursor-pointer' onClick={() => scrollToSection('support-section')}>SUPPORT</li>
            <li className='hover:cursor-pointer' onClick={() => scrollToSection('about-section')}>ABOUT</li>
          </ul>

          {/* Download Button for Large Screens */}
          <button
            className="hidden lg:block px-12 py-2 border border-white bg-gradient-to-r from-[#0969E4] to-[#D861E1] rounded-4xl text-white hover:cursor-pointer"
            onClick={() => navigate('/download')}
          >
            Download
          </button>
        </nav>

        {/* Horizontal Line */}
        <hr className="w-full mx-auto border-t-2 border-[rgba(30,58,138,0.205)]" />

        {/* Hero Content */}
        <div className="container mx-auto px-8 mt-32 text-center relative z-10">
          <p className="text-white text-lg mb-6">
            First Ever <span className="text-[#D861E2] font-bold">100% MiCa</span> Compliant Wallet
          </p>

          <div className="space-y-4">
            <h1 className="text-white text-2xl md:text-4xl tracking-wide" style={{ fontFamily: 'Dunbar Tall' }}>True crypto ownership</h1>
            <h2 className="text-white text-2xl md:text-4xl tracking-wide relative z-10" style={{ fontFamily: 'Dunbar Tall' }}>
              Powerful Web3 experiences
              {/* Vector Image as a Line Below the Text */}
              <div className="absolute left-3/5 transform -translate-x-1/2 z-0">
                <img src={Vector} alt="Line" className="w-[59%] mx-14 " />
              </div>
            </h2>
          </div>

          <p className="text-white/80 max-w-4xl mx-auto mt-12 sm:text-[12px] md:text-[16px] leading-relaxed">
            The World's 1st ICO Platform That Offers Rewards and The platform <br />
            helps investors to make easy to purchase and sell their tokens.
          </p>
        </div>
        <Slides />
      </div>

      {/* Slides Section */}
      
    
      {/* Overlay to close menu when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default Hero;
