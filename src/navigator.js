import {
  StackNavigator,
} from 'react-navigation';

import MainScreen from './screens/MainScreen';
import SecondScreen from './screens/SecondScreen';

const Navigator = StackNavigator({
  Main: {
    navigationOptions: {
      headerTitle: 'Home',
    },
    screen: MainScreen,
  },
  Second: { screen: SecondScreen },
  SecondWithoutNavigationBar: {
    navigationOptions: {
      header: null,
    },
    screen: SecondScreen,
  },
});

export default Navigator;
