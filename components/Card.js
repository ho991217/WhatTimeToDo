import React from "react";
import styled from "styled-components/native";
import Wave from "react-native-waveview";
import Todo from "./Todo";
import { Dimensions } from "react-native";

const Wrapper = styled.View`
  height: ${(props) => props.height};
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: transparent;
`;

const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.backgroundcolor};
  align-items: center;
  padding-top: 20px;
`;

const ScrollView = styled.ScrollView`
  width: 100%;
`;

const LectureName = styled.Text`
  color: #fafafa;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 25px;
`;

const Card = ({ title, colors }) => {
  const DEVICE_HEIGHT = Dimensions.get("window").height;
  return (
    <Wrapper height={parseInt((DEVICE_HEIGHT / 5) * 3)}>
      <Wave
        H={50}
        style={{
          width: "100%",
          aspectRatio: 2,
          overflow: "hidden",
          backgroundColor: "transparent",
          //   flex: 1,
        }}
        waveParams={[
          { A: 35, T: 500, fill: colors[0] },
          { A: 40, T: 400, fill: colors[1] },
          { A: 45, T: 450, fill: colors[2] },
        ]}
        animated={true}
      />
      <Container backgroundcolor={colors[2]}>
        <LectureName>{title}</LectureName>
        <ScrollView contentContainerStyle={{ alignItems: "center" }}>
          <Todo text="예비 리포트 작성하기" />
          <Todo text="잠자러 가기" />
        </ScrollView>
      </Container>
    </Wrapper>
  );
};

export default Card;
