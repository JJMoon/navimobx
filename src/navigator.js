import {
  StackNavigator,
} from 'react-navigation';

import MainScreen from './screens/MainScreen';
import SecondScreen from './screens/SecondScreen';
import TabNavMain from './screens/TabNavigator';
import DrawerInit from './screens/DrawerInit';

import Drawer from './screens/Drawer';

const Navigator = StackNavigator({
  Main: {
    navigationOptions: {
      headerTitle: 'Home',
    },
    screen: MainScreen,
  },
  Second: { screen: SecondScreen },
  SecondWithoutNavigationBar: {
    screen: SecondScreen,
    navigationOptions: {
      header: null,
    },
  },
  TabView: {
    screen: TabNavMain,
    navigationOptions: {
      header: null,
    },
  },
  Drawer: {
    name: 'Drawer Example',
    description: 'Android-style drawer navigation',
    screen: Drawer,
  },
  DrawerInit: {
    screen: DrawerInit,
    navigationOptions: {
      header: null,
    },
  },
});

export default Navigator;
