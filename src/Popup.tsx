import { StrictMode, useState } from "react";
import viteLogo from "/vite.svg";
import { createRoot } from "react-dom/client";
import "./tailwind.css";

function Popup() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 min-w-36">
      <h1>XP Bar</h1>
      <div className="card">
        <button className="btn" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Popup />
  </StrictMode>
);
