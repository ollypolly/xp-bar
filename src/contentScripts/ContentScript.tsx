import React from "react";
import ReactDOM from "react-dom/client";
import styles from "../tailwind.css?inline";

function ContentScript() {
  return (
    <>
      <h1 className="text-white">XP BAR</h1>
      <button className="btn">Hello daisyUI</button>
    </>
  );
}

let searchContainer = document.getElementById("search-container");

const shadow = searchContainer?.attachShadow({ mode: "open" });

const extensionRoot = document.createElement("div");
extensionRoot.setAttribute("id", "extension-root");

const sheet = new CSSStyleSheet();
sheet.replaceSync(styles);
if (shadow) {
  shadow.adoptedStyleSheets = [sheet];

  shadow.appendChild(extensionRoot);

  ReactDOM.createRoot(extensionRoot).render(
    <React.StrictMode>
      <ContentScript />
    </React.StrictMode>
  );
}
