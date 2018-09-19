import React, { Component, Fragment } from 'react';
import './QuestionMain.css';

import QuestionData from './QuestionData';
import QuestionInfo from './QuestionInfo';

import { Map, List } from 'immutable';
import { SampleConsumer, SampleProvider } from './sampleStore';
class QuestionMain extends Component {

  constructor(props) {
    super(props);

    // SET Current_Question
    this._SetQuestion = (Question) => {
      console.log("QUESTION MAIN RECEIVED QUESTION", Question);
      const { data } = this.state;
      this.setState({
        data: Question
      });
    }

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

  // state.update 로직 추가해야함

  render() {
    console.log("QUESTION MAIN RENDERED");
    const { data } = this.state;
    // const cq = data.get("Current_Question");
    let name = null;
    if (data != null) {
      name = data.get("name");
    }
    if (this.props.Current_Question != undefined) {
      if (this.props.Current_Question.size != 0) {
        const data_outer = this.props.Current_Question.get("data"); // outer data key
        console.log(data_outer);
        console.log("name data is ", data_outer.keys());
        console.log("name data is ", data_outer.get("name"));
        console.log("name data is ", data_outer.get("data"));
      }
    }

    const containerStyle = {
      display:
        data.keys()._stack === undefined ? "none" :
          data.keys()._stack.node.entries.length === 0 ? "none" : "block"
    }

    const storeAction = {
      setQuestion : this._SetQuestion
    }

    return (
      <Fragment>
        <SampleProvider action={storeAction} >
        </SampleProvider>
        <SampleConsumer>
          {
            (store) => {
              JSON.stringify(store)
              console.log(store);
            }
          }
        </SampleConsumer>
        <div style={containerStyle} className="topic-contents">
          <SampleConsumer>
            {
              ({state , actions}) => (
                <QuestionInfo trigger={state.value} // 임시로 title
                              previous={state.value}
                              accessModifier={state.value} />
              )
            }
          </SampleConsumer>
          <QuestionData />
        </div>
      </Fragment>
    );
  }
}

export default QuestionMain;