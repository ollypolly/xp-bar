import { useState } from "react";
import { createShadowRoot } from "@utils/createShadowRoot";

function Popup() {
  const [count, setCount] = useState(0);

  return (
    <div id="xp-bar" className="container" data-theme="dark">
      <div className="p-4 min-w-36">
        <h1>XP Bar</h1>
        <div className="card">
          <button
            className="btn"
            onClick={() => setCount((count) => count + 1)}
          >
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
    </div>
  );
}

const root = createShadowRoot();
root.render(<Popup />);
