import React, { Component } from 'react';
import { ScrollView, Text, View, Button } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import PropTypes from 'prop-types';

/**
* JSDOC : APP
*/
@inject('store') @observer
class DrawerLeft extends Component {
  constructor(props) {
    super(props);
    console.log('\n\n\n SecondScreen : Second Screen :: constructor \n\n\n');
  }

  componentWillMount() {
    console.log('\n\n\n SecondScreen : Second Screen :: componentWillMount \n\n\n');
  }

  componentDidMount() {
    console.log('\n\n\n SecondScreen : Second Screen :: componentDidMount Did >>>');
    console.log(' navigation key ', this.props.navigation.state.key);
  }

  componentWillUnmount() {
    console.log('\n\n\n SecondScreen : Second Screen :: componentWillUnmount \n\n\n');
  }

  render() {
    return ( // marginTop: 100,
      <View style={{ flex: 100, alignSelf: 'stretch', backgroundColor: '#FAF' }}>

        <Text style={{ margin: 10, fontSize: 20, textAlign: 'center' }}>Drawer Left</Text>
        <Button
          title="Add ValGuide"
          onPress={() => this.props.store.addGuide()}
        />
      </View>
    );
  }
}

export default DrawerLeft;
