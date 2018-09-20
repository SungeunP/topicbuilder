import React, { Component, Fragment } from 'react';
import './QuestionList.css';
import { Map, List } from 'immutable';

import { SampleConsumer } from '../contexts/sample';
import { questionListContextProvider, questionListContextConsumer } from '../contexts/questionListContext';

import QL_Question from './QL_Question';
import QL_QuestionInput from './QL_QuestionInput';

class QuestionList extends Component {

  constructor(props) {
    super(props);

    this.setInputState = this.setInputState.bind(this);

    // STATE에 QUESTION을 추가
    // 안쓰임안쓰임안쓰임안쓰임안쓰임안쓰임안쓰임
    this.addQuestion = () => {
      const { data } = this.state;

      // state.data.QuestionList += Question
      this.setState({
        data: data.update('questionList', questionList => questionList.push(Map({
          title: "질문 " + data.get("questionList").size,
          trigger: "",
          previous: "",
          accessModifier: false,
          data: null,
          id: data.get("questionList").size
        })))
      })
    }

    // STATE
    this.state = {
      data: Map({
        questionList: this.props.questionList,
        selectedQuestion: Map({
          title: "<겉 타이틀:str>",
          trigger: "<질문 내용 (실제 트리거):str>",
          previous: "<이전 질문:str>",
          accessModifier: false,
          data: null,
          id: null
        })
      })
    }
  }


  // QuestionList click event
  // parameter : Question Object
  _onClickQuestion = (Question) => {
    console.log("onClickQuestion ccc");
    console.log(Question.get("title"));
    console.log(Question.get("data"));
    const { data } = this.state;
    const selectedQuestion = data.get("selectedQuestion");
    if (selectedQuestion != null) { // 초기 null 처리
      if (selectedQuestion.id == Question.get("id")) {
        // selection release
        return;
      }
    }

    // SET state
    this.setState({
      data: data.set('selectedQuestion', Question)
    })

    // state에 올린 선택된 질문을 store.setValue
    this.props.actions.setValue(this.state.data.get("selectedQuestion"));

    console.log(this.state);
  }

  render() {
    console.log("QuestionList rendered");
    const { data } = this.state;
    const QuestionList = data.get("questionList");
    console.log(data.get("selectedQuestion"));
    // QuestionList를 기반으로 컴포넌트 생성
    const list = QuestionList.map(
      (question, index) =>
        (<QL_Question question={question} onClickQuestion={this._onClickQuestion} />)
    );
    console.log(list);

    return (
      <Fragment>
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
              list.size === 0 ? (<li id="nonQuestionData">
                <a href="">
                  질문이 없습니다.
                  <button className="array-config-btn">
                    <i className="fas fa-cog"></i>
                  </button>
                </a>
              </li>)
                : (list)
            }
          </ul>
        </div>
      </Fragment>
    )
  }
}

const QuestionListContainer = () => (
  <questionListContextConsumer>
    {
      listContext => (
        <SampleConsumer>
          {
            sampleContext => (
              <div>adfdafdsdfsfdsfds</div>
            )
          }
        </SampleConsumer>
      )
    }
  </questionListContextConsumer>
)


export default QuestionListContainer;