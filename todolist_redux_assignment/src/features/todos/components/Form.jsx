import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../redux/modules/todos.js";
import { Routes, Route } from "react-router-dom";
import Detail from "../../../pages/Detail.jsx";

const Form = () => {
  const [todo, setTodo] = useState("");
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  // function onAddHandler(users) {
  //   dispatch(addTodo(users));
  // }

  // function onChangeHandler(users) {
  //   dispatch(toggleStatusTodo(users));
  // }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (title === "" && todo === "") {
      return;
    }
    setTitle("");
    setTodo("");
    dispatch(
      addTodo({
        id: Math.floor(Math.random() * 100),
        title: title,
        todo: todo,
        isDone: false,
      })
    );
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <StAddForm
              onSubmit={onSubmitHandler}
              title={title}
              setTitle={setTitle}
              body={todo}
              setTodo={setTodo}
            >
              <StInputGroup>
                <StFormLabel>제목</StFormLabel>
                <StAddInput
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)} //2. setTitle이 새로 입력된 value 값을 targeting해서 3번의 값을 바꿔준다.
                />
                <StFormLabel>내용</StFormLabel>
                <StAddInput
                  type="text"
                  value={todo}
                  onChange={(e) => setTodo(e.target.value)} //2. setTitle이 새로 입력된 value 값을 targeting해서 3번의 값을 바꿔준다.
                />
              </StInputGroup>
              <StAddButton>추가하기</StAddButton>
            </StAddForm>
          </div>
        }
      />
      <Route path="detail/:id" element={<Detail />} />
    </Routes>
  );
};

export default Form;

const StInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StFormLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
`;

const StAddForm = styled.form`
  background-color: #eee;
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
`;

const StAddInput = styled.input`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
`;

const StAddButton = styled.button`
  border: none;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  background-color: teal;
  width: 140px;
  color: #fff;
  font-weight: 700;
`;
