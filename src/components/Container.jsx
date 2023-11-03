import { useEffect, useState } from "react";
import fetchForecast from "../api/fetchForecast";
import InputBox from "./InputBox";
import Location from "./Location";
import backgroundImage from "../assets/bgimage.jpg";
import SunDetails from "./SunDetails";
import ForecastToday from "./ForecastToday";
import BottomForecastHour from "./BottomForecastHour";
import Loading from "./Loading";

function Container() {
  const [location, setLocation] = useState("Washington");
  const [forecastData, setForecastData] = useState({});
  const [clickTime, setClickTime] = useState("12AM");
  // console.log(forecastData);
  useEffect(() => {
    async function fetchForecastData() {
      const fetchData = await fetchForecast(location);
      setForecastData(fetchData);
    }
    fetchForecastData();
  }, [location]);
  if (!forecastData.current) return <Loading />;

  const astro = forecastData.forecast.forecastday[0].astro;
  const forecastHour = forecastData.forecast.forecastday[0].hour;
  return (
    <div
      className="flex h-screen items-center font-serif"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-8/12 flex flex-col h-5/6 justify-center shadow-2xl   overflow-auto rounded-md m-auto box-border bg-opacity-50 bg-gray-500">
        <h1 className="text-center p-1 text-3xl font-bold">Weather App</h1>
        <InputBox setLocation={setLocation} />
        <div className="flex justify-between">
          <div className="flex">
            <Location data={forecastData} />
            <SunDetails sunrise={astro.sunrise} sunset={astro.sunset} />
          </div>
          <ForecastToday hour={forecastHour} time={clickTime} />
        </div>
        <BottomForecastHour setClickTime={setClickTime} />
      </div>
    </div>
  );
}

export default Container;
