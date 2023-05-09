import React from "react";

const Test08Item = ({ item }) => {
  const { id, img, title } = item;
  return (
    <>
      <li key={id}>
        <img src={img} />
      </li>
    </>
  );
};

export default Test08Item;
