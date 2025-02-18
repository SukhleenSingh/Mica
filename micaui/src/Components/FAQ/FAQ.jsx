import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleContent = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is MiCA Wallet?",
      answer: "MiCA stands for Markets in Crypto-Assets regulation, which is a proposed regulatory framework by the European Commission to regulate crypto-assets and their providers. A MiCA Wallet would be a cryptocurrency wallet that operates within the guidelines set forth by this regulation."
    },
    {
      question: "How do I set up MiCA Wallet?",
      answer: "To set up a MiCA wallet, you need to follow the official guidelines provided by the cryptocurrency provider. Ensure that the wallet adheres to MiCA compliance requirements."
    },
    {
      question: "What cryptocurrencies are supported by MiCA wallet?",
      answer: "MiCA wallet supports cryptocurrencies that comply with the regulations specified in the framework, including popular cryptocurrencies like Bitcoin and Ethereum."
    },
    {
      question: "How secure is MiCA wallet?",
      answer: "MiCA wallet is designed with robust security features to ensure the safety of user assets, adhering to the highest industry standards."
    },
    {
      question: "Can I make transactions using MiCA wallet?",
      answer: "Yes, MiCA wallets allow transactions, provided they adhere to the regulatory guidelines set forth by the framework."
    }
  ];

  return (
    <div className='px-4 sm:px-8 md:px-8 lg:px-36 py-16'>
      <h1 className='text-white text-xl md:text-4xl tracking-wide text-left' style={{ fontFamily: 'Dunbar Tall' }}>
        Get the answer <span className='text-transparent bg-gradient-to-r from-[#D261E1] to-[#0355FF] bg-clip-text'>you need</span>
      </h1>

      <div className="w-full mt-8">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="mb-5 text-white bg-[#010B1A80] border-[1px] border-[#0E4AAB80] rounded-2xl p-4 cursor-pointer"
          >
            <div className="flex justify-between items-center" onClick={() => toggleContent(index)}>
              <h3 className="font-inter text-sm sm:text-base md:text-[18px]">{item.question}</h3>
              <span className="text-[24px]">{openIndex === index ? '-' : '+'}</span>
            </div>

            {openIndex === index && (
              <p className="text-xs sm:text-sm md:text-[14px] font-light mt-3">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
