const fetchForecast = async (q) => {
  const res = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?q=${q}`,
    {
      method: "GET",
      headers: {
        key: import.meta.env.VITE_WEATHER_APP_KEY,
      },
    }
  );
  const resJson = await res.json();
  console.log(resJson);
  return resJson;
};

export default fetchForecast;
