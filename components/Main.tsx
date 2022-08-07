import React, { useState } from "react";
import { View, Platform } from "react-native";
import Menu from "./Menu";
import DishDetail from "./DishDetail";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Icon } from "react-native-elements";
import Constants from "expo-constants";
import Home from "./Home";
// import { MenuNavigator } from "../services/AppNavigator";

const Main = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
      }}
    >
      <MainNavigator />
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

const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home },
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#512DA8",
      },
      headerTitleStyle: {
        color: "#fff",
      },
      headerTintColor: "#fff",
    },
  }
);

const MainNavigator = createDrawerNavigator(
  {
    Menu: {
      screen: MenuNavigator,
      navigationOptions: {
        title: "Menu",
        drawerLabel: "Menu",
      },
    },
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        title: "Home",
        drawerLabel: "Home",
      },
    },
  },
  {
    drawerBackgroundColor: "#D1C4E9",
  }
);

export default createAppContainer(HomeNavigator);
