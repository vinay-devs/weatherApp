import ForecastTime from "./ForecastTime";

const ForecastToday = ({ time, hour }) => {
  console.log(time);
  const timeInDay = time.split(" ");
  const timeHour = parseInt(timeInDay[0]);
  const amOrPm = timeInDay[1];
  let timeCheck = 0;
  if (amOrPm == "PM" && timeHour != 12) timeCheck = timeHour + 12;
  else if (timeHour != 12) timeCheck = timeHour;
  else timeCheck = 0;

  const icon = hour[timeCheck].condition?.icon;

  const { temp_c, wind_kph } = hour[timeCheck];

  return (
    <div className="bg-black  pt-6 p-2 m-9 bg-opacity-20 rounded">
      <h2 className="font-bold mb-2 text-center">Forecast Today</h2>
      <ForecastTime
        temp_c={temp_c}
        wind_kph={wind_kph}
        icon={icon}
        time={time}
      />
    </div>
  );
};

export default ForecastToday;
