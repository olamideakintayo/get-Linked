import { useState } from "react";
import data from "../lib/data";
const Faq = () => {
  const { faq, faqs } = data;

  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    if (openIndex === index) {
      return setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };
  return (
    <div className="px-8 flex flex-col text-center   items-center md:flex-row md:p-20 gap-10 md:text-start">
      <div className="frist flex-1">
        <div className="title">
          <h1 className="font-title text-xl font-bold  md:text-3xl">
            {faq.title}
          </h1>
        </div>
        <div className="subtitle">
          <h1 className="font-title text-xl font-bold text-common md:text-3xl">
            {faq.subtitle}
          </h1>
        </div>
        <div className="text mt-4 md:text-sm">
          <p className="font-body text-xs leading-7 md:text-sm">
            {faq.text}{" "}
            <span className="font-bold">getlinked Hackathon 1.0</span>{" "}
          </p>
        </div>
        <div className="faqs mt-8 ">
          {faqs.map((faq, index) => (
            <div
              className="flex flex-col gap-1 font-body text-start "
              key={index}
            >
              <div className="flex justify-between ">
                <p className="text-xs md:font-sm">{faq.question}</p>
                <button
                  onClick={() => {
                    handleToggle(index);
                  }}
                  className=" text-common text-xl"
                >
                  {openIndex === index ? "-" : "+"}
                </button>
              </div>
              {openIndex === index && (
                <p className="text-[10px]">{faq.answer}</p>
              )}
              <hr className="mb-4 bg-common text-common" />
            </div>
          ))}
        </div>
      </div>
      <div className="second mt-12 ">
        <div className="absolute flex  gap-4">
          <span>
            <img src="/src/assets/questionMarkSmall.svg" alt="?-icon" />
          </span>
          <span>
            <img src="/src/assets/ques.svg" alt="q-icon" />
          </span>
          <span>
            <img src="/src/assets/questionMarkSmall.svg" alt="q-icon" />
          </span>
        </div>
        <div className="relative">
          <img src={faq.image} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Faq;
