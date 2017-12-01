/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Provider as MobXProvider, observer } from 'mobx-react/native';

import Store from './src/stores/Store';
import Navigator from './src/navigator';

const store = new Store();

/**
* JSDOC : APP
*/
@observer
export default class App extends React.Component<{}> {
  render() {
    return (
      <MobXProvider store={store}>
        <SafeAreaView style={{ flex: 100, backgroundColor: '#EEE' }}>
          <Navigator />
        </SafeAreaView>
      </MobXProvider>
    );
  }
}
