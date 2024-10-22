import React from "react";
import ReactDOM from "react-dom/client";

function ContentScript() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ContentScript</h1>
      </header>
    </div>
  );
}

const index = document.createElement("div");
index.id = "content-script";
document.body.appendChild(index);

ReactDOM.createRoot(index).render(
  <React.StrictMode>
    <ContentScript />
  </React.StrictMode>
);
