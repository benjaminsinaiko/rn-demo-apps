import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/foodSearch/screens/SearchScreen';
import ResultsShowScreen from './src/foodSearch/screens/ResultsShowScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Choose App'
    }
  }
);

export default createAppContainer(navigator);
