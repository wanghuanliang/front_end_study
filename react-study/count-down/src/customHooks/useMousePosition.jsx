import { useState, useEffect } from "react";

function useMousePosition() {
  //定义数据
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  //修改数据
  useEffect(() => {
    function mouseMoverHandler(event) {
      setX(event.clientX);
      setY(event.clientY);
    }

    //绑定事件
    document.body.addEventListener('mousemove', mouseMoverHandler);
  
    //解绑事件
    return () => document.body.removeEventListener('mouseover', mouseMoverHandler);
  }, [])
  
  //返回
  return [x, y]
}

export default useMousePosition;