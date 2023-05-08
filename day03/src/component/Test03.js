import React, { useState } from "react";
import Test03Modal from "./Test03Modal";

import "../css/Test03.css";

const Test03 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <button className="button" onClick={onOpen}>
        팝업창
      </button>
      {/* {isOpen ? <Test03Modal /> : ""} */}
      {isOpen && <Test03Modal onClose={onClose} />}
      {/* isOpen이 참일 때만 Test03Modal 실행  */}
    </div>
  );
};

export default Test03;

// 상태 변수와 함수는 같이 있어야 한다.
// React 부모에서 다 선언, 자식에게 하달
