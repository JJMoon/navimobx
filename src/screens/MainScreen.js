import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import PropTypes from 'prop-types';
import Interactable from 'react-native-interactable';


/**
* JSDOC : MainScreen
*/
@inject('store') @observer
class MainScreen extends Component {
  constructor(props) {
    super(props);
    console.log('\n\n\n MainScreen :: constructor \n\n\n');
  }

  onDrawerSnap = (prop) => {
    console.log('prop', prop);
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

        <Interactable.View
          horizontalOnly
          snapPoints={[{ x: 0 }, { x: 100 }, { x: -100 }, { x: -200 }]}
          onSnap={this.onDrawerSnap}
        >
          <View style={{ width: 300, height: 70, backgroundColor: '#99A' }} />
        </Interactable.View>

      </View>
    );
  }
}

MainScreen.wrappedComponent.propTypes = {
  navigation: PropTypes.shape().isRequired,
  store: PropTypes.shape().isRequired,
};

export default MainScreen;
