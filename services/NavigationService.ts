import {
  NavigationActions,
  NavigationContainerComponent,
} from "react-navigation";

let _navigator: NavigationContainerComponent | null;

const setTopLevelNavigator = (
  navigatorRef: NavigationContainerComponent | null
) => {
  _navigator = navigatorRef;
};

const getParam = (paramName: string, defaultVal: any): any => {
  if (_navigator === null) return defaultVal;
  let stt: any = _navigator.state;
  if (stt.nav.routes !== undefined) {
    let rtts: any = stt.nav["routes"];
    for (let i = 0; i < rtts.length; i++) {
      if (rtts[i].params !== undefined) {
        return rtts[i].params[paramName];
      }
    }
  }
  return defaultVal;
};

const navigate = (routeName: string, params: any) => {
  if (_navigator === null) return;
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
};

export { navigate, setTopLevelNavigator, getParam };
