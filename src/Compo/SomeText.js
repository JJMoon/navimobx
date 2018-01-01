import React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';

/**
 * Some Text
 */
export default class SomeText extends React.Component {
  constructor(props) {
    super(props);
    console.log('\n\n\n SomeText :: constructor \n\n\n');
  }

  componentWillMount() {
    console.log('\n\n SomeText :: component Will Mount  >>> \n\n');
  }

  componentDidMount() {
    console.log('\n\n SomeText :: component DidMount  >>> \n\n');
  }

  componentWillUnmount() {
    console.log('\n\n\n SomeText :: component WillUnmount \n\n\n');
  }

  componentWillReceiveProps() {
    console.log(' \t\t SomeText :: component Will Receive Props');
  }

  shouldComponentUpdate() {
    // 판단 식.
    console.log(' \t\t SomeText :: shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    console.log(' \t\t SomeText :: component Will Update');
  }

  componentDidUpdate() {
    console.log(' \t\t SomeText :: component Did Update ..... ..... ..... \n\n');
  }

  render() {
    console.log('\n SomeText :: render  >>> \n');
    const { title, content } = this.props;
    return (
      <View>
        <Text style={{ fontSize: 15 }}>{title}</Text>
        <Text style={{ fontSize: 10 }}>{content}</Text>
      </View>
    );
  }
}
