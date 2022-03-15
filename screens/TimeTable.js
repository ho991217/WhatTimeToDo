import { View, Text, useColorScheme } from "react-native";
import React from "react";
import styled from "styled-components/native";
import TimeTableView, { genTimeBlock } from "react-native-timetable";
import { useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { useState } from "react";

const Wrapper = styled.SafeAreaView`
  flex: 1;
`;

const Header = styled.View`
  width: 100%;
  height: 80px;
  padding: 20px 25px;
`;

const TitleText = styled.Text`
  color: ${(props) => (props.isDark ? "white" : "black")};
  font-size: 38px;
  font-weight: 600;
`;

const TableContainer = styled.View`
  flex: 1;
  width: 100%;
  padding: 0px 10px;
`;

// const events_data = [
//   {
//     title: "자료구조",
//     startTime: genTimeBlock("MON", 9),
//     endTime: genTimeBlock("MON", 10, 30),
//     todos: [],
//   },
//   {
//     title: "자료구조",
//     startTime: genTimeBlock("TUE", 10, 30),
//     endTime: genTimeBlock("TUE", 12),
//     todos: [],
//   },
//   {
//     title: "운영체제",
//     startTime: genTimeBlock("MON", 10, 30),
//     endTime: genTimeBlock("MON", 12),
//     todos: [],
//   },
//   {
//     title: "운영체제",
//     startTime: genTimeBlock("TUE", 9),
//     endTime: genTimeBlock("TUE", 10, 30),
//     todos: [],
//   },
//   {
//     title: "통신시스템",
//     startTime: genTimeBlock("MON", 12),
//     endTime: genTimeBlock("MON", 13, 30),
//     todos: [],
//   },
//   {
//     title: "통신시스템",
//     startTime: genTimeBlock("TUE", 12, 30),
//     endTime: genTimeBlock("TUE", 14),
//     todos: [],
//   },
//   {
//     title: "아날로그\n회로실험",
//     startTime: genTimeBlock("MON", 14),
//     endTime: genTimeBlock("MON", 16),
//     todos: [],
//   },
//   {
//     title: "SW아카데믹\n영작",
//     startTime: genTimeBlock("TUE", 14),
//     endTime: genTimeBlock("TUE", 16),
//     todos: [],
//   },
//   {
//     title: "중국어초급",
//     startTime: genTimeBlock("WED", 9),
//     endTime: genTimeBlock("WED", 12),
//     todos: [],
//   },
//   {
//     title: "인공지능",
//     startTime: genTimeBlock("THU", 10, 30),
//     endTime: genTimeBlock("THU", 12),
//     todos: [],
//   },
//   {
//     title: "인공지능",
//     startTime: genTimeBlock("FRI", 13),
//     endTime: genTimeBlock("FRI", 14, 30),
//     todos: [],
//   },
// ];

const TimeTable = () => {
  const pivotDate = genTimeBlock("mon");
  const isDark = useColorScheme() === "dark";
  const [events_data, setEvents_data] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleEventPress = (e) => {
    console.log(e);
  };
  const loadData = async () => {
    await AsyncStorage.getItem("classes", (err, result) => {
      if (err) {
        alert(err.message);
      } else {
        const info = JSON.parse(result);
        const refined = info.map((obj) => {
          return {
            endTime: new Date(obj.endTime),
            startTime: new Date(obj.startTime),
            title: obj.title,
            todos: obj.todos,
          };
        });
        setEvents_data(refined);
      }
    });
    setLoading(false);
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <Wrapper>
      <Header>
        <TitleText isDark={isDark}>시간표</TitleText>
      </Header>
      <TableContainer>
        {!loading && (
          <TimeTableView
            numberOfDays={5}
            pivotDate={pivotDate}
            locale="ko"
            formatDateHeader="dddd"
            pivotTime={9}
            pivotEndTime={20}
            events={events_data}
            onEventPress={handleEventPress}
          />
        )}
      </TableContainer>
    </Wrapper>
  );
};

export default TimeTable;
