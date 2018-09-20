import React , { Component , createContext} from 'react';
import { Map , List } from 'immutable';
const Context = createContext(); // Context를 생성

const { Provider , Consumer: questionListContextConsumer } = Context;

class questionListContextProvider extends Component {
  state = {
    value : Map({
      questionList : List([])
    })
  }

  // actions 객체는 사용자 정의 객체임
  // 변화를 일으키는 함수들을 전달해줄 때, 함수 하나하나 전달하지 않고
  // 객체 하나로 전달하기 위함
  actions = {
    addQuestion: (data) => {
      const {value} = this.state;
      this.setState({
        value: value.update('questionList', questionList => questionList.push(Map({
          title: "질문 " + data.get("questionList").size,
          trigger: "",
          previous: "",
          accessModifier: false,
          data: null,
          id : data.get("questionList").size
      })))
      })
    }
  }

  render(){
    const { state , actions } = this;
    const value = { state , actions}
    return (
      <Provider value={value}>
        {this.props.children}
      </Provider>
    )
  }
}

export {
  questionListContextProvider,
  questionListContextConsumer
}