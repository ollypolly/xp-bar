export const ShortsXpBar = () => {
  console.log("hi");
  return (
    <div
      style={{
        zIndex: 9999,
      }}
      data-theme="dark"
      className="flex justify-center relative shadow-md p-4 rounded-xl mx-auto outline-1 top-28 max-w-96 text-clip"
    >
      <progress
        className="progress progress-error h-7 w-full"
        value={40}
        max={100}
      >{`${40}/100`}</progress>
    </div>
  );
};
