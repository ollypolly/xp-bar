import { Button } from "../../components/Button";

export const ShortsXpBar = () => {
  return (
    <div data-theme="dark" className="bg-transparent">
      <div
        style={{
          zIndex: 99999,
        }}
        className="w-80 p-4 top-14 relative flex justify-center"
      >
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
