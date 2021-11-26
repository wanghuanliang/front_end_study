import React, { useState, useEffect } from "react";

const CountDown = (props) => {
  const { changeNum } = props;

  const [time, setTime] = useState(5);

  useEffect(() => {
    let timer = setInterval(() => {
      // console.log("time: ", time);
      if (time === 0) {
        changeNum();
        setTime(5);
      } else {
        setTime(time - 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [time]);

  return <div>{time}</div>;
};

export default CountDown;
