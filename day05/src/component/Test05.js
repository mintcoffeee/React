import React, { useEffect, useMemo, useRef, useState } from "react";

const user = [
  { id: 1, name: "홍길동" },
  { id: 2, name: "김수혁" },
  { id: 3, name: "cat" },
  { id: 4, name: "DAUM" },
  { id: 5, name: "김수혁" },
  { id: 6, name: "daum" },
  { id: 7, name: "마동석" },
  { id: 8, name: "naver" },
  { id: 9, name: "김희선" },
  { id: 10, name: "NAVER" },
];

const Test05 = () => {
  let [data, setData] = useState(user);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  /*
  //글자가 입력될 때 마다 바로바로 결과가 뜬다.
    useEffect(() => {
      // setData(
      //   user.filter(
      //     (item) => item.name.toLowerCase().indexOf(text.toLowerCase()) !== -1
      //   )
      // );
      setData(
        user.filter((item) =>
          item.name.toLowerCase().includes(text.toLowerCase())
        )
      );
    });
    */

  //검색버튼 - useMemo()
  data = useMemo(() => {
    return user.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
  }, [search]);

  const onSearch = () => {
    setSearch(text);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={onSearch}>검색</button>
      {data.map((item) => (
        <li key={item.id}>
          {item.id} : {item.name}
        </li>
      ))}
    </div>
  );
};

export default Test05;
