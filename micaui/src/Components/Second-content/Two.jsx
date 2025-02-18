import React from 'react';
import Mobile from './Mobile.png';

function Twocontent() {
  return (
    <div className='flex flex-col-reverse lg:flex-row gap-10 justify-center items-center px-6  text-center lg:text-left'>

      {/* Left side */}
      <div className='lg:justify-start lg:ml-12'>
        <h1 className='text-white text-3xl lg:text-4xl' style={{ fontFamily: 'Dunbar Tall' }}>
          Simple. <span className='text-transparent bg-gradient-to-r from-[#D261E1] to-[#0355FF] bg-clip-text'>Seamless.</span>
        </h1>
        <p className='text-white text-[14px] lg:text-[16px] font-light py-4'>
          Enjoy a smooth mobile app and desktop experience with easy-to-use, powerful tools to support your entire Web3 journey.
        </p>
        <p className='text-white text-[16px] font-normal py-2'>Deposit crypto easily from exchanges</p>
        <p className='text-white text-[14px] lg:text-[16px] font-light py-2'>
          Take control of your crypto. Avoid complicated steps and deposit directly to your wallet from exchanges like MiCA Wallet.
        </p>
        <button className='px-6 py-3 my-6 border border-white bg-gradient-to-r from-[#0969E4] to-[#D861E1] rounded-4xl text-white hover:cursor-pointer'>
          Download Mobile App
        </button>
      </div>

      {/* Mobile Image on the Right side */}
      <div className='w-68 lg:w-90 xl:w-130 h-auto'>
        <img src={Mobile} alt='Mobile' className='w-full' />
      </div>


    </div>
  );
}

export default Twocontent;
