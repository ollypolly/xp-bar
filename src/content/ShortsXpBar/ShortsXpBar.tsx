import { Button } from "../../components/Button";

export const ShortsXpBar = () => {
  return (
    <div data-theme="dark" className="bg-transparent">
      <div className="p-4 top-14 relative flex justify-center w-10/12 z-50">
        <progress
          style={{
            height: "1.75rem",
          }}
          className="progress progress-success w-full h-7"
          value="10"
          max="100"
        ></progress>
        <div>
          <Button>Increase XP</Button>
          <Button>Decrease XP</Button>
        </div>
      </div>
    </div>
  );
};
