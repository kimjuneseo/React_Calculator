import React, { Component } from "react";
import "./App.css";


class App extends React.Component {
  state = {
    input: ""
  };

  addToInput = num => {
    // console.log({ input: this.state.input + num });
    this.setState({ input: this.state.input + num });
  };

  calculateResult = () => {
    this.setState({ input: eval(this.state.input) });
  };

  render() {
    return (
      <div>
        <input value={this.state.input} />
        <div>
          <button onClick={() => this.addToInput(9)}>9</button>
          <button onClick={() => this.addToInput(8)}>8</button>
          <button onClick={() => this.addToInput(7)}>7</button>
          <button onClick={() => this.addToInput("*")}>X</button>
        </div>
        <div>
          <button onClick={() => this.addToInput(6)}>6</button>
          <button onClick={() => this.addToInput(5)}>5</button>
          <button onClick={() => this.addToInput(4)}>4</button>
          <button onClick={() => this.addToInput("-")}>-</button>

        </div>
        <div>
          <button onClick={() => this.addToInput(3)}>3</button>
          <button onClick={() => this.addToInput(2)}>2</button>
          <button onClick={() => this.addToInput(1)}>1</button>
          <button onClick={() => this.addToInput("+")}>+</button>
        </div>
        <div>
          <button onClick={() => this.addToInput(0)}>0</button>
          <button onClick={() => this.addToInput(".")}>.</button>
          <button onClick={() => this.calculateResult()}>=</button>
          <button onClick={() => this.addToInput("/")}>/</button>
        </div>
        <div>
          <button onClick={() => this.setState({ input: "" })}>
            Clear
          </button>
        </div>
        <div></div>
      </div>
    );
  }
}

export default App;