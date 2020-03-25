import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './src/screens/home';

const navigator = createStackNavigator(
  {
    Home,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Food'
    }
  }
);

export default createAppContainer(navigator);