import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppRegistry } from "react-native";
import { StyleSheet, StatusBar } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types/stack";
import "react-native-gesture-handler";
import Home from "./components/Home";
import Menu from "./components/Menu";
import DishDetail from "./components/DishDetail";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

function Root() {
  return (
    <Stack.Navigator
      initialRouteName="Menu"
      screenOptions={{
        headerTintColor: "#fff",
        headerStyle: { backgroundColor: "tomato" },
      }}
    >
      <Stack.Screen name="Menu" component={Menu} options={{ title: "Menu" }} />
      <Stack.Screen
        name="DishDetail"
        component={DishDetail}
        options={{ title: "Dish Detail" }}
      />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Menu" component={Root} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

AppRegistry.registerComponent("confusionrnat", () => App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default App;
