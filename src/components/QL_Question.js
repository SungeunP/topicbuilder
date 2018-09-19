import React, { Component, Fragment } from 'react';
import './QL_Question.css';

import { Map } from 'immutable';

class QL_Question extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data : this.props.question
    }
    console.log(this.state.data);
  }

  _QuestionClicked = () => {
    this.props.onClickQuestion(this.state.data);
  }


  /*
  title: "질문 " + data.get("questionList").size,
        trigger: "",
        previous: "",
        accessModifier: false,
        data: null,
        id : data.get("questionList").size
  */
  render() {
    const {data} = this.state;
    return (
      <li id={this.state.data.get("id")} >
        <a onClick={this._QuestionClicked}>{this.state.data.get("title")}
          <button className="array-config-btn">
            <i className="fas fa-cog"></i>
          </button>
        </a>
      </li>
    )
  }
}


export default QL_Question;