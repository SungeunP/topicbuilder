import React, { Component, Fragment } from 'react';
import './QL_Question.css';

import { Map } from 'immutable';

import { SampleProvider, SampleConsumer } from '../contexts/sample';

class QL_Question extends Component {

  constructor(props) {
    super(props);
    console.log(this.props.setValue);
    this.state = {
      data: Map({
        title: "",
        trigger: "",
        previous: "",
        accessModifier: false,
        data: null,
        id: null
      }),
      actions : Map({
        setValue : this.props.setValue
      })
    }
    console.log(this.state);
  }

  _QuestionClicked = () => {
    console.log(this.state.actions);
    this.state.actions.get("setValue")(this.state.data);
    console.log("setValue! ");
  }

  componentDidMount(){
    this.setState({
      data : this.props.question,
      actions : Map({
        setValue: this.props.setValue
      })
    })
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
/*
const QL_QuestionContainer = () => (
  <SampleConsumer>
    {
      sample => (
        <QL_Question setValue={sample.value.actions.setValue} question={this.props.question} />
      )
    }
  </SampleConsumer>
)
*/

const QL_QuestionContainer = () => (
  <SampleConsumer>
    {
      sample => (
        <QL_Question question={this.props.question} setValue={this.props.setValue} />
      )
    }
  </SampleConsumer>
)

export default QL_Question;