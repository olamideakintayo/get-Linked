import data from "../lib/data";
const Introduction = () => {
  const { intro } = data;
  return (
    <div className="text-center relative p-8 flex flex-col justify-center items-center gap-6 md:flex-row md:justify-evenly ">
      <div className="first flex justify-center items-start  ">
        <img className="animate-pulse" src="/src/assets/sata gra.svg" alt="" />
        <img
          className="w-[264px] h-[257px] md:w-[490px] md:h-[477px]"
          src={intro.image}
          alt="big idea"
        />
      </div>
      <div className="arrow absolute ">
        <img
          className="md:w-[49px] md:h-[58px]"
          src={intro.arrow}
          alt="arrow"
        />
      </div>
      <div className="second md:basis-1/3">
        <div className="title font-title font-bold text-xl md:text-3xl">
          <h1 className="flex justify-between">
            {intro.title}{" "}
            <span>
              <img
                className="animate-pulse"
                src="/src/assets/sata gra.svg"
                alt=""
              />
            </span>
          </h1>
          <p className="text-common">tech Hackathon 1.0</p>
        </div>
        <p className="font-body text-[13px] leading-7 mt-4 md:text-sm ">
          {intro.text}
        </p>
      </div>
    </div>
  );
};

export default Introduction;
