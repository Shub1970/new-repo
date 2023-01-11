import "./App.css";
import { useState, useRef } from "react";
function App() {
  const [second, setSecond] = useState(60);
  const interval = useRef(0);
  const handelStart = (e) => {
    if (!interval.current) {
      const inter = setInterval(() => {
        setSecond((previous) => previous - 1);
      }, 100);
      console.log("hellow world");
      interval.current = inter;
      console.log(interval.current);
    }
  };
  const handelstop = (e) => {
    clearInterval(interval.current);
    interval.current = 0;
  };
  return (
    <>
      <div className="time-block">
        <div className="second">{second}</div>
        <div className="minute"></div>
      </div>
      <div>
        <button className="start" onClick={handelStart}>
          start
        </button>
        <button className="stop" onClick={handelstop}>
          end
        </button>
      </div>
    </>
  );
}

export default App;
