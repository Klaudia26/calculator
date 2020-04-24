import React, { Component } from 'react';
import Button from './Component/Button/Button';
import Input from './Component/Input/Input';
import ClearButton from './Component/ClearButton/ClearButton';
import * as math from 'mathjs';
import './App.scss';

class App extends Component {
  state = {
    value: '',
  };

  handleEqual = () => {
    this.setState({
      value: math.evaluate(this.state.value),
    });
  };

  handleClear = () => {
    this.setState({
      value: '',
    });
  };

  addToInput = (val) => {
    this.setState({
      value: this.state.value + val,
    });
  };
  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input value={this.state.value} />
          <div className="row">
            <Button addToInput={this.addToInput}>7</Button>
            <Button addToInput={this.addToInput}>8</Button>
            <Button addToInput={this.addToInput}>9</Button>
            <Button addToInput={this.addToInput}>/</Button>
          </div>
          <div className="row">
            <Button addToInput={this.addToInput}>4</Button>
            <Button addToInput={this.addToInput}>5</Button>
            <Button addToInput={this.addToInput}>6</Button>
            <Button addToInput={this.addToInput}>*</Button>
          </div>
          <div className="row">
            <Button addToInput={this.addToInput}>1</Button>
            <Button addToInput={this.addToInput}>2</Button>
            <Button addToInput={this.addToInput}>3</Button>
            <Button addToInput={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button addToInput={this.addToInput}>.</Button>
            <Button addToInput={this.addToInput}>0</Button>
            <Button addToInput={this.handleEqual}>=</Button>
            <Button addToInput={this.addToInput}>-</Button>
          </div>
          <ClearButton handleClear={this.handleClear}>Clear</ClearButton>
        </div>
      </div>
    );
  }
}

export default App;
