export const ShortsXpBar = () => {
  return (
    <div className="flex justify-center">
      <div
        style={{
          zIndex: 9999,
        }}
        data-theme="dark"
        className="shadow-lg m-4 p-4 rounded-lg w-3/5 relative"
      >
        <progress
          className="progress progress-error h-7 "
          value={40}
          max={100}
        >{`${40}/100`}</progress>
      </div>
    </div>
  );
};
