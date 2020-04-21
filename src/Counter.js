import React, { Component } from 'react';

const getStateFromLocalStorage = () => {
  const storage = localStorage.getItem('counterState');
  console.log(storage);
  if (storage) return JSON.parse(storage);
  return { count: 0 };
};

const storeStateInLocalStorage = (state, updateDocumentTitle) => {
  localStorage.setItem('counterState', JSON.stringify(state));
  updateDocumentTitle();
  console.log(localStorage);
};

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = getStateFromLocalStorage();

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.updateDocumentTitle = this.updateDocumentTitle.bind(this);
    this.reset = this.reset.bind(this);
  }

  updateDocumentTitle() {
    const { count } = this.state;
    document.title = `Count: ${count}`;
  }

  increment() {
    this.setState(
      (state, props) => {
        const { max, step } = props;

        if (state.count >= max) return;
        return { count: state.count + step };
      },
      () => {
        storeStateInLocalStorage(this.state, this.updateDocumentTitle);
      },
    );
  }

  decrement() {
    this.setState({ count: this.state.count - 1 }, this.updateDocumentTitle);
  }

  reset() {
    this.setState({ count: 0 }, this.updateDocumentTitle);
  }

  render() {
    const { count } = this.state;
    return (
      <div className="Counter">
        <p className="count">{count}</p>
        <section className="controls">
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          <button onClick={this.reset}>Reset</button>
        </section>
      </div>
    );
  }
}

export default Counter;
