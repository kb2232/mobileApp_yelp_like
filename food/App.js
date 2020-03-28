import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/search';

const navigator = createStackNavigator(
  {
    SearchScreen
  },
  {
    initialRouteName: 'SearchScreen',
    defaultNavigationOptions: {
      title: 'Restaurant Search'
    }
  }
);

export default createAppContainer(navigator);