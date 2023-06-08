import {Pages} from "../pages";
import {Navigation} from "react-native-navigation";
import {Tabs} from "../tabs";
import {SFSymbols} from "../../../resources/symbols/SFSymbols";
import {getPlatformTabsIcon} from "../helpers/navigationIconHelpers";
import CompassIcon from "../../../resources/images/compass.png";
import BookingIcon from "../../../resources/images/document.png";
import MessageIcon from "../../../resources/images/message.png";
import FavoriteIcon from "../../../resources/images/heart.png";
import ProfileIcon from "../../../resources/images/profile.png";

export function setInitialRoot() {
  Navigation.setRoot({
    root: {
      component: {
        name: Pages.splash.name,
        id: Pages.splash.id,
        options: {
          topBar: {
            visible: false,
          },
        },
      },
    },
  });
}

export function setStackRoot(callback?: () => void) {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: Pages.tabs.id,
        children: [
          {
            stack: {
              id: Tabs.discover.id,
              children: [
                {
                  component: {
                    id: Pages.discover.id,
                    name: Pages.discover.name,
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: "Discover",
                  icon: CompassIcon,
                },
              },
            },
          },
          {
            stack: {
              id: Tabs.booking.id,
              children: [
                {
                  component: {
                    id: Pages.booking.id,
                    name: Pages.booking.name,
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: "Booking",
                  icon: BookingIcon,
                },
              },
            },
          },
          {
            stack: {
              id: Tabs.message.id,
              children: [
                {
                  component: {
                    id: Pages.message.id,
                    name: Pages.message.name,
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: "Messages",
                  icon: MessageIcon,
                },
              },
            },
          },
          {
            stack: {
              id: Tabs.favorite.id,
              children: [
                {
                  component: {
                    id: Pages.favorite.id,
                    name: Pages.favorite.name,
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: "Favorite",
                  icon: FavoriteIcon,
                },
              },
            },
          },
          {
            stack: {
              id: Tabs.profile.id,
              children: [
                {
                  component: {
                    id: Pages.profile.id,
                    name: Pages.profile.name,
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: "Profile",
                  icon: ProfileIcon,
                },
              },
            },
          },
        ],
      },
    },
  }).then(callback);
}
