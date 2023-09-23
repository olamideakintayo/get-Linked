import data from "../lib/data";
const Rules = () => {
  const { rules } = data;
  return (
    <div className="bg-no-repeat rules text-center relative p-8 flex flex-col justify-center items-center gap-6 md:flex-row-reverse md:justify-evenly ">
      <div className="first   ">
        <img
          // className="w-[264px] h-[257px] md:w-[490px] md:h-[477px]"
          src={rules.image}
          alt="big idea"
        />
      </div>

      <div className="second md:basis-1/3">
        <div className="title font-title font-bold text-xl md:text-3xl">
          <h1 className="">{rules.title}</h1>
          <p className="text-common">tech Hackathon 1.0</p>
        </div>
        <p className="font-body text-[13px] leading-7 mt-4 md:text-sm ">
          {rules.text}
        </p>
      </div>
    </div>
  );
};

export default Rules;
