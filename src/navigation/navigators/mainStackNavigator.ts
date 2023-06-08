import {Navigation} from "react-native-navigation";
import {Pages} from "../pages";
import {PlatformColorsAndroid, PlatformColorsIOS} from "../../core/theme/colors";
import {platformNativeColor} from "../../common/helpers/colorHelpers";
import AuthScreen from "../../modules/screens/AuthScreen";
import SignInScreen from "../../modules/screens/SignInScreen";
import SignUpScreen from "../../modules/screens/SignupScreen";
import TwoFAScreen from "../../modules/screens/TwoFAScreen";
import VerifySMSScreen from "../../modules/screens/VerifySMSScreen";
import SignupSuccessScreen from "../../modules/screens/SignupSuccessScreen";
import HomeScreen from "../../modules/screens/HomeScreen";

export function setDefaultOptions() {
  Navigation.setDefaultOptions({
    animations: {
      setRoot: {
        waitForRender: true,
      },
      setStackRoot: {
        waitForRender: true,
      },
    },
    layout: {
      componentBackgroundColor: platformNativeColor(PlatformColorsIOS.secondarySystemBackground, PlatformColorsAndroid.background),
    },
    statusBar: {
      backgroundColor: platformNativeColor(undefined, PlatformColorsAndroid.statusbar),
      visible: true,
    },
  });
}

export function registerComponents() {
  Navigation.registerComponent(Pages.auth.name, () => AuthScreen);
  Navigation.registerComponent(Pages.signIn.name, () => SignInScreen);
  Navigation.registerComponent(Pages.signUp.name, () => SignUpScreen);
  Navigation.registerComponent(Pages.twoFA.name, () => TwoFAScreen);
  Navigation.registerComponent(Pages.verifySMS.name, () => VerifySMSScreen);
  Navigation.registerComponent(Pages.signUpSuccess.name, () => SignupSuccessScreen);
  Navigation.registerComponent(Pages.home.name, () => HomeScreen);
}
