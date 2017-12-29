import React, { Component } from 'react';
import { ScrollView, Text, View, Button } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import PropTypes from 'prop-types';

import ParentView from '../Compo/ParentView';
/**
* JSDOC : APP
*/
@inject('store') @observer
class SecondScreen extends ParentView {
  constructor(props) {
    super(props);
    console.log('\n\n\n SecondScreen : Second Screen :: constructor \n\n\n');
    this.props.store.addDelegate(this.screenChanged);
    // this.screenChanged
  }

  componentDidMount() {
    // console.log('\n\n\n SecondScreen : Second Screen :: componentDidMount Did >>>');
    // console.log(' navigation key ', this.props.navigation.state.key);
  }

  componentWillUnmount() {
    // console.log('\n\n\n SecondScreen : Second Screen :: componentWillUnmount \n\n\n');
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
    const { goBack, navigate } = this.props.navigation;

    return ( // marginTop: 100,
      <View style={{ flex: 100, alignSelf: 'stretch', backgroundColor: '#ABC' }}>

        <Button
          style={{ flex: 1 }}
          title="Go back"
          onPress={() => goBack()}
        />

        <Button
          title="Go to Tab View"
          onPress={() => navigate('TabView')}
        />

        <Button
          title="Add ValGuide"
          onPress={() => this.props.store.addGuide()}
        />
        <View style={{ flex: 10, backgroundColor: '#CBA' }} />
      </View>
    );
  }
}

SecondScreen.propTypes = {
  navigation: PropTypes.shape().isRequired,
};

export default SecondScreen;
