import React from "react";

const Output = ({ name, fruit }) => {
  return (
    <div>
      <h3>
        {name}님이 좋아하는 과일은 {fruit} 입니다.
      </h3>
    </div>
  );
};

export default Output;
