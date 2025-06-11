import React from "react";
import "./Hero.css";

const Forecast = ({ info5 }) => {
  if (!info5.list) {
    return null;
  }

  const dailyForecasts = info5.list.filter((reading) =>
    reading.dt_txt.includes("12:00:00")
  );

  return (
    <div className="mt-8 text-white w-full">
      <h2 className="text-[22px] md:text-[32px] font-bold mb-4 text-center">
        Previsão para os próximos 5 dias
      </h2>
      <div className="lg:grid lg:grid-cols-2 lg:grid-cols-5 lg:gap-4 grid gap-4">
        {dailyForecasts.map((item) => (
          <div
            key={item.dt}
            className="div-bg p-4 rounded-xl flex flex-col items-center text-center"
          >
            <p className="font-bold capitalize">
              {new Date(item.dt_txt).toLocaleDateString("pt-BR", {
                weekday: "long",
              })}
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt={item.weather[0].description}
            />
            <p className="text-lg font-semibold">
              {Math.round(item.main.temp)}°C
            </p>
            <p className="text-sm capitalize">{item.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
