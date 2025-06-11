// src/components/Aviso.jsx
import React, { useEffect } from 'react';
import "./Hero.css";

const Error = ({ mensagem, onClose }) => {

  useEffect(() => {
    // Se não houver mensagem, não faz nada
    if (!mensagem) return;

    // Cria um temporizador para chamar a função onClose depois de 5 segundos
    const timer = setTimeout(() => {
      onClose();
    }, 5000); // 5000 milissegundos = 5 segundos

    // Função de limpeza: se o componente for desmontado, limpa o temporizador
    return () => clearTimeout(timer);
  }, [mensagem, onClose]); // Roda o efeito sempre que a mensagem ou a função mudarem

  if (!mensagem) {
    return null;
  }

  return (
    <div className="div-bg fixed top-5 right-5 text-white py-3 px-5 rounded-lg shadow-lg flex items-center animate-fade-in-down">
      <p className="flex-grow">{mensagem}</p>
      <button onClick={onClose} className="ml-4 text-xl font-bold">
        &times;
      </button>
    </div>
  );
};

export default Error;