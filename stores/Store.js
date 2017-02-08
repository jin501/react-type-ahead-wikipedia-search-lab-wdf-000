'use strict';

class Store {
  constructor(initialState) {
    this.state = initialState;
    this.listeners = [];
  }

  // ({state}) => {
  //   this.setState({state})
  addListener(listener) {
    this.listeners.push(listener);
   const removeListener = () => {
     this.listeners = this.listeners.filter(l => listener !== l)
   };
   return removeListener
  }
  // {
  //   [{title:desc:}, {}],
  //   updated: requested,
  // }
  setState(state) {
    this.state = state;
    for (const listener of this.listeners) {
      listener(state);
    }
  }

  getState() {
    return this.state
  }

}

module.exports = Store;
