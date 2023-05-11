import React, { useRef, useState } from "react";
import styles from "../css/TodoForm.module.css";

const TodoForm = ({ onAdd }) => {
  const textRef = useRef();
  const [text, setText] = useState();

  const onInput = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    //submit의 본래 기능 막기
    e.preventDefault();

    //text의 값이 없을 때 onSubmit 함수 탈출, 아무것도 일어나지 않는다.
    if (!text) return;
    onAdd(text);
    setText("");

    //추가 버튼 클릭 후 focus
    textRef.current.focus();
  };

  return (
    <div>
      <form className={styles.TodoForm} onSubmit={onSubmit}>
        <input
          type="text"
          value={text}
          onChange={onInput}
          ref={textRef}
          placeholder="해야 할 일을 입력하시오"
        />
        <button type="submit">추가</button>
      </form>
    </div>
  );
};

export default TodoForm;
