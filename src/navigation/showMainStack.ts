import {Navigation} from "react-native-navigation";
import {setLanguage} from "../common/localization/localization";
import {setInitialRoot, setStackRoot} from "../navigation/roots/mainStackRoot";
import {registerComponents, setDefaultOptions} from "../navigation/navigators/mainStackNavigator";
import {setDefaultOrientation} from "../common/helpers/orientationHelpers";

export function showMainStack() {
  setLanguage();
  setDefaultOrientation();
  registerComponents();
  setDefaultOptions();
  Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.dismissAllModals();
    setInitialRoot();
    setStackRoot();
  });
}
