import Main from "./components/Main";
import { setTopLevelNavigator } from "./services/NavigationService";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppRegistry } from "react-native";
import { StyleSheet, StatusBar } from "react-native";
import "react-native-gesture-handler";

const App = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <Main
        ref={(navigatorRef) => {
          setTopLevelNavigator(navigatorRef);
        }}
      />
    </SafeAreaProvider>
  );
};

AppRegistry.registerComponent("main", () => App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default App;
