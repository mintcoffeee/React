import React, { useRef, useState } from "react";

const Test06 = () => {
  const nameRef = useRef();
  //   const [name, setName] = useState();
  //   const [id, setId] = useState();
  //   const [pwd, setPwd] = useState();

  const [data, setData] = useState({
    name: "",
    id: "",
    pwd: "",
  });
  const { name, id, pwd } = data;

  const onInput = (e) => {
    const { name, value } = e.target;

    setData({
      ...data, //먼저 객체를 복사하고, 원하는 것만 수정한다.
      //복사하지 않으면 전에 있던 값이 초기화 된다.
      [name]: value,
    });
  };
  const onReset = () => {
    setData({
      name: "",
      id: "",
      pwd: "",
    });
    nameRef.current.focus();
  };
  return (
    <div>
      <table border="1" cellPadding="5" cellSpacing="0">
        <tr>
          <th width="100">이름</th>
          <td>
            <input
              type="text"
              name="name"
              value={name}
              onChange={onInput}
              ref={nameRef}
            />
          </td>
        </tr>
        <tr>
          <th width="100">아이디</th>
          <td>
            <input type="text" name="id" value={id} onChange={onInput} />
          </td>
        </tr>
        <tr>
          <th width="100">비밀번호</th>
          <td>
            <input type="password" name="pwd" value={pwd} onChange={onInput} />
          </td>
        </tr>
        <tr>
          <td colSpan="2" align="center">
            <button onClick={onReset}>초기화</button>
          </td>
        </tr>
      </table>
      <hr />
      <h3>이름: {name}</h3>
      <h3>아이디 : {id}</h3>
      <h3>비밀번호 : {pwd}</h3>
    </div>
  );
};

export default Test06;
