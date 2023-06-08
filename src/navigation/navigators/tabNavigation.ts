import {Navigation} from "react-native-navigation";
import {Pages} from "../pages";
import {Platform} from "react-native";
import {localization} from "../../common/localization/localization";
import {PlatformColorsAndroid, PlatformColorsIOS} from "../../core/theme/colors";
import {isAndroid} from "../../core/theme/commonConsts";
import {platformNativeColor} from "../../common/helpers/colorHelpers";
import DiscoverScreen from "../../modules/screens/DiscoverScreen";
import BookingScreen from "../../modules/screens/BookingScreen";
import MessageScreen from "../../modules/screens/MessageScreen";
import FavoriteScreen from "../../modules/screens/FavoriteScreen";
import ProfileScreen from "../../modules/screens/ProfileScreen";
import {reduxProvider} from "../../core/store/store";

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
    topBar: {
      animate: true,
      drawBehind: !isAndroid,
      background: {
        translucent: true,
        color: "#EBE6E4",
      },
      title: {
        text: "Back",
        color: "#004225",
      },
      largeTitle: {
        visible: false,
      },
      scrollEdgeAppearance: {
        active: true,
        noBorder: true,
        background: {
          translucent: true,
          color: platformNativeColor(PlatformColorsIOS.secondarySystemBackground, PlatformColorsAndroid.navigation),
        },
      },
      searchBar: {
        visible: false,
        hideOnScroll: true,
        hideTopBarOnFocus: true,
        obscuresBackgroundDuringPresentation: true,
      },
      hideNavBarOnFocusSearchBar: true,
      searchBarHiddenWhenScrolling: true,
      searchBarPlaceholder: localization.common.search,
      noBorder: false,
    },
    bottomTabs: {
      animate: true,
      hideShadow: false,
      translucent: true,
      animateTabSelection: true,
      preferLargeIcons: false,
      tabsAttachMode: "together",
      backgroundColor: "#EBE6E4",
      ...Platform.select({
        android: {
          translucent: true,
          borderWidth: 1,
          borderColor: "#004225",
        },
      }),
    },
    bottomTab: {
      selectedTextColor: "#004225",
      selectedIconColor: "#004225",
      textColor: "#1D783B",
      iconColor: "#1D783B",
    },
    statusBar: {
      backgroundColor: platformNativeColor(undefined, PlatformColorsAndroid.statusbar),
      visible: true,
    },
  });
}

export function registerComponents() {
  Navigation.registerComponent(Pages.discover.name, () => reduxProvider(DiscoverScreen));
  Navigation.registerComponent(Pages.booking.name, () => reduxProvider(BookingScreen));
  Navigation.registerComponent(Pages.message.name, () => reduxProvider(MessageScreen));
  Navigation.registerComponent(Pages.favorite.name, () => reduxProvider(FavoriteScreen));
  Navigation.registerComponent(Pages.profile.name, () => reduxProvider(ProfileScreen));
}
