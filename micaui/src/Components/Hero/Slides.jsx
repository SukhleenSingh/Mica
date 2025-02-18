import React from 'react';
import CounterImg from './counter.png';
import Line from './app line.png';

const Slides = () => {
  return (
    <div className="container mx-auto relative">
      {/* Line Image Positioned to be 80% on Hero Page and 20% on Counter */}
      <div className="relative z-10 w-full sm:w-3/4 md:w-2/3 mx-auto sm:-mb-4 md:-mb-8 lg:-mb-12">
        <img src={Line} alt="Line" className="w-full" />
      </div>

      {/* Counter Image Section */}
      <div className="relative z-0">
        <img src={CounterImg} alt="Counter Section" className="w-full" />
      </div>
    </div>
  );
};

export default Slides;
