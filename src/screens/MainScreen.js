import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import PropTypes from 'prop-types';

/**
* JSDOC : APP
*/
@inject('store') @observer
class MainScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={{ marginTop: 80, height: 300, width: '100%', backgroundColor: '#EEE' }}>
        <Text>Item: {this.props.store.item}</Text>
        <Button
          title="Go to Second Screen"
          onPress={() => navigate('Second')}
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

MainScreen.wrappedComponent.propTypes = {
  navigation: PropTypes.shape().isRequired,
  store: PropTypes.shape().isRequired,
};

export default MainScreen;
