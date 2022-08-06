import React, { useState } from "react";
import { View, Platform } from "react-native";
import Menu from "./Menu";
import DishDetail from "./DishDetail";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Constants from "expo-constants";

const Main = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
      }}
    >
      <MenuNavigator />
    </View>
  );
};

const MenuNavigator = createStackNavigator(
  {
    Main: { screen: Main },
    Menu: { screen: Menu },
    DishDetail: { screen: DishDetail },
  },
  {
    initialRouteName: "Menu",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#512DA8",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
    },
  }
);

export default createAppContainer(MenuNavigator);
