import { useEffect, useState } from "react";

export default function Life() {
  const birthDate = new Date("1991-08-23");
  const expectedAge = 70;

  const deathDate = new Date(
    birthDate.getFullYear() + expectedAge,
    birthDate.getMonth(),
    birthDate.getDate()
  );

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const diff = deathDate - now;

    return {
      years: Math.floor(diff / (1000 * 60 * 60 * 24 * 365)),
      months: Math.floor((diff / (1000 * 60 * 60 * 24 * 30)) % 12),
      days: Math.floor((diff / (1000 * 60 * 60 * 24)) % 30),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      ms: Math.floor(diff % 1000),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const totalWeeks = expectedAge * 52;
  const livedWeeks = ((new Date() - birthDate) / (1000 * 60 * 60 * 24 * 7)) | 0;
  const weeks = Array.from({ length: totalWeeks }, (_, i) => i);

  return (
    <div className="h-screen w-full overflow-hidden bg-black text-white flex flex-col relative">
      
      {/* Fixed height life-grid: 40 percent of screen */}

      <div className="grid grid-cols-52 gap-0.5 w-full" style={{ height: "60vh" }}>
  {weeks.map((week, i) => {
    const age = Math.floor(i / 52); // convert week index → age
    const lived = i < livedWeeks;

    let color = "bg-gray-900"; // future weeks

    if (lived) {
      if (age < 15) color = "bg-blue-700";
      else if (age < 24) color = "bg-green-500";
      else if (age < 33) color = "bg-red-500";
      else if (age < 45) color = "bg-green-800";
      else color = "bg-purple-600";
    }

    return (
      <div
        key={i}
        className={`w-full h-full ${color}`}
      />
    );
  })}
</div>

      {/* Center countdown section */}
      <div className="flex flex-col items-center justify-center"
           style={{ height: "60vh" }}>
        <h1 className="text-6xl font-light pb-4">
          Life left Ravi...
        </h1>

        <div className="text-5xl font-semibold text-center leading-snug">
          {timeLeft.years} <span className="text-sm">YEARS</span> &nbsp;
          {timeLeft.months} <span className="text-sm">MONTHS</span> &nbsp;
          {timeLeft.days} <span className="text-sm">DAYS</span> &nbsp;
          {timeLeft.hours} <span className="text-sm">HOURS</span> &nbsp;
          {timeLeft.minutes} <span className="text-sm">MIN</span> &nbsp;
          {timeLeft.seconds} <span className="text-sm">SEC</span> &nbsp;
        </div>
      </div>
    </div>
  );
}
