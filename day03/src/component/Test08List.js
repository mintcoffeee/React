import React from "react";
import Test08Item from "./Test08Item";

const Test08List = ({ data, onView }) => {
  return (
    <ul className="list">
      {/* map으로 반복한다 7번 반복 */}
      {data.map((item) => (
        <Test08Item key={item.id} item={item} onView={onView} />
      ))}
    </ul>
  );
};

export default Test08List;
