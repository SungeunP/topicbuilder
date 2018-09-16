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
    if(e.key == 'Enter'){
       
    }
 }

  _onInputChange = (value) => {
    this.setState({
      name : value
    });
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
