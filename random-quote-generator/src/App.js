import React, { useState } from "react";
import "./App.css";

function App() {
  const quotes = [
    "Believe you can and you're halfway there.",
    "Dream big and dare to fail.",
    "The only way to do great work is to love what you do.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Start where you are. Use what you have. Do what you can."
  ];

  const [quote, setQuote] = useState("");

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="app">
      <h1>Random Quote Generator</h1>
      <div className="quote-box">
        {quote ? <p>"{quote}"</p> : <p>Click the button to get a quote!</p>}
      </div>
      <button onClick={getRandomQuote}>Get Quote</button>
    </div>
  );
}

export default App;
