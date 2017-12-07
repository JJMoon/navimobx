import { observable, action } from 'mobx';

class Store {
  @observable item = 'This is an item.';
  @observable guide = 15;

  @action setItem(data) {
    this.item = data;
  }

  @action addGuide() {
    this.guide += 1;
    console.log(' guide ', this.guide);
  }

  @action screenChanged(prev, curn) {
    console.log('  \t\t\t\t  Store :: screen changed from', prev, curn);
  }
}
export default Store;
