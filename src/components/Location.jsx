function Location({ data }) {
  if (!data.current) return <div>Loading</div>;

  const current = data.current;
  const forecastToday = data.forecast.forecastday[0];
  const lastUpdated = current.last_updated;
  const parts = lastUpdated.split(" ");
  const datePart = parts[0].split("-");
  const year = parseInt(datePart[0]);
  const month = parseInt(datePart[1]);
  const date = parseInt(datePart[2]);

  const timePart = parts[1].split(":");
  const hourIn24 = parseInt(timePart[0]);
  const hour = hourIn24 % 12;
  const minutes = parseInt(timePart[1]);

  const monthsNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className=" flex flex-col bg-500-red gap-3 m-9 ml-16">
      <div className=" text-9xl p-0">
        {current.temp_c}
        &#176;
      </div>
      <div className="w-1/3    bg-opacity-10 text-4xl  bg-gray-500 font-bold">
        {data?.location?.name}
      </div>
      <div className="font-medium">
        {date} {monthsNames[month - 1]} {year}
      </div>
      <div className="flex justify-between w-1/6">
        <span>
          {hour}:{minutes}
          {hourIn24 > 12 ? "Pm" : "Am"}|
        </span>
        <span> H:{forecastToday.day.maxtemp_c}&#176;|</span>
        <span> L:{forecastToday.day.mintemp_c}&#176;</span>
      </div>
      <div className="flex justify-between gap-2 w-1/6 h-1/2">
        <div>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACjUlEQVR4nO2Yy2sUQRDGf74QNQk5KUbRePSgh0VQb4IBEUUxbsA/QFHwkYOiJ8HHxeQSc4giPiKoB29exH9Ab14Mgpr4IuAbRYyoq8ZISy8sRc3u7ExPzxj6g750bVfXt131dfVAQEBAwHTBHGArMADcA14B34CvwHPgLtAHdAFzKRBagRPAe2Aq5ngNHAXa8g5+Z5OBy/EW2JJH4LOAcykCrx1/gEFgpq/gZwM3I4L5aIltA5YC84D5QCfQDVwAvkSsHfZF4qyy+XfgONASY307cBL4qfgxApApepRNXwCrEvgqAeNKOmVWE21WGmXwS1L4XAG8VAp7gaugFwPHgFtW+mTarHawxxqgInwfSeu0A7gRkafVYbTfFU4pp2AuxkTYBXxuIH1vrLq4Qruy54Ykjg4Ak3UCn7SptBv3uCT26m/WQbdVARn0A2C/VZrExxoDO8S+P4D7wBVgs708I9GpHKFpxPYBM/CDhQ3S9gmwKWrxsKIwiXIwJcZjtB6n5Z+6HPglfrSXfHAR+NCgDs04U7uoVxhHfDZWdbAI2AhcBn4rN7bpt/7hjjCagi0a1gHvRJyjtrHkqTCspJhYq1yspjdjQkzG6SjzwnkR6zXsm7V20lUjJQvPBdYr0sqzjFIoCwKtwqd5HHFbTJp24r8i0CsmHzqSUR8p9NhMLlOq+5CDALMgMCR8Xq8argpDpV7fkROBkvLwKVeN5hQ+CaM5lcPVyyIDAs0QLCnP2THZHZcj2ulR+xXNN4EWm/NDyj9vxnaN6Z46jZRvAlNxmzmJsv1AVVQCfXFUssO+hCoFIjAWlTaNiBy0n1V8E5gAHlmpLGfxnE0rk65l1nsAgUA4AUIKkWsRBwQwDfAXa7r84NmNCgMAAAAASUVORK5CYII=" />
          <label htmlFor="rain" className="p-3">
            {current.precip_mm}
            <span className="text-xs">mm</span>
          </label>
        </div>
        <div className="px-2">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABtklEQVR4nO2ZTU4CQRBG30ZcwE5+PINwDHCLxGPIIRTWGgjcRl3jQtQEPYcKuJOM6aQWpDIMzqSZ6U76JZVMQg2pr6e6eviAQCCQBzVgCLwAawlzPZDPnOYS+AaiHfEF9HC4+E1C8ZHExkUR9T0rH/ckqjjEUBVo+v4KaEiY67XKucEh3lRxpmBNX+WYje0MK1WcaSlNXeUs8YxTJcDsGa/oKwFzPKEhxf8oAdc2vjwqKD6BE18FbICujeIpaOW7torPS4AZl8/S81baJhAIFH8ORBLmDfUdGAEtPBQQbcUvMAVKvgqIJB7TiIgcjQmeUAbawCymnZp4RClGxB2e0VECFnhGJctPziwbLI3TtlT3ll0QkMZp+1D57YTc8ywtZGPkJTltI5U72zHjj4GnLJvY1tze5bS1ZCRqER1pmYqsvC7e3HPGgUjrtE0zLMiYHPiv02Za5iFF8ffAURFGVdLUMCImMe2k22Zsq3g9/hqWnLambM6F2JErub613fOvGcxap5y2Qczh1d+yyw/mtNmiJqMxd6fNJr0UfxlZNatscrHnSVh32g5BVQ6puUyN4LQFAhTDH14oQFq1rDPfAAAAAElFTkSuQmCC"></img>
          <label htmlFor="wind" className="p-3 text-center text-sm">
            {current.wind_kph}
            <span className="text-xs">kph</span>
          </label>
        </div>
        <div>
          <img src="data:image/png;base64,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"></img>
          <label htmlFor="humidity" className="p-3">
            {current.humidity}&#x25;
          </label>
        </div>
      </div>
    </div>
  );
}

export default Location;
