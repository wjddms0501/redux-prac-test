import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { getTodoByID } from "../redux/modules/todos.js";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getTodoByID } from "../redux/modules/todos";

const Detail = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const todo = useSelector((state) => state.todos.todo);
  // const todo = todos.find((todo) => todo.id === parseInt(param.id));

  // function getTodoByIDHandler(id) {
  //   dispatch(getTodoByID(id));
  // }

  useEffect(() => {
    dispatch(getTodoByID(parseInt(param.id)));
  });

  console.log(todo);

  return (
    <StContainer>
      <StDialog>
        <div>
          <StDialogHeader>
            <div>ID :{todo.id}</div>
            <Link to={`/`}>
              <StButton>이전으로</StButton>
            </Link>
          </StDialogHeader>
          <StTitle>{todo.title}</StTitle>
          <StBody>{todo.todo}</StBody>
        </div>
      </StDialog>
    </StContainer>
  );
};

export default Detail;

const StContainer = styled.div`
  border: 2px solid #eee;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StDialog = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StDialogHeader = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
`;

const StTitle = styled.h1`
  padding: 0 24px;
`;

const StBody = styled.main`
  padding: 0 24px;
`;

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;
