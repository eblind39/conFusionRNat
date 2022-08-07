import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import Main from "../components/Main";
import Menu from "../components/Menu";
import DishDetail from "../components/DishDetail";
import Home from "../components/Home";

// const HomeNavigator = createStackNavigator(
//   {
//     Home: { screen: Home },
//   },
//   {
//     navigationOptions: {
//       headerStyle: {
//         backgroundColor: "#512DA8",
//       },
//       headerTitleStyle: {
//         color: "#fff",
//       },
//       headerTintColor: "#fff",
//     },
//   }
// );

// const MenuNavigator = createStackNavigator(
//   {
//     Main: { screen: Main },
//     Menu: { screen: Menu },
//     DishDetail: { screen: DishDetail },
//   },
//   {
//     initialRouteName: "Menu",
//     navigationOptions: {
//       headerStyle: {
//         backgroundColor: "#512DA8",
//       },
//       headerTintColor: "#fff",
//       headerTitleStyle: {
//         color: "#fff",
//       },
//     },
//   }
// );

// const MainNavigator = createDrawerNavigator(
//   {
//     Home: {
//       screen: HomeNavigator,
//       navigationOptions: {
//         title: "Home",
//         drawerLabel: "Home",
//       },
//     },
//     Menu: {
//       screen: MenuNavigator,
//       navigationOptions: {
//         title: "Menu",
//         drawerLabel: "Menu",
//       },
//     },
//   },
//   {
//     drawerBackgroundColor: "#D1C4E9",
//   }
// );

// export default createAppContainer(MainNavigator);
export { MenuNavigator };
