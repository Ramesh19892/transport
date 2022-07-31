import React, { useEffect, useRef, useState } from "react";

const Contact = () => {
  const timerIdRef = useRef(0);
  const [count, setCount] = useState(0);
  const startHandler = () => {
    console.log(timerIdRef.current);
    if (timerIdRef.current) {
      return;
    }
    timerIdRef.current = setInterval(() => setCount((c) => c + 1), 1000);
  };
  const stopHandler =()=>{
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
  }
  useEffect(() => {
    return () => clearInterval(timerIdRef.current);
  }, []);
  return (
    <>
      <div>Timer:{count}</div>
      <div>
        <button onClick={startHandler}>Start</button>
        <button onClick={stopHandler}>Stop</button>
      </div>
    </>
  );
};

export default Contact;
