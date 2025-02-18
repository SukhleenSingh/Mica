import React from 'react';
import Logo from './logo.png';
import FB from './fb.svg';
import Insta from './Insta.svg';
import Tele from './Tele.svg';
import X from './x.svg';

function Footer() {
    return (
        <div className="w-full h-auto py-12 bg-[#02122B] grid place-items-center">
            <img src={Logo} alt="logo" className="block aspect-[3/2] object-cover" />

            <p className="text-white text-[16px] font-light py-8 text-center px-6 sm:px-16  mx-4 sm:mx-20">
                A new way to make the payments easy, reliable, and 100% secure. <br />
                Claritatem itamconse quat. Exerci tationulla
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-4 justify-center mt-4">

                <a href='https://x.com/MicaWallet'>
                    <img src={X} alt="x" className="h-8 w-8 cursor-pointer" />
                </a>
                <img src={FB} alt="Fb" className="h-8 w-8 cursor-pointer" />
                <a href='https://www.instagram.com/mica.wallet/'>
                    <img src={Insta} alt="Insta" className="h-8 w-8 cursor-pointer" />
                </a>

                <a href='https://t.me/micawallet'>
                    <img src={Tele} alt="Tele" className="h-8 w-8 cursor-pointer" />
                </a>
            </div>

            {/* Horizontal Line */}
            <hr className="w-full mx-auto border-t-2 border-[rgba(30,58,138,0.205)] mt-8" />

            {/* Footer Bottom Section */}
            <div className="w-full flex flex-col sm:flex-row justify-between items-center px-10 mt-4">
                <p className="text-white text-[16px] font-light text-center sm:text-left">
                    © MiCA Wallet. All Rights Reserved 2024
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-center mt-4 sm:mt-0">
                    <p className="text-white text-[16px] font-light cursor-pointer">
                        Terms of Use
                    </p>
                    <p className="text-white text-[16px] font-light hidden md:block">|</p>
                    <p className="text-white text-[16px] font-light cursor-pointer">
                        Privacy Policy
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Footer;
