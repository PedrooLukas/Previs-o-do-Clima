import React, { useState, useRef } from "react";
import "./Hero.css";
import axios from "axios";
import Hero from "./Hero";
import Forecast from "./Forecast"


const Clima = () => {
  const [info, setInfo] = useState({});
  const [info5, setInfo5] = useState ({});
  const inputRef = useRef();


  async function searchCity() {
    const City = inputRef.current.value;
        if (City === "") {
    alert("Por favor, digite o nome de uma cidade.");
    return; // O 'return' para a execução da função aqui.
  }

    const Key = import.meta.env.VITE_OPENWEATHER_KEY;

    const apiKey = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${Key}&lang=pt_br&units=metric`;
    const apiKey5 = `https://api.openweathermap.org/data/2.5/forecast?q=${City}&appid=${Key}&lang=pt_br&units=metric`

    const data = await axios.get(apiKey);
    const data5 = await axios.get(apiKey5)
    
    setInfo(data.data);
    setInfo5(data5.data)
  }

  return (
    <div className="teste">
      <div className="text-[55px] font-bold text-white mb-10 flex justify-center mt-[10rem]">
        Previsão do Clima
      </div>
      <div className="flex items-center gap-5 justify-center">
        <input
          ref={inputRef}
          type="text"
          placeholder="Digite sua cidade"
          className=" p-3 rounded-xl border border-gray-400 focus:border-blue-500 focus:outline-none"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchCity();
            }
          }}
        />
        <button
          className="fundo-bnt rounded-xl px-2 w-[14.5rem] h-[3rem] text-white font-bold hover:bg-opacity-70 "
          onClick={searchCity}
        >
          Ver detalhes sobre o clima
        </button>
      </div>
      <Hero info={info} />
      <Forecast info5={info5}/>
    </div>
  );
};

export default Clima;
