import React, { Component, Fragment } from 'react';
import './QuestionMain.css';

import QuestionData from './QuestionData';
import QuestionInfo from './QuestionInfo';

import { SampleConsumer } from '../contexts/sample';
class QuestionMain extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: this.props.value
    }
  }

  componentDidMount() {
    this.setState({
      data: this.props.value
    })
  }

  render() {
    console.log("QUESTION MAIN RENDERED");

    return (
      <div className="topic-contents">
        <QuestionInfo trigger={this.props.value.get("trigger")}
          previous={this.props.value.get("previous")}
          accessModifier={this.props.value.get("accessModifier")} />
        <QuestionData />
      </div>
    );
  }
}

const QuestionMainContainer = () => (
  <SampleConsumer>
    {
      // ID Null 체크
      ({ state }) => (
        state.value.get("id") === null ? <div></div> : <QuestionMain value={state.value} />
      )
    }
  </SampleConsumer>
)



export default QuestionMainContainer;