import React from 'react';
import { inject, observer } from 'mobx-react/native';

/**
 * ParentView View
 */
// @inject('store') @observer
export default class ParentView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { screenName: this.props.navigation.state.routeName };
    console.log('\n\n\n ParentView :: constructor \n\n\n', this.props.navigation.state.routeName);
  }

  async componentWillMount() {
  }

  async componentDidMount() {
    // console.log('  ParentView ::  Component Did Mount ');
  }

  viewDidAppear() {
    console.log(`\t\t\t\t\t   ParentView :: viewDidAppear     >>>  ${this.state.screenName}  <<<     ..... `);
  }

  viewDidDisappear() {
    console.log(`\t\t\t\t\t   ParentView :: viewDidDisappear     >>>  ${this.state.screenName}  <<<     ..... `);
  }

  async componentWillUnmount() {
  }

  screenChanged = (pre, cur) => {
    // console.log('  Parent View :: ', pre, cur, ' I am ', this.state.screenName);
    if (this.state.screenName === pre) {
      this.viewDidDisappear();
    }
    if (this.state.screenName === cur) {
      this.viewDidAppear();
    }
  }
}
