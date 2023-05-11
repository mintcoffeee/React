import React, { useEffect, useState } from "react";
import axios from "axios";

const Test02 = () => {
  const [id, setId] = useState("1");
  const [dto, setDto] = useState({});
  const [search, setSearch] = useState(1);

  const onSearch = (id) => {
    setSearch(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setDto(res.data));
    //}, [id]); ===> id의 값이 바뀔 때 마다
  }, [search]); //버튼을 눌렀을 때 마다

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={() => onSearch(id)}>검색</button>
      <hr />
      <h3>
        {dto.id} / {dto.title}
      </h3>
    </div>
  );
};

export default Test02;
