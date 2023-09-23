import { Link } from "react-router-dom";
import data from "../lib/data";
const Criteria = () => {
  const { criteria } = data;
  return (
    <div>
      <div className="bg-no-repeat criteria text-center relative p-8 flex flex-col mt-8 justify-center items-center gap-6 md:flex-row md:justify-evenly ">
        <div className="first mt-10 md:mt-40   ">
          <img
            className="md:w-[710px] md:h-[587px]"
            src={criteria.image}
            alt="big idea"
          />
        </div>

        <div className="second md:basis-1/3  ">
          <div className="title font-title font-bold text-xl mb-6 md:text-3xl">
            <h1 className="">{criteria.title}</h1>
            <p className="text-common">{criteria.title2}</p>
          </div>
          <div className="flex gap-8 flex-col text-body">
            {criteria.text.map((item, index) => (
              <div className="font-body text-left" key={index}>
                <span className=" font-bold text-sm text-[#FF26B9]">
                  {" "}
                  {item.title}
                  <span className="text-xs font-normal text-white ">
                    {item.body}
                  </span>{" "}
                </span>
              </div>
            ))}
            <div className="md:flex mt-4">
              <button className="font-body w-[152px] h-[53px] rounded bg-gradient-to-r from-purple-600 to-pink-500">
                <Link className="font-body font-normal">Read More</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Criteria;
