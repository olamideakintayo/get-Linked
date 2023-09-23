import data from "../lib/data";
const Rewards = () => {
  const { reward } = data;
  return (
    <div className="rewards git  bg-no-repeat  text-center px-8 mt-20 md:px-0 md:flex md:flex-row-reverse md:text-start md:justify-center ">
      <div className="top md:flex md:flex-col ">
        <div className="font-title font-bold text-xl">
          <h1>{reward.title}</h1>
          <h1 className="text-common">{reward.subtitle}</h1>
        </div>
        <div className="hidden md:flex md:w-[401px] ">
          <p className="font-body text-sm">{reward.text}</p>
        </div>

        <div className="hidden md:flex mt-14">
          <img src={reward.image} alt="rewards" />
        </div>
      </div>
      <p className="md:hidden font-body text-sm">{reward.text}</p>
      <div className="bottom flex flex-col gap-10 md:flex-row md:mt-20">
        <div className="">
          <img src={reward.trophy} alt="trophy" />
        </div>
        <div className="md:hidden">
          <img src={reward.image} alt="rewards" />
        </div>
      </div>
    </div>
  );
};

export default Rewards;
