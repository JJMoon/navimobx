import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';

import ParentView from '../Compo/ParentView';
/**
* JSDOC : TabMain
*/
@inject('store') @observer
class TabMain extends ParentView {
  constructor(props) {
    super(props);
    console.log('\n\n\n TabMain :: constructor \n\n\n');
    const { goBack } = this.props.navigation;
    this.goback = goBack;
    this.props.store.addDelegate(this.screenChanged);
  }

  componentWillUnmount() {
    console.log('\n\n\n TabMain :: componentWillUnmount \n\n\n');
    this.props.store.removeDelegate(this.screenChanged);
  }

  viewDidAppear() {
    super.viewDidAppear(); // This is option
    // Do something here.
  }

  viewDidDisappear() {
    super.viewDidDisappear(); // This is option
    // Do something here
  }

  render() {
    const { navigate, goBack } = this.props.navigation;

    return (
      <View style={{ flex: 1, width: '100%', backgroundColor: '#EEB' }}>
        <View style={{ margin: 20 }} />
        <Text style={{ fontSize: 15 }}>Tab Main ..  . .. ..  </Text>
        <Button
          title="Go Back.. "
          onPress={() => this.props.navigation.dispatch(NavigationActions.back())}
        />

        <Button
          title="Go to Second Screen"
          onPress={() => navigate('Second')}
        />

        <Button
          title="Go to Second Screen without Nav title "
          onPress={() => navigate('Second', { navigationOptions: {
            header: null, mode: 'modal',
          } })}
        />

        <Button
          title="Screen without Navigation Bar"
          onPress={() => navigate('SecondWithoutNavigationBar')}
        />

        <Button
          title="Add ValGuide"
          onPress={() => this.props.store.addGuide()}
        />

      </View>
    );
  }
}

export default TabMain;
