import { observable, action } from 'mobx';
import _ from 'lodash';

class Store {
  @observable item = 'This is an item.';
  @observable guide = 15;
  @observable arrScreenChangedDelegate = [];

  @action setItem(data) {
    this.item = data;
  }

  @action addGuide() {
    this.guide += 1;
    console.log(' guide ', this.guide);
  }

  @action addDelegate(obj) {
    this.arrScreenChangedDelegate.push(obj);
    console.log('\t\t\t\t Mobx Store :: Added ', this.arrScreenChangedDelegate);
  }

  @action removeDelegate(obj) {
    console.log('\t\t\t\t Mobx Store ::  removeDelegate   before ', this.arrScreenChangedDelegate.length);
    _.remove(this.arrScreenChangedDelegate, o => obj === o);
    console.log('\t\t\t\t Mobx Store ::  removeDelegate   after: ', this.arrScreenChangedDelegate.length);
  }

  @action screenChanged(prev, curn) {
    // console.log('  \t\t\t\t\t\t\t >>>>  Store :: screen changed from :::    ', prev, ' >>>> ', curn,
    //   this.arrScreenChangedDelegate.length);
    for (const mth of this.arrScreenChangedDelegate) {
      // console.log(mth);
      mth(prev, curn);
    }
    // this.arrScreenChangedDelegate.every(k => k(prev, curn));
  }
}
export default Store;
