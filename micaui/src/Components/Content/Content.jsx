import React from 'react';
import Shield from './shiled.png';
import First from './First.png';
import Second from './second.png';
import Third from './third.png';
import Fourth from './fourth.png';

function Content() {
  return (
    <div className='flex flex-col lg:flex-row gap-6 md:gap-12 justify-center items-center pt-10 md:pt-28 px-6'>
      {/* Shield on the left side */}
      <div className='w-68 lg:w-90 xl:w-130 h-auto'>
        <img src={Shield} alt='Shield' className='w-full' />
      </div>

      {/* Right side */}
      <div className='text-center md:text-left'>
        <h1 className='text-white text-3xl md:text-4xl lg:text-5xl' style={{ fontFamily: 'Dunbar Tall' }}>
          Stay private <span className='text-transparent bg-gradient-to-r from-[#D261E1] to-[#0355FF] bg-clip-text'>and secure</span>
        </h1>
        <p className='text-white text-sm md:text-[16px] font-light py-4 md:py-6'>
          Rest easy knowing that our privacy and security measures keep you in control of <br className='hidden md:block' />
          your data and digital assets, while also keeping them safe.
        </p>

        <div className='grid grid-cols-1 gap-6 md:gap-8'>
          {[
            { img: First, title: 'True ownership of your crypto assets', desc: 'We secure your wallet, but don\'t control or have access to your private keys or secret phrase - only you do.' },
            { img: Second, title: 'Verify Wallet', desc: 'We don\'t track any personal information, including your IP address or balances.' },
            { img: Third, title: 'Multi Tasking', desc: 'Use our Encrypted Cloud Backup for increased wallet security.' },
            { img: Fourth, title: 'Proactive alerts for risky transactions', desc: 'Stay safe with alerts for risky address and dApp connections.' }
          ].map((item, index) => (
            <div key={index} className='flex flex-col md:flex-row items-center md:items-start gap-4' style={index < 3 ? { borderBottom: '2px solid rgba(30, 58, 138, 0.205)' } : {}}>
              <div className='p-2'>
                <img src={item.img} alt={item.title} className='w-8 h-8 md:w-10 md:h-10' />
              </div>
              <div className='text-center md:text-left'>
                <h3 className='text-white font-bold mb-2'>{item.title}</h3>
                <p className='text-white font-light text-sm pb-2'>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
