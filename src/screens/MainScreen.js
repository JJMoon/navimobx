import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import PropTypes from 'prop-types';
import Interactable from 'react-native-interactable';

import SomeText from '../Compo/SomeText';

/**
 * JSDOC : MainScreen
 */
@inject('store')
@observer
class MainScreen extends Component {
  constructor(props) {
    super(props);
    console.log('\n\n\n MainScreen :: constructor \n\n\n');
    this.state = { counter: 0 };
  }

  onDrawerSnap = prop => {
    console.log('prop', prop);
  };

  onDragEvent = prop => {
    // console.log('onDragEvent', prop);
  };

  closeTheView = () => {
    console.log('close the view');
    this.intView.snapTo({ x: 0 });
  };

  componentWillMount() {
    console.log('\n\n MainScreen :: component Will Mount  >>> \n\n');
  }

  componentDidMount() {
    console.log('\n\n MainScreen :: component DidMount  >>> \n\n');
  }

  componentWillUnmount() {
    console.log('\n\n\n MainScreen :: component WillUnmount \n\n\n');
  }

  componentWillReceiveProps() {
    console.log(' \t\t MainScreen :: component Will Receive Props');
  }

  shouldComponentUpdate() {
    // 판단 식.
    console.log(' \t\t MainScreen :: shouldComponentUpdate');
    return this.state.counter % 4 !== 0;
  }

  componentWillUpdate() {
    console.log(' \t\t MainScreen :: component Will Update');
  }

  componentDidUpdate() {
    console.log(' \t\t MainScreen :: component Did Update ..... ..... ..... \n\n');
  }

  render() {
    console.log('\n MainScreen :: render  >>> \n');
    const { navigate } = this.props.navigation;
    const wUnit = 100,
      height = 70;

    return (
      <View style={{ flex: 1, backgroundColor: '#BFE' }}>
        <Button title="Show Navigate Object" onPress={() => console.log(' navigator ', this.props.navigation)} />

        <Button title="Go to Second Screen" onPress={() => navigate('Second')} />

        <Button title="Screen without Navigation Bar" onPress={() => navigate('SecondWithoutNavigationBar')} />

        <Button title="Go to Tab View" onPress={() => navigate('TabView')} />

        <Button title="Add ValGuide" onPress={() => this.props.store.addGuide()} />

        <Button title="Go go Drawer Screen" onPress={() => navigate('Drawer')} />

        <Button
          title={'Change State : ' + this.state.counter}
          onPress={() => this.setState({ counter: this.state.counter + 1 })}
        />
        <Button title={'Force Update'} onPress={() => this.forceUpdate()} />

        <SomeText title={'Title'} content={'Content from MainScreen'} />

        <View style={{ width: '100%', height, backgroundColor: '#0000' }}>
          <View style={{ position: 'absolute', flexDirection: 'row', width: '100%', height: 70 }}>
            <TouchableOpacity style={{ width: wUnit, height, backgroundColor: '#DA8' }} onPress={this.closeTheView} />
            <View style={{ flex: 1, height, backgroundColor: '#AAA' }} />
            <TouchableOpacity style={{ width: wUnit, height, backgroundColor: '#5DD' }} onPress={this.closeTheView} />
            <TouchableOpacity style={{ width: wUnit, height, backgroundColor: '#D5D' }} onPress={this.closeTheView} />
          </View>
          <Interactable.View
            ref={r => (this.intView = r)}
            horizontalOnly
            snapPoints={[{ x: 0 }, { x: wUnit }, { x: -wUnit }, { x: -2 * wUnit }]}
            onSnap={this.onDrawerSnap}
            onDrag={this.onDragEvent}
          >
            <View style={{ width: '100%', height, backgroundColor: '#99A' }} />
          </Interactable.View>
        </View>
      </View>
    );
  }
}

MainScreen.wrappedComponent.propTypes = {
  navigation: PropTypes.shape().isRequired,
  store: PropTypes.shape().isRequired,
};

export default MainScreen;
