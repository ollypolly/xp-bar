import styles from "../tailwind.css?inline";
import { createShadowRoot } from "@utils/createShadowRoot";

function XpBar() {
  return (
    <>
      <h1 className="text-white">XP BAR</h1>
      <button className="btn">Hello daisyUI</button>
    </>
  );
}

const root = createShadowRoot(styles);

root?.render(<XpBar />);
