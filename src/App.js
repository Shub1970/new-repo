import './App.css';
import { useState } from 'react';
function App() {
  const [second,setSecond]=useState(60);
  const [minute,setMinute]=useState(60);
  let inter;
  const handelClick=(e)=>{
    if(e.target.className==="start"){
        inter=setInterval(()=>{
        setSecond((previous)=>previous-1)
      },100)
    }
    if(e.target.className==="stop"){
      clearInterval(inter);
    }
  }
  return (
    <>
    <div className="time-block">
      <div className="second">{second}</div>
      <div className="minute">{minute}</div>
    </div>
    <button className="start" onClick={handelClick}>start</button>
    <button className="stop" onClick={handelClick}>end</button>
    </>
  );
}

export default App;
