import React from "react";

const Test02 = () => {
  const title = "신상명세서";
  const arr = ["홍길동", "코난", "둘리", "라이언", "네오"];
  const data = [
    { id: 1, name: "hong" },
    { id: 2, name: "코난" },
    { id: 3, name: "둘리" },
    { id: 4, name: "라이언" },
    { id: 5, name: "네오" },
  ];
  return (
    <div>
      <h2>{title}</h2>
      <ul style={{ border: "1px solid red" }}>
        {arr.map((item, index) => {
          //반드시 key를 주저야 한다.
          return (
            // key 값 지정
            <li key={index}>
              {index} : {item}
            </li>
          );
        })}
      </ul>
      <hr />
      <ul style={{ border: "1px solid blue" }}>
        {data.map((item, index) => {
          return (
            // key 써도 되고 안써도 된다.
            <li key={item.id}>
              {item.id} : {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Test02;
