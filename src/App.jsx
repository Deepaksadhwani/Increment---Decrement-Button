import { useState } from "react";

useState;
const App = () => {
  const [number, setNumber] = useState(0);

  const decreaseHanlder = () => {
    if (number === 0) return;

    setNumber(number - 1);
  };

  const addHanlder = () => {
    setNumber(number + 1);
  };

  const resetHandler = () => {
    setNumber(0);
  };
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-[#344151] gap-10">
      <div className="text-[#0398d4] font-bold text-2xl">
        Increment & Decrement
      </div>

      <div className="bg-white flex justify-center gap-12 py-3 rounded-md text-[25px] text-[#344151]">
        <button
          onClick={decreaseHanlder}
          className="w-16 text-center text-[2rem] font-bold border-r-2"
        >
          -
        </button>

        <div className="flex items-center font-bold">{number}</div>

        <button
          onClick={addHanlder}
          className="w-16 text-center font-bold text-[2rem] border-l-2 "
        >
          +
        </button>
      </div>

      <button
        onClick={resetHandler}
        className="bg-blue-400 text-white font-semibold text-xl rounded-md w-40 h-10"
      >
        reset
      </button>
    </div>
  );
};

export default App;
