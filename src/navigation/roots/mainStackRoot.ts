import {Pages} from "../pages";
import {Navigation} from "react-native-navigation";

export function setInitialRoot() {
  Navigation.setRoot({
    root: {
      component: {
        name: Pages.auth.name,
        id: Pages.auth.id,
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
  // Set up stack navigation
  Navigation.setRoot({
    root: {
      stack: {
        id: "MainStackRoot",
        children: [
          {
            component: {
              name: Pages.auth.name,
              id: Pages.auth.id,
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  }).then(callback);
}
