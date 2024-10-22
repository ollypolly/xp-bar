import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function ContentScript() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-white">XP BAR</h1>
        <button className="p-6 rounded red">Increment</button>
      </header>
    </div>
  );
}

let shortsContainer = document.getElementById("search-container");

const shadow = shortsContainer?.attachShadow({ mode: "open" });

const div = document.createElement("div");
div.setAttribute("id", "extension");
shadow?.appendChild(div);

ReactDOM.createRoot(div).render(
  <React.StrictMode>
    <ContentScript />
  </React.StrictMode>
);
