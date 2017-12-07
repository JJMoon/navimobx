import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import PropTypes from 'prop-types';

/**
* JSDOC : MainScreen
*/
@inject('store') @observer
class MainScreen extends Component {
  constructor(props) {
    super(props);
    console.log('\n\n\n MainScreen :: constructor \n\n\n');
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={{ flex: 1, backgroundColor: '#BFE' }}>

        <Button
          title="Show Navigate Object"
          onPress={() => console.log(' navigator ', this.props.navigation)}
        />

        <Button
          title="Go to Second Screen"
          onPress={() => navigate('Second')}
        />

        <Button
          title="Screen without Navigation Bar"
          onPress={() => navigate('SecondWithoutNavigationBar')}
        />

        <Button
          title="Go to Tab View"
          onPress={() => navigate('TabView')}
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
