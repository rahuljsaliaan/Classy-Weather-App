import React from "react";

export class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleDecrement() {
    this.setState((curState) => {
      return { count: curState.count - 1 };
    });
    // this.setState({ count: 10 });
  }

  handleIncrement = () => {
    this.setState((curState) => {
      return { count: curState.count + 1 };
    });
    // this.setState({ count: 10 });
  };

  render() {
    const date = new Date("june 21 2027");
    date.getDate(date.getDate() + this.state.count);

    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
        <span>
          [{date.toDateString()}] [{this.state.count}]
        </span>
        {/*  this keyword will be pointing the this keyword that render method is pointing to which in this case is an instance of the Counter class */}
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}
