import React from "react";
import "./Hero.css";

const Hero = ({ info }) => {
  const cidade = info?.name;
  const temperatura = info?.main?.temp;
  const temperaturaArredondada = temperatura ? Math.round(temperatura) : null;
  const descricao = info?.weather?.[0]?.description;
  

  return (
    <div className="flex justify-center">
      {cidade && (
        <>
          <div className="flex flex-col div-bg rounded-xl justify-center items-center gap-5 mt-[4rem] p-5 w-[49rem] h-[16rem]">
            <div className="text-white text-[36px]">
              <p>
                Cidade: <span className="font-bold"> {cidade} </span>
              </p>
            </div>
            <div className="text-white text-[25px] flex-row flex items-center capitalize">
              <p>Clima: <span className="font-bold">{descricao}</span></p>
              <img
                className=""
                src={`https://openweathermap.org/img/wn/${info.weather[0].icon}.png`}
                alt=""
              />
            </div>
            <div className="text-white text-[25px] items-center">
              <p>Temperatura: {temperaturaArredondada}°C</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
