import React from "react";

const Test07Input = ({ data, onInput, onNext }) => {
  const { name, age, addr, phone } = data;
  return (
    <>
      {/* <table border="1" cellPadding="5" cellSpacing="0">
        <tr>
          <th width="100">이름</th>
          <td>
            <input type="text" name="name" value={name} onChange={onInput} />
          </td>
        </tr>
        <tr>
          <th width="100">나이</th>
          <td>
            <input type="text" name="age" value={age} onChange={onInput} />
          </td>
        </tr>
        <tr>
          <th width="100">주소</th>
          <td>
            <input type="text" name="addr" value={addr} onChange={onInput} />
          </td>
        </tr>
        <tr>
          <th width="100">핸드폰</th>
          <td>
            <input type="text" name="phone" value={phone} onChange={onInput} />
          </td>
        </tr>
        <tr>
          <td colSpan="2" align="center">
            <button>다음</button>
          </td>
        </tr>
      </table> */}
      <p>
        <label>이름</label>
        <input type="text" name="name" value={name} onChange={onInput} />
      </p>
      <p>
        <label>나이</label>
        <input type="text" name="age" value={age} onChange={onInput} />
      </p>
      <p>
        <label>주소</label>
        <input type="text" name="addr" value={addr} onChange={onInput} />
      </p>
      <p>
        <label>핸드폰</label>
        <input type="text" name="phone" value={phone} onChange={onInput} />
      </p>
      <p>
        <button onClick={onNext}>다음</button>
      </p>
    </>
  );
};

export default Test07Input;
