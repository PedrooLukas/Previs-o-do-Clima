import { useState } from "react";
import "./App.css";
import Clima from "./components/Clima";
import Hero from "./components/Hero";

function App() {
  return (
    <div>
      <div className="flex items-center justify-center h-[50rem]">
        <Clima />
        <Hero />
      </div>
    </div>
  );
}

export default App;
