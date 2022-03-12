import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Tabs from "./navigation/Tabs";

export default function App() {
  const isDark = useColorScheme() === "dark";
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
        <Tabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
