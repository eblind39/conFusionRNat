import Main from "./components/Main";
import { setTopLevelNavigator } from "./services/NavigationService";

const App = () => {
  return (
    <Main
      ref={(navigatorRef) => {
        setTopLevelNavigator(navigatorRef);
      }}
    />
  );
};

export default App;
