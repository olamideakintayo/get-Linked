import data from "../lib/data";
import { Button, Star } from "../components";
import CountdownTimer from "./CountdownTimer";

const Hero = () => {
  const { hero } = data;
  return (
    <div className="hero relative bg-no-repeat flex flex-col gap-6 p-4 md:px-14">
      <div className="top flex items-center justify-center md:justify-end md:px-11 ">
        <p className="relative font-body font-bold text-[16px] leading-5 mb-6 md:text-4xl italic  ">
          Igniting a Revolution in HR Innovation
        </p>
        <span className="absolute right-5 md:right-[7%] md:top-14">
          <img
            className="w-[115px] md:w-full"
            src="/src/assets/Vector 4.svg"
            alt="icon"
          />
        </span>
      </div>
      <div className="">
        <div className="flex   flex-col justify-center items-center md:flex-row">
          <div className="wrap flex flex-col justify-center items-center md:block">
            <div className="absolute left-20   top-14 w-4 h-md: md:w-6 md:-8">
              <Star />
            </div>
            <div className="title font-title">
              <div className="relative md:flex flex-col ">
                <span className="flex md:[position:none] absolute right-[37px] top-[-37px] justify-end">
                  <img
                    className="md:w-[53px] h-[73px]"
                    width={18}
                    height={26}
                    src={hero.creative}
                    alt="creative"
                  />
                </span>
                <div className="absolute right-0 w-2 h-2  md:w-6 md:h-8">
                  <Star />
                </div>
                <p className="relative text-3xl font-bold md:text-[80px] md:leading-[98px]  ">
                  {hero.titleTop}
                </p>
                <p className="flex gap-1 text-3xl font-bold md:text-[80px] md:leading-[98px] ">
                  {`${hero.titleDown}`}{" "}
                  <span className="text-common"> 1.0</span>{" "}
                  <span className="flex">
                    <img
                      className="md:w-[86px]"
                      width={32.8}
                      src={hero.chain}
                      alt="chain"
                    />{" "}
                    <img
                      className="md:w-[56px]"
                      width={22.12}
                      src={hero.fire}
                      alt="spark"
                    />
                  </span>{" "}
                </p>{" "}
              </div>
            </div>
            <div className="text flex mt-2 mb-4 ">
              <p className="font-body px-10 font-regular text-[13px] md:text-xl text-center md:text-start md:px-0">
                {hero.text}
              </p>
            </div>
            <div className="button mt-2 mb-4 md:mb-14">
              <Button />
            </div>
            <div className="absolute right-20  w-2 h-2  md:w-6 md:h-8">
              <Star />
            </div>
            <div className="countdown ">
              <CountdownTimer />
            </div>
          </div>
          <div className="bottom">
            <div className="behind-image absolute z-10">
              <img
                className="bg-cover bg-center"
                src="/src/assets/Image 1.svg"
                alt="image 1"
              />
            </div>
            <div className="bannerImage  relative z-0">
              <img
                className=""
                src="/src/assets/man-wearing-smart-glasses-touching-virtual-screen 1.png"
                alt="banner image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
