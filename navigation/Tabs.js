import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import TimeTable from "../screens/TimeTable";
import { Dimensions } from "react-native";

const DEVICE_WIDTH = Dimensions.get("window").width;

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          //   backgroundColor: "#000000",
          position: "absolute",
          bottom: 0,
          width: DEVICE_WIDTH,
          height: 90,
          zIndex: 8,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="TimeTable" component={TimeTable} />
    </Tab.Navigator>
  );
};

export default Tabs;
