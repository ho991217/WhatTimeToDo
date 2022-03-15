import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Animated, Text, useColorScheme, View } from "react-native";
import styled from "styled-components/native";
import { colors } from "../colors";
import Card from "../components/Card";
import { getTimeLeft } from "../functions/getTimeLeft";
import { ttable } from "../table";

const Wrapper = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

const TimeLeftText = styled.Text`
  position: absolute;
  z-index: 99;
  top: 70px;
  font-weight: 500;
  font-size: 16px;
  color: ${(props) => (props.isDark ? "white" : "black")};
`;

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [num, setNum] = useState(0);
  const isDark = useColorScheme() === "dark";

  useEffect(() => {
    setTimeLeft(getTimeLeft(1, 9, 0));
    setNum(parseInt(Math.random() * 6));
  }, []);

  return (
    <Wrapper>
      <TimeLeftText isDark={isDark}>
        이 수업까지 남은 시간:{" "}
        {timeLeft.dayLeft > 3
          ? timeLeft.dayLeft + "일 "
          : timeLeft.dayLeft > 0
          ? timeLeft.dayLeft + "일 " + timeLeft.hourLeft + "시간"
          : timeLeft.hourLeft > 0
          ? timeLeft.hourLeft + "시간 " + timeLeft.minuteLeft + "분"
          : timeLeft.minuteLeft + "분"}
      </TimeLeftText>

      <Card title="자료구조" colors={colors[6]} />
    </Wrapper>
  );
};

export default Home;
