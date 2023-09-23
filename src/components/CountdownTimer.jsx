import { useState, useEffect } from "react";

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const targetTime = new Date("2023-12-31T23:59:59").getTime(); // Set your target date and time

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeDifference = targetTime - currentTime;

      if (timeDifference <= 0) {
        clearInterval(interval);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setTimeLeft({ hours, minutes, seconds });
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1></h1>
      <div className="flex gap-4">
        <p className="font-unica text-5xl md:text-[64px] md:leading-[85px]">
          {timeLeft.hours.toString().padStart(2, "0")}
          <span className="font-body text-xs">H</span>
        </p>
        <p className="font-unica text-5xl md:text-[64px] md:leading-[85px]">
          {timeLeft.minutes.toString().padStart(2, "0")}
          <span className="font-body text-xs">M</span>
        </p>
        <p className="font-unica text-5xl md:text-[64px] md:leading-[85px]">
          {timeLeft.seconds.toString().padStart(2, "0")}
          <span className="font-body text-xs">S</span>
        </p>
      </div>
    </div>
  );
}

export default CountdownTimer;
