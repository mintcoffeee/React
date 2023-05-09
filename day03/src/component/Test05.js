import React, { useState } from "react";
import Fruit from "./Fruit";
import Name from "./Name";
import Output from "./Output";

const Test05 = () => {
  const [name, setName] = useState("hh");
  const [fruit, setFruit] = useState("사과");

  const onInputName = (e) => {
    const { value } = e.target;
    setName(value);
  };
  const onInputFruit = (e) => {
    const { value } = e.target;
    setFruit(value);
  };
  return (
    <div>
      <Name name={name} onInputName={onInputName} />
      <br />
      <Fruit fruit={fruit} onInputFruit={onInputFruit} />
      <br />
      <Output name={name} fruit={fruit} />
    </div>
  );
};

export default Test05;
