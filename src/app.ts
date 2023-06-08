// import {showHomeTabs} from "./navigation/showHomeTabs";
// import {showMainStack} from "./navigation/showMainStack";

// // let authenticated = true;

// export function initializeApp(isAuthenticated: boolean) {
//   isAuthenticated ? showHomeTabs() : showMainStack();
// }

import {Navigation} from "react-native-navigation";
import {setLanguage} from "./common/localization/localization";
import {tabsRoot, mainStackRoot} from "./navigation/roots/roots";
import {registerComponents, setDefaultOptions} from "./navigation/registerComponents";
import {setDefaultOrientation} from "./common/helpers/orientationHelpers";

export function initializeApp() {
  setLanguage();
  setDefaultOrientation();
  registerComponents();
  setDefaultOptions();
  Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.dismissAllModals();
    Navigation.setRoot(mainStackRoot);
  });
}
