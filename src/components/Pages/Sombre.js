import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import useDarkMode from "use-dark-mode"; // Don't forget to import the NPM package use-dark-mode



function Sombre() {
  const { value, toggle } = useDarkMode(false);
  const dayNightAsString = value ? "🌕 Night":  "☀️ Day";

  const emojify = () => {
    return (
      <h1>
        <span role="img" aria-label="Decorative Emojis">
          ⭐️❤️☕🍍☄⛱⛷☀️☘️
        </span>
      </h1>
    );
  };

  return (
    <div className="Sombre w-25">
      <div className="container pb-5 w-25">
        {emojify()}
        <h2>{dayNightAsString} Mode 🥳</h2>
        <button onClick={toggle}>
          <h3>Toggle Day / Night</h3>
        </button>
        {emojify()}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Sombre />, rootElement);