import React, { Component } from 'react';
import Calculator from './components/Calculator';
import Result from './components/Result';
import './components/calc.css'

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: ""
    }
  }

  onClick = button => {

    if (button === "=") {
      this.calculate()
    }
    else if (button === "AC") {
      this.reset()
    }
    else if (button === "CE") {
      this.backspace()
    }
    else {
      this.setState({
        result: this.state.result + button
      })
    }
  };


  calculate = () => {
    var checkResult = ''
    if (this.state.result.includes('--')) {
      checkResult = this.state.result.replace('--', '+')
    }
    else {
      checkResult = this.state.result
    }

    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(checkResult) || "") + ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      })

    }
  };

  reset = () => {
    this.setState({
      result: ""
    })
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  };

  render() {
    return (
      <div className="main">
        <table>
          <tbody>
            <tr>
              <td colSpan="4" >
                <Result result={this.state.result} />
              </td>
            </tr>
            <Calculator onClick={this.onClick} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;