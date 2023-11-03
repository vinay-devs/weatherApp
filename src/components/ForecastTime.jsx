const ForecastTime = ({ time, temp_c, wind_kph, icon }) => {
  return (
    <div className="  border-orange-400 border flex flex-col gap-3 text-lg  items-center h-fit w-full justify-between rounded-md px-2 py-4 my-4">
      <div>{time} </div>
      <img className="w-28 h-28 rounded-full " src={icon}></img>
      <div>{temp_c}&#176; </div>
      <div>{wind_kph}kph </div>
    </div>
  );
};

export default ForecastTime;
