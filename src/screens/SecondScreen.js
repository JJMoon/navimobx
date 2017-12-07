import React, { Component } from 'react';
import { ScrollView, Text, View, Button } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import PropTypes from 'prop-types';

/**
* JSDOC : APP
*/
@inject('store') @observer
class SecondScreen extends Component {
  componentDidMount() {
    console.log(' navigation key ', this.props.navigation.state.key);
  }

  render() {
    const { goBack } = this.props.navigation;

    return ( // marginTop: 100,
      <View style={{ flex: 100, alignSelf: 'stretch', backgroundColor: '#ABC' }}>
        <Text style={{ flex: 1 }}>This is the second screen.</Text>

        <Button
          style={{ flex: 1 }}
          title="Go back"
          onPress={() => goBack()}
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
