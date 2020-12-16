import React, { Component } from "react";
import "./App.css";
import Buttons from "./Buttons/Buttons"
import Result from "./Result/Result"


class App extends Component {

  state = {
    result: '' 
  }

 buttonPressed = buttonName => {

    if(buttonName === "=") {
      this.calculate()
    }

    else if(buttonName === "C") {
      this.reset() 
    } else if(buttonName == "CE") {
      this.backspace()
    } else {
      this.setState({
        result: this.state.result +  buttonName
      })
    }
  }

  reset = () => {
    this.setState({
      result: ""
    })
  }

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  }

 calculate = () => {
   try {this.setState({
     result: eval(this.state.result)
   }); 
   } catch (e) {
      this.setState({
        result: "error"
      })
   }
 }

  render() {
    return (
      <div className="App">
        <div className="calc-body">
        <Result result={this.state.result} />
        <Buttons buttonPressed={this.buttonPressed}/>
        </div>
       
      </div>
    );
  }
}

export default App;
