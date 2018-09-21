import React, { Component, Fragment } from 'react';
import './QuestionInfo.css';

import { Map, List } from 'immutable';

import { SampleConsumer } from '../contexts/sample';

class QuestionInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: Map({
        trigger: this.props.value.get("trigger"),
        previous: this.props.value.get("previous"),
        accessModifier: this.props.value.get("accessModifier")
      })
    }
  }

  // 초기 값 설정
  componentDidMount() {

  }

  // SET Current_Question
  _SetQuestionInfo = (QuestionInfo) => {
    console.log("QuestInfo Question data! ", QuestionInfo);

    const { data } = this.state;

    let questionName = QuestionInfo.get("name");
    let previous = QuestionInfo.get("previous");
    let AccessModifier = QuestionInfo.get("accessModifier");

    let obj = Map({
      QuestionName: questionName,
      Previous: previous,
      AccessModifier: AccessModifier
    });
    console.log(obj);
    this.setState({
      data: data.set('trigger', obj)
    })
  }

  // Current Info update to sampleStore
  _currentInfoUpdate2Store = (trigger, previous, accessModifier) => {
    this.props.setInfo(trigger,
      previous,
      accessModifier);
  }

  // Question changed event //
  _onQuestionInputChange = (value) => {
    console.log(value);
    const { data } = this.state;

    this._currentInfoUpdate2Store(value, data.get("previous"), data.get("accessModifier"));
  }

  // Previous changed event //
  _onPreviousInputChange = (value) => {
    console.log(value);
    const { data } = this.state;

    this._currentInfoUpdate2Store(data.get("trigger"), value, data.get("accessModifier"));
  }

  // Access Modifier changed event
  _onAccessInputChange = (value) => {
    console.log(value);
    const { data } = this.state;

    this._currentInfoUpdate2Store(data.get("trigger"), data.get("previous"), value);
  }


  render() {
    console.log("Question Info Rendered");
    console.log("info state : ", this.state.data);
    return (
      <Fragment>
        <div className="previous-list hidden">
          <h2>이전 질문 목록</h2>
          <ul>

          </ul>
        </div>
        <ul>

          <li><span>질문</span>
            <input className="question" type="text"
              value={this.props.value.get("trigger")}
              onChange={e => this._onQuestionInputChange(e.target.value)}
              placeholder="질문을 입력해주십시오" />
          </li>

          <li className="previous"><span>이전 질문</span>
            <input type="text" 
              placeholder="이전 질문을 선택해주십시오"
              value={this.props.value.get("previous")}
              onChange={e => this._onQuestionInputChange(e.target.value)}
              readOnly />
            <button className="delete-previous-btn">
              <i className="fas fa-times"></i>
            </button>
          </li>

          <li className="question-status">
            <span>접근 허용 여부<button className="help-btn"><i className="fas fa-question-circle"></i></button></span>
            <p className="hidden">접근 허용 여부 도움말</p>
            <input type="checkbox" id="status-public" value={this.props.value.get("accessModifier")} />
            <label for="status-public" className="checkbox"><span></span>공개</label>
          </li>

          <li><hr /></li> {/* style="border: 0px; border-bottom: 1px solid #ccc; margin: 0px;" */}

        </ul>
      </Fragment>
    );
  }
}

const QuestionInfoContainer = () => (
  <SampleConsumer>
    {
      ({ state, actions }) => (
        <QuestionInfo setInfo={actions.setInfo} value={state.value} />
      )
    }
  </SampleConsumer>
)

export default QuestionInfoContainer;