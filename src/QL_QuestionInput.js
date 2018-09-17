import React, { Component, Fragment } from 'react';
import './QL_QuestionInput.css';


class QL_QuestionInput extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name : ""
    }

    this.keyPress = this.keyPress.bind(this);

  }

  // QuestionInput Enter event
  keyPress(e){
    if(e.key == 'Enter'){ // 임시로 Core메소드를 나누어서 실제 동작하는 함수는 묶어두었음
      this.props.onEnter();
    }
 }

  _onInputChange = (value) => {
    console.log(value);
    this.setState({
      name : value
    });
    console.log(this.state.name);
  }

  render() {
    return (
      <input id="Question_input" type="text" 
      onBlur={this.props.onBlurr}
      value={this.state.name}
      onKeyPress={this.keyPress}
      onChange={e => this._onInputChange(e.target.value)}
      placeholder="이름 입력" />
    );
  }
}

export default QL_QuestionInput;
