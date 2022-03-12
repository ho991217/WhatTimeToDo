import React from "react";
import { useState } from "react";
import styled from "styled-components/native";

const Wrapper = styled.TouchableOpacity`
  background-color: rgba(0, 0, 0, 0.1);
  height: 60px;
  width: 90%;
  padding: 10px 25px;
  align-items: flex-start;
  justify-content: center;
  border-radius: 20px;
  margin-bottom: 15px;
`;

const Text = styled.Text`
  color: #fafafa;
  font-size: 18px;
  font-weight: 600;
  text-decoration: ${(props) => (props.isDone ? "line-through" : "none")};
`;

const Todo = ({ text }) => {
  const [done, setDone] = useState(false);
  return (
    <Wrapper onPress={() => setDone((prev) => !prev)}>
      <Text isDone={done}>{text}</Text>
    </Wrapper>
  );
};

export default Todo;
