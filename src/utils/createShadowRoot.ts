import { createRoot } from "react-dom/client";
import styles from "@assets/styles/index.css?inline";

export const createShadowRoot = () => {
  // Create a container element to hold the shadow root
  const container = document.createElement("div");

  // Attach a shadow root to the container element
  const shadow = container.attachShadow({ mode: "open" });

  // Create stylesheet and apply styles
  const sheet = new CSSStyleSheet();
  sheet.replaceSync(styles);
  shadow.adoptedStyleSheets = [sheet];

  // Append the container element to the document body
  document.body.appendChild(container);

  return createRoot(shadow);
};
