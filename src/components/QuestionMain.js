import React, { Component, Fragment } from 'react';
import './QuestionMain.css';

import QuestionData from './QuestionData';
import QuestionInfo from './QuestionInfo';

import { Map, List } from 'immutable';
import { SampleConsumer } from '../contexts/sample';
class QuestionMain extends Component {

  constructor(props) {
    super(props);

    // SET Current_Question
    /* this._SetQuestion = (Question) => {
      console.log("QUESTION MAIN RECEIVED QUESTION", Question);
      const { data } = this.state;
      this.setState({
        data: Question
      });
    } */

    this.state = {
      data: Map({})/*Map({
        title: "<겉 타이틀:str>",
       trigger: "<질문 내용 (실제 트리거):str>",
       previous: "<이전 질문:str>",
       accessModifier: false,
       data: null,
       id: null
     })*/
    }
  }

  static defaultProps = {
    question: null
  }

  render() {
    console.log("QUESTION MAIN RENDERED");

    // state의 data 객체
    const { data } = this.state;

    // sampleConsumer에서 받아온 question 객체
    const { question } = this.props.value;

    let name = null;

    if (data != null) {
      name = data.get("name");
    }

    if (this.props.Current_Question != undefined) {
      if (this.props.Current_Question.size != 0) {
        const data_outer = this.props.Current_Question.get("data"); // outer data key
      }
    }

    // 선택된 질문이 없을 시 none 있을 시 block
    const containerStyle = {
      display:
        data.keys()._stack === undefined ? "none" :
          data.keys()._stack.node.entries.length === 0 ? "none" : "block"
    }

    return (
      <Fragment>
        <SampleConsumer>
          {
            (sample) => (
              <div style={containerStyle} className="topic-contents">
                <QuestionInfo trigger={sample.state.value.trigger}
                  previous={sample.state.value.previous}
                  accessModifier={sample.state.value.accessModifier} />
                <QuestionData />
              </div>
            )
          }
        </SampleConsumer>

      </Fragment>
    );
  }
}

export default QuestionMain;