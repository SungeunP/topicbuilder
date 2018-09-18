import React, { Component, Fragment } from 'react';
import './QL_Question.css';

import { Map } from 'immutable';

class QL_Question extends Component {

  constructor(props) {
    super(props);
    /*data : Map({
      name : "",
      questionData : Map({}),
      id: 0
    }) */
  }

  static defaultProps = {
    qName: "질문",
    questionData: {},
    id: 0
  }

  _QuestionClicked = () => {
    let name = this.props.qName;
    let data = this.props.questionData;
    let qID = this.props.id;
    let Question = Map({
      name: name,
      data: data,
      id: qID
    });
    console.log(Question);
    this.props.onClickQuestion(Question);
  }

  render() {

    const {
      qName, questionData, id
    } = this.props;
    console.log(this._QuestionClicked);
    return (
      <li id={id} >
        <a onClick={this._QuestionClicked}>{qName}
          <button class="array-config-btn">
            <i class="fas fa-cog"></i>
          </button>
        </a>
      </li>
    )
  }
}


export default QL_Question;