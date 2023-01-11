import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [second, setSecond] = useState(60);
  const [isrunning, setIsrunning] = useState(false);
  const [inter, setInter] = useState();
  useEffect(() => {
    if (isrunning === true) {
      const i = setInterval(() => {
        setSecond((previous) => setSecond(previous - 1));
      }, 1000);
      setInter(i);
    }
    if (isrunning === false) {
      clearInterval(inter);
    }
  }, [isrunning]);
  return (
    <>
      <div className="time-block">
        <div className="second">{second}</div>
        <div className="minute"></div>
      </div>
      <div>
        <button className="start" onClick={() => setIsrunning(true)}>
          start
        </button>
        <button className="stop" onClick={() => setIsrunning(false)}>
          end
        </button>
      </div>
    </>
  );
}

export default App;
