import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import TimeTable from "../screens/TimeTable";
import { Dimensions, useColorScheme } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Todos from "../screens/Todos";

const DEVICE_WIDTH = Dimensions.get("window").width;

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === "dark";
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          backgroundColor: isDark ? "#1B1C25" : "#E6E6E6",
          position: "absolute",
          bottom: 0,
          width: DEVICE_WIDTH,
          height: 90,
          zIndex: 8,
        },
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "홈",
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <MaterialIcons name="home-filled" size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Todos"
        component={Todos}
        options={{
          title: "투두",
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <MaterialIcons
                name="format-list-bulleted"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="TimeTable"
        component={TimeTable}
        options={{
          title: "시간표",
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <MaterialIcons name="table-chart" size={size} color={color} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
