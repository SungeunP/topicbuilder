import React , { Component , createContext} from 'react';
import { Map , List } from 'immutable';
const Context = createContext(); // Context를 생성

const { Provider , Consumer: QuestionListContextConsumer } = Context;

class QuestionListContextProvider extends Component {
  
  constructor(props){
    super(props);
  }

  state = {
    value : Map({
      questionList : List([])
    })
  }

  // actions 객체는 사용자 정의 객체임
  // 변화를 일으키는 함수들을 전달해줄 때, 함수 하나하나 전달하지 않고
  // 객체 하나로 전달하기 위함
  actions = {
    // 질문 추가
    addQuestion: () => {
      const {value} = this.state;
      this.setState({
        value: value.update('questionList', questionList => questionList.push(Map({
            title: "질문 " + value.get("questionList").size,
            trigger: "",
            previous: "",
            accessModifier: false,
            data: null,
            id : value.get("questionList").size
          }))
        )
      })
    },
    // 질문 수정
    editQuestion: (index, question) => {
      this._editQuestionInList(index,question);
    }
  }

  render(){
    const { state , actions } = this;
    const value = { state , actions};
    return (
      <Provider value={value}>
        {this.props.children}
      </Provider>
    )
  }

  // QuestionList 수정
  _editQuestionInList = (index,question_param) => {
    console.log("_editQuestionInList");
    console.log("_editQuestionInList");
    console.log("_editQuestionInList");
    console.log("_editQuestionInList");
    console.log("_edit  "+index);
    
    const {value} = this.state;
    const questionList_c = value.get("questionList");

    value.update("questionList", questionList => questionList.map(
      question => question.get("id") === index 
      ? {...question ,...question_param} : question
    ))
    console.log(this.state.value.get("questionList"));
  }
}

// :: HoC 를 사용
function useSample(WrappedComponent) {
  return function UseSample(props) {
    return (
      <QuestionListContextConsumer>
        {
          ({ state, actions }) => (
            <WrappedComponent
              value={state.value}
              addQuestion={actions.addQuestion}
            />
          )
        }
      </QuestionListContextConsumer>
    )
  }
}

export {
  QuestionListContextProvider,
  QuestionListContextConsumer,
  useSample
}