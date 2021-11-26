import React, { useEffect, useState } from "react";
import { Input } from "antd";
import CountDown from "./countDown";
import CustomHooks from "./customHooks";
import get from "./get";
import axios from "axios";
import "./App.css";
import useMousePosition from "./customHooks/useMousePosition";

function App() {
  return (
    <div>
      <span>123</span>
      <Input></Input>
    </div>
  );

  // const [num, setNum] = useState(0);
  // const changeNum = () => {
  //   setNum(num + 1);
  // };
  // const [x, y] = useMousePosition();
  // useEffect(() => {
  //   const url = "http://localhost:3002/a";
  //   // get(url);
  //   Promise.race([
  //     new Promise((resolve, reject) => {
  //       setTimeout(() => resolve("超时"), 1);
  //     }),
  //     axios(url)
  //       .then(() => "成功")
  //       .catch(() => "失败"),
  //   ]).then((data) => console.log(data));
  // }, []);
  // return (
  //   <div className="App">
  //     <div style={{ height: "500px", backgroundColor: "yellow" }}>
  //       <p>{`鼠标位置${x},${y}`}</p>
  //     </div>
  //     <div className="tooltip">
  //       <input className="content"></input>
  //       <span className="tooltipText">lalala</span>
  //     </div>
  //     {/* <div onMouseOver={<span>123</span>}>apple</div> */}
  //     {/* <div className="content">
  //       sdlasdiajodiahudaoldaodyaoudhaodadyaiudaodaduiahdiahdiuhduhiahia
  //       <span></span>
  //     </div> */}
  //     <CountDown changeNum={changeNum}></CountDown>
  //     <div>{`倒计时次数${num}`}</div>
  //     <CustomHooks></CustomHooks>
  //     <div id="container">
  //       <div id="div1">1</div>
  //       <div id="div2">2</div>
  //     </div>
  //     <div id="box">
  //       <div id="body">body</div>
  //       <div id="header">header</div>
  //       <div id="footer">footer</div>
  //     </div>
  //     <iframe
  //       title="text"
  //       width="2000px"
  //       height="800px"
  //       src="https://leetcode-cn.com/problems/balanced-binary-tree/"
  //     ></iframe>
  //   </div>
  // );
}

export default App;
