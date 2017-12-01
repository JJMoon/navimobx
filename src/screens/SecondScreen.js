import React, { Component } from 'react';
import { ScrollView, Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';

/**
* JSDOC : APP
*/
class SecondScreen extends Component {
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
        <View style={{ flex: 10, backgroundColor: '#CBA' }} />
      </View>
    );
  }
}

SecondScreen.propTypes = {
  navigation: PropTypes.shape().isRequired,
};

export default SecondScreen;
