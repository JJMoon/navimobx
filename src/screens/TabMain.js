import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';

/**
* JSDOC : TabMain
*/
@inject('store') @observer
class TabMain extends Component {
  constructor(props) {
    super(props);
    const { goBack } = this.props.navigation;

    this.goback = goBack;
  }

  componentDidMount() {
    console.log(' navigation key ', this.props.navigation.state.key);
  }

  render() {
    const { navigate, goBack } = this.props.navigation;

    return (
      <View style={{ flex: 1, width: '100%', backgroundColor: '#EEB' }}>
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
