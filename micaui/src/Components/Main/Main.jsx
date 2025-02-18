import React from 'react';
import Background from './Bg.png';
import Content from '../Content/Content';
import Two from '../Second-content/Two';
import Three from '../Third-content/Three';
import Wallet from '../wallet/Wallet';
import Fourth from '../Fourth-content/Fourth';
import FAQ from '../FAQ/FAQ';
import Footer from '../Footer/Footer';
import Line from '../Line/Line';
import DownLine from '../Down/DownLine';
function Main() {
    return (
        <div
            className="container mx-auto w-full h-auto bg-cover bg-center justify-center items-center"
            style={{ backgroundImage: `url(${Background})` }}
        >

            <div id="features-section">
                <Content />
            </div>
            <Line />
            <div id="build-section">
                <Two />
            </div>
            <DownLine />
            <Three />
            <div id="wallet-section">
                <Wallet />
            </div>
            <Fourth />
            <div id="about-section">
                <FAQ />
            </div>
            <div id="support-section">
                <Footer />
            </div>
        </div>
    );
}

export default Main;
