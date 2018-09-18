import React, { Component } from 'react';
import './QuestionMain.css';

import QuestionData from './QuestionData';
import QuestionInfo from './QuestionInfo';

import { Map, List } from 'immutable';

class QuestionMain extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: Map({
        Current_Question: Map({
          name: "",
          data: Map({}),
          id: ""
        })
      }),
      input: Map({
        name: ""

      })
    }
    this.QuestionInfoRef = React.createRef();
  }

  // SET Current_Question
  _SetQuestion = (Question) => {

    console.log("setting Question data! ", Question);

    const { data } = this.state;

    this.QuestionInfoRef.current._SetQuestionInfo(Map({
        name: Question.get("name"),
        previous: "",
        accessModifier: null
      })
    );

  }

  // state.update 로직 추가해야함

  render() {
    console.log("QuestionMain render! received data is ", this.state.data.get("Current_Question"));
    const { data } = this.state;
    const cq = data.get("Current_Question");
    console.log("cq data : ", cq);
    const name = cq.get("name");
    console.log("cq.name : ", name);
    if (this.props.Current_Question != undefined) {
      if (this.props.Current_Question.size != 0) {
        const data_outer = this.props.Current_Question.get("data"); // outer data key
        console.log(data_outer);
        console.log("name data is ", data_outer.keys());
        console.log("name data is ", data_outer.get("name"));
        console.log("name data is ", data_outer.get("data"));
      }
    }

    return (
      <div className="topic-contents">
        <QuestionInfo ref={this.QuestionInfoRef}/>
        <QuestionData />
      </div>
    );
  }
}

export default QuestionMain;