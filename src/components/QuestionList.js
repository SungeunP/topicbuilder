import React, { Component, Fragment } from 'react';
import './QuestionList.css';
import { Map, List } from 'immutable';

import { SampleConsumer } from '../contexts/sample';
import { QuestionListContextProvider, QuestionListContextConsumer } from '../contexts/QuestionListContext';

import QL_Question from './QL_Question';
import QL_QuestionInput from './QL_QuestionInput';

class QuestionList extends Component {

  constructor(props) {
    super(props);

    // STATE
    this.state = {
      data: Map({
        questionList: this.props.questionList,
        selectedQuestion: null /* Map({
          title: "<겉 타이틀:str>",
          trigger: "<질문 내용 (실제 트리거):str>",
          previous: "<이전 질문:str>",
          accessModifier: false,
          data: null,
          id: null
        }) */
      })
    }
  }

  // 초기 값 설정
  componentDidMount() {
    const {data} = this.state;
    this.setState({
      data: data.set('questionList', this.props.questionList)
    })
  }

  render() {
    console.log("QuestionList rendered");
    const { data } = this.state;

    const QuestionList = this.props.questionList;
    console.log(data.get("selectedQuestion"));

    // QuestionList를 기반으로 컴포넌트 생성
    const list = QuestionList.map(
      (question, index) =>
        (<QL_Question question={question} setValue={this.props.setValue} />)
    );

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
  <QuestionListContextConsumer>
    {
      listContext => (
        <SampleConsumer>
          {
            ({actions_question}) => (
              <QuestionList questionList={listContext.state.value.get("questionList")} 
                            setValue={actions_question.setValue} />
            )
          }
        </SampleConsumer>
      )
    }
  </QuestionListContextConsumer>
)


export default QuestionListContainer;