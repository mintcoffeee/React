import React from "react";

const Test07Print = ({ name, age, addr, phone, onPrev, onNext }) => {
  //   const { name, age, addr, phone } = data;
  return (
    <>
      <ul>
        <li>
          이름:<em>{name}</em>
        </li>
        <li>
          나이:<em>{age}</em>
        </li>
        <li>
          주소:<em>{addr}</em>
        </li>
        <li>
          핸드폰:<em>{phone}</em>
        </li>
      </ul>
      <p>
        <button onClick={onPrev}>이전</button> &nbsp;
        <button onClick={onNext}>다음</button>
      </p>
    </>
  );
};

export default Test07Print;
