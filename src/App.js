import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(25);
  const [isrunning, setIsrunning] = useState(false);
  const [inter, setInter] = useState();
  useEffect(() => {
    if (isrunning === true) {
      const i = setInterval(() => {
        setSecond((previous) => {
          return (previous = previous - 1);
        });
      }, 100);
      setInter(i);
    }
    if (isrunning === false) {
      clearInterval(inter);
    }
  }, [isrunning]);
  useEffect(() => {
    if (second == 0) {
      setMinute((prev) => prev - 1);
      setSecond(60);
    }
  }, [second, minute]);
  return (
    <>
      <div className="time-block">
        <div className="second">{second}</div>
        <div className="minute">{minute}</div>
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
