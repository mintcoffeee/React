import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const MemberDetail = () => {
  const { memberId } = useParams();
  const [member, setMember] = useState({});
  const navigate = useNavigate();

  const { name, email, phone, website } = member;
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${memberId}`)
      .then((res) => setMember(res.data));
  }, []);

  const onBack = () => {
    //navigate('/')
    navigate(-1);
  };

  const css = {
    border: "1px solid cyan",
    margin: "20px",
    padding: 20,
  };
  return (
    <div style={css}>
      <h2>MemberDetail Page : {memberId}</h2>
      <h4>이름 : {name}</h4>
      <ul>
        <li>이메일 : {email}</li>
        <li>전화번호 : {phone}</li>
        <li>웹사이트 : {website}</li>
      </ul>
      <button onClick={onBack}>뒤로</button>
    </div>
  );
};

export default MemberDetail;
