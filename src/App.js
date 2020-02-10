import React, { Component } from "react";
import "./App.css";
import Result from "./components/Result";

class App extends Component {
  state = { result: "" };
  clear = () => {
    this.setState({
      result: ""
    });
  };

  calculate = () => {
    const newResult = this.state.result;
    this.setState({
      result: eval(newResult).toString()
    });
  };

  dot = () => {
    const array = this.state.result.split(" ");
    const lastString = array[array.length - 1];
    if (lastString.indexOf(".") === -1) {
      this.setState({
        result: this.state.result + "."
      });
    }
  };

  onClick = button => {
    if (button === "C") {
      this.clear();
    } else if (button === "=") {
      this.calculate();
    } else if (button === ".") {
      this.dot();
    } else {
      this.setState({
        result: this.state.result + button
      });
    }
  };
  render() {
    return (
      <div className="App">
        <h1>Calculator</h1>
        <Result result={this.state.result} onClick={this.onClick} />
      </div>
    );
  }
}

export default App;
