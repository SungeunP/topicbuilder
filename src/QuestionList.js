import React, { Component } from 'react';
import './QuestionList.css';
import { Map, List } from 'immutable';


import QL_Question from './QL_Question';
import QL_QuestionInput from './QL_QuestionInput';

class QuestionList extends Component {

  constructor(props) {
    super(props);

    this.setInputState = this.setInputState.bind(this);
  }

  // DEFAULTPROPS
  static defaultProps = {
    data: Map({
      QuestionList: List([
      ]),
      isInputMode: false
    })
  }

  // STATE
  state = {
    data: Map({
      QuestionList: List([]),
      isInputMode: false
    })
  }

  // 현재 Input 상태를 설정
  setInputState = (tf) => {
    this.setState({
      isInputMode: tf
    });
  }

  // STATE에 QUESTION을 추가
  addQuestion = (qName, qData) => {
    let id = 0;
    const { data } = this.state;

    // state.data.QuestionList += Question
    this.setState({
      data: data.update('QuestionList', QuestionList => QuestionList.push({
        id : data.get("QuestionList").size,
        qName: qName,
        questionData: qData
      }))
    })
  }

  // Before this.onBlurr
  // 네이티브한 onBlur가 있었나봄 중복되어서 이상하게 동작했었음
  onBlurr = (e) => {
    this._onBlurrEvent();
  }

  // Before this.onBlurr
  // method를 나눠서 범용성 있게 쓰도록 하였음 ( 임시 )
  _onBlurrEvent = () => {
    if (document.getElementById("Question_input").value == "") {
      this.setInputState(false);
    } else {

      // immutable로 수정
      this.addQuestion(document.getElementById("Question_input").value, {});
      //immutable로 수정

      this.setInputState(false);
    }
  }

  // QuestionList click event
  // parameter : Question Object
  _onClickQuestion = (Question) => {
    console.log("onClickQuestion ccc");
    console.log(Question.data.get("name"));
    console.log(Question.data.get("data"));

    this.props.QuestionReciver(Question);
  }

  render() {
    console.log("QuestionList rendered");
    const { data } = this.state;
    const QuestionList = data.get("QuestionList");
    // QuestionList를 기반으로 컴포넌트 생성
    const list = QuestionList.map(
      (question, index) =>
        (<QL_Question id={question.id} qName={question.qName} questionData={question.questionData} onClickQuestion={this._onClickQuestion} />)
    );
    return (
      <div className="question-list">
        <p className="list-header">
          <strong>질문 목록</strong>
          <span><button type="button" className="searchvar-btn"><i className="fas fa-search"></i></button></span>
          <span><button type="button" className="list-btn"><i className="fas fa-caret-down"></i></button></span>
          <span className="hidden previous-close-btn"><button type="button"><i className="fas fa-caret-down"></i></button></span>
        </p>
        <ul id="Question_List" className="list-contents">
          <li className="search"><input type="text" placeholder="검색어를 입력해 주십시오" /><input type="submit" value="검색" className="btn-custom btn-custom-black" /></li>
          {
            this.state.isInputMode === true && (<QL_QuestionInput onBlurr={this.onBlurr} onEnter={this._onBlurrEvent} />)
          }
          {
            list.size === 0 ? (<li id="nonQuestionData">
              <a href="">질문이 없습니다.
                                <button className="array-config-btn">
                  <i className="fas fa-cog"></i>
                </button>
              </a>
            </li>)
              :
              (list)
          }
        </ul>
      </div>
    )
  }
}


export default QuestionList;