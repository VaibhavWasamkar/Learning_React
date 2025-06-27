import React, { useState } from "react";
import "./App.css";

function App() {
  const [bgColor, setBgColor] = useState("#ffffff");

  const colors = ["#FF5733", "#33B5FF", "#75FF33", "#FF33A8", "#FFD700", "#8A2BE2"];

  const changeBackground = (color) => {
    setBgColor(color);
  };

  return (
    <div className="app" style={{ backgroundColor: bgColor }}>
      <h1>Background Color Changer</h1>
      <div className="color-buttons">
        {colors.map((color, index) => (
          <button
            key={index}
            style={{ backgroundColor: color }}
            onClick={() => changeBackground(color)}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
