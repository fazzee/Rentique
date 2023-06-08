import {Navigation} from "react-native-navigation";
import {setLanguage} from "../common/localization/localization";
import {setInitialRoot, setStackRoot} from "../navigation/roots/tabNavRoots";
import {registerComponents, setDefaultOptions} from "../navigation/navigators/tabNavigation";
import {setDefaultOrientation} from "../common/helpers/orientationHelpers";

export function showHomeTabs() {
  setLanguage();
  setDefaultOrientation();
  registerComponents();
  setDefaultOptions();
  Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.dismissAllModals();
    // setInitialRoot();
    setStackRoot();
  });
}
