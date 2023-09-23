const Timeline = () => {
  return (
    <div className=" bg-[#150E28] mt-20">
      <div className="hidden md:flex justify-center items-center">
        <img src="/src/assets/Timeline.svg" alt="timeline" />
      </div>
      <div className="flex justify-center items-center gap-4 md:hidden">
        <img src="/src/assets/numbers.svg" alt="numbers" />
        <img src="/src/assets/Date and time.svg" alt="date and time" />
      </div>
    </div>
  );
};

export default Timeline;
