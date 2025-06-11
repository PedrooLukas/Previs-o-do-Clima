import React, { useState, useRef } from "react";
import "./Hero.css";
import axios from "axios";
import Hero from "./Hero";
import Forecast from "./Forecast";
import Error from './Error'; 

const Clima = () => {
  const [info, setInfo] = useState({});
  const [info5, setInfo5] = useState({});
  const inputRef = useRef();
  const [classe, setClasse] = useState(false);
  const [erro, setErro] = useState('');

  const handleMargin = () => {
    setClasse(true);
  };

  async function searchCity() {
    const City = inputRef.current.value;

    const Key = import.meta.env.VITE_OPENWEATHER_KEY;

    const apiKey = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${Key}&lang=pt_br&units=metric`;
    const apiKey5 = `https://api.openweathermap.org/data/2.5/forecast?q=${City}&appid=${Key}&lang=pt_br&units=metric`;

  try {
    const data = await axios.get(apiKey);
    const data5 = await axios.get(apiKey5);

    setInfo(data.data);
    setInfo5(data5.data);

  } catch (error) {
    setErro("Cidade não encontrada. Verifique o nome e tente novamente.");

  }
  }

  return (
    <div className="teste">
        <Error mensagem={erro} onClose={() => setErro('')} />
      <div className={`
        text-[23px] lg:text-[55px] font-bold text-white mb-10 flex justify-center
        
        ${classe ? 'mt-[60rem] lg:mt-0' : 'mt-0'}
      `}>
        Previsão do Clima
      </div>
      <div className="flex flex-col md:flex-row items-center gap-5 justify-center">
        <div>
          <input
            ref={inputRef}
            type="text"
            placeholder="Digite sua cidade"
            className="p-3 rounded-xl border border-gray-400 focus:border-blue-500 focus:outline-none"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                searchCity();
                handleMargin();
              }
            }}
          />
        </div>
        <div>
          <button
            className="fundo-bnt rounded-xl px-2 w-[14.5rem] h-[3rem] text-white font-bold hover:bg-opacity-70 "
            onClick={() => {
              searchCity();
              handleMargin();
            }}
          >
            Ver detalhes sobre o clima
          </button>
        </div>
      </div>
      <Hero info={info} />
      <Forecast info5={info5} />
    </div>
  );
};

export default Clima;