import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import PropTypes from 'prop-types';

@inject('store') @observer
/**
* JSDOC : APP
*/
class MainScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={{ marginTop: 80, height: 300, width: '100%', backgroundColor: '#3BC' }}>
        <Text>Item: {this.props.store.item}</Text>
        <Button
          title="Go to Second Screen"
          onPress={() => navigate('Second')}
        />

        <Text>Item is item ... so what.... </Text>

      </View>
    );
  }
}

MainScreen.wrappedComponent.propTypes = {
  navigation: PropTypes.shape().isRequired,
  store: PropTypes.shape().isRequired,
};

export default MainScreen;
