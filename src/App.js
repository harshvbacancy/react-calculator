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
    else if(buttonName=== "x"){
      let result = this.state.result;
      let length = result.length;
      result = result.toString().slice(0, length-1);
      this.setState({
        result: result
      })

    } else if(buttonName === "C") {
      this.reset() 
    } else if(buttonName == "CE") {
      this.backspace()
    } else if(buttonName == "%") {
      this.percentage()  

    } else if(buttonName == "SQRT") {
      this.squareRoot() 
    } else if(buttonName == "SQ") {
      this.square()
    }  else {
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
   if(this.state.result === "") {
     alert("Enter number")
   } else {
    try {this.setState({
      result: eval(this.state.result)
    }); 
    } catch (e) {
        this.setState({
          result: "error"
        })
    }
  } 
 }

 square = () => {
  let sq = eval(this.state.result);
  sq *= sq;
  this.setState({
    result: sq
  })
 }
 squareRoot = () => {
  let sqrt = eval(this.state.result);
  sqrt = Math.sqrt(sqrt);
  this.setState({
    result: sqrt
  })
 }

 percentage = () => {
  let mul = eval(this.state.result);
  let per= mul/100 
  this.setState({
    result: per
  })
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
