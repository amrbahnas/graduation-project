import "./Loading.css";
const Loading = () => {
  return (
    <div className=" fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-neutral-800/50">
      <div className="dots"></div>
    </div>
  );
};

export default Loading;
