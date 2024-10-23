export const ShortsXpBar = () => {
  return (
    <div id="xp-bar" className="container" data-theme="dark">
      <div className="h-44 top-5 w-full p-4 relative z-10">
        <progress
          className="progress progress-success w-full"
          value="10"
          max="100"
        ></progress>
      </div>
    </div>
  );
};
