import React, { useState } from "react";

const Test02 = () => {
  const [chk, setChk] = useState(true);
  const onChk = (event) => {
    const { checked } = event.target;
    setChk(checked);
  };
  return (
    <div style={{ fontSize: 25, margin: 30, color: chk ? "blue" : "hotpink" }}>
      <input type="checkbox" checked={chk} onChange={onChk} />
      Have a nice day!!
    </div>
  );
};

export default Test02;
