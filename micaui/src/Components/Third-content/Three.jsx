import React from 'react'
import Graphic from './Graphic.png'
import First from './First.png';
import Second from './second.png';
import Third from './third.png';
import Fourth from './fourth.png';

function Three() {
  return (
    <div className='flex flex-col lg:flex-row gap-10 lg:gap-20 justify-center items-center pb-8 px-6'>
      {/* Shield on the left side */}
      <div className='w-68 lg:w-90 xl:w-130 h-auto'>
        <img src={Graphic} alt="Graphic" className="w-full" />
      </div>

      {/* Right side */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h1 className='text-white text-3xl sm:text-4xl' style={{ fontFamily: 'Dunbar Tall' }}>
          The most trusted<br />
          <span className='text-transparent bg-gradient-to-r from-[#D261E1] to-[#0355FF] bg-clip-text'>crypto currency wallet</span>
        </h1>
        <p className='text-white text-[14px] sm:text-[16px] font-light py-4 sm:py-6'>
          We're the most trusted place for people and businesses to buy, sell, and manage crypto.
        </p>

        <div className="grid grid-cols-1 gap-6">
          {[{ img: First, title: "The largest public crypto company", desc: "We operate with financial transparency." },
          { img: Second, title: "Your assets are protected", desc: "Our risk management measures are designed to protect your assets." },
          { img: Third, title: "Get the help you need, when you need it", desc: "You can always contact our support team for quick solutions to common problems." },
          { img: Fourth, title: "Industry best practices", desc: "MiCA Wallet supports a variety of the most popular digital currencies." }
          ].map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-center sm:items-start gap-4 border-b-2 border-[rgba(30,58,138,0.205)] pb-4 last:border-none">
              <div className="p-2">
                <img src={item.img} alt={item.title} className="w-10 h-10" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                <p className="text-white font-light text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Three;
