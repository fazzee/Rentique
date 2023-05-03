import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';

const AppNavigator = createStackNavigator();

<AppNavigator.Navigator>
  <AppNavigator.Screen name="Home" component={SplashScreen} />
  <AppNavigator.Screen name="Login" component={LoginScreen} />
</AppNavigator.Navigator>;

export default createAppContainer(AppNavigator);
