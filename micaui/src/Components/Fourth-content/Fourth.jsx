import React from 'react';
import Image from './Image.png';

function Fourth() {
  return (
    <div className="flex justify-center items-center">
      <img
        src={Image}
        alt="Image"
        className="w-full h-auto px-4 lg:px-38"
      />
    </div>
  );
}

export default Fourth;
