/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider as MobXProvider, observer } from 'mobx-react/native';

import Store from './src/stores/Store';
import Navigator from './src/navigator';

const store = new Store();

@observer
/**
* JSDOC : APP
*/
export default class App extends React.Component<{}> {
  render() {
    return (
      <MobXProvider store={store}>
        <View style={{ paddingTop: 20, backgroundColor: '#ABC' }}>
          <Navigator />
          <View style={{ flex: 1, backgroundColor: '#89A' }} />
        </View>
      </MobXProvider>
    );
  }
}
