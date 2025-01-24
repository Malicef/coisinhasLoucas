import React, { useState } from "react";
import './App.css';


function App() {
  const [videoUrl, setVideoUrl] = useState("");

  const handleAnswer = (answer) => {
    if (answer === "sim") {
      setVideoUrl("https://www.youtube.com/embed/CckXRuwTppk?autoplay=1");
    } else {
      setVideoUrl("https://www.youtube.com/embed/27L6-pzpRyU?autoplay=1");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      {!videoUrl ? (
        <div className="animate-fade-in">
          <h1 className="heading">Você pensa que o Flamengo é time?</h1>
          <div className="flex gap-8 justify-center">
            <button
              onClick={() => handleAnswer("sim")}
              className="btn btn-primary"
            >
              Sim
            </button>
            <button
              onClick={() => handleAnswer("nao")}
              className="btn btn-secondary"
            >
              Não
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full h-screen animate-fade-in">
          <iframe
            src={videoUrl}
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default App;
