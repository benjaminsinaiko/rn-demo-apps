import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/foodSearch/screens/SearchScreen';
import ResultsShowScreen from './src/foodSearch/screens/ResultsShowScreen';
import IndexScreen from './src/blogPosts/screens/IndexScreen';
import ShowScreen from './src/blogPosts/screens/ShowScreen';
import CreateScreen from './src/blogPosts/screens/CreateScreen';

import { Provider as BlogProvider } from './src/blogPosts/context/BlogContext';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen,
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Choose App'
    }
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
