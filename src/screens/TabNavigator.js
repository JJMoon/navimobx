import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { TabNavigator } from 'react-navigation';
import PropTypes from 'prop-types';

import TabMain from './TabMain';
import SecondScreen from './SecondScreen';

const TabNavMain = TabNavigator({
  TabMainView: {
    screen: TabMain,
  },
  TabSecond: {
    screen: SecondScreen,
  },
});

export default TabNavMain;
