import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const AppNavigator = createStackNavigator(
  {
    Main,
    Profile,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#7d40e7',
      },
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
      headerBackTitleVisible: false,
    },
  },
);

export default createAppContainer(AppNavigator);
