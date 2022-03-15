import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-community/async-storage";
import { useState } from "react";
import { useEffect } from "react";
import loadClasses from "../functions/loadClasses";

const Wrapper = styled.View``;

const FlatList = styled.FlatList``;

const Todos = () => {
  const [datas, setDatas] = useState([]);

  const getDatas = async () => {
    await loadClasses().then((value) => setDatas(value));
  };

  useEffect(() => {
    getDatas();
  }, []);

  return (
    <Wrapper>
      <FlatList
        keyExtractor={({ item, index }) => index}
        renderItem={({ item, index }) => {
          return (
            <View key={index}>
              <Text>{item.title}</Text>
            </View>
          );
        }}
        data={datas}
      />
    </Wrapper>
  );
};

export default Todos;
