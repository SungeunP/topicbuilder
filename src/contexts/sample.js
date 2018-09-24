import React , { Component , createContext} from 'react';

import {Map} from 'immutable';

import { QuestionListContextConsumer } from '../contexts/QuestionListContext';

const Context = createContext(); // Context를 생성

const { Provider , Consumer: SampleConsumer } = Context;

class SampleProvider extends Component {
  state = {
    value : Map({
      title: "",
      trigger: "",
      previous: "",
      accessModifier: false,
      data: null,
      id: null
    })
  }

  // actions 객체는 사용자 정의 객체임
  // 변화를 일으키는 함수들을 전달해줄 때, 함수 하나하나 전달하지 않고
  // 객체 하나로 전달하기 위함
  actions_question = {
    // 기본 루트 setter
    setValue: (value) => {
      this.setState({value});
    },
    // 현재 질문의 값 갱신
    setInfo: (trigger,previous,accessModifier) => {
      console.log("sampleStore.setInfo!");
      const value = this.state.value
      this.setState({
        value : value.set("trigger", trigger),
        previous : value.set("previous", previous),
        accessModifier : value.set("accessModifier", accessModifier) 
      })
    },
    // QuestionListContext에 있는 리스트의 값 갱신
    editQuestion: (index, question) => { 
      this.props.editQuestion(index, question);
    }
  }

  render(){
    const { state , actions_question } = this;
    const value = { state , actions_question}
    console.log("SAMPLE STATE",this.state.value);
    return (
      <Provider value={value}>
        {this.props.children}
      </Provider>
    )
  }
}

const sampleStoreContainer = () => (
  <QuestionListContextConsumer>
    {
      ({actions}) => (
        <SampleProvider editQuestion={actions.setQuestion}>
        </SampleProvider>
      )
    }
  </QuestionListContextConsumer>
)

// :: HoC 를 사용
function useSample(WrappedComponent) {
  return function UseSample(props) {
    return (
      <SampleConsumer>
        {
          ({ state, actions_question }) => (
            <WrappedComponent
              value={state.value}
              setValue={actions_question.setValue}
              setInfo={actions_question.setInfo}
            />
          )
        }
      </SampleConsumer>
    )
  }
}

export {
  SampleProvider,
  SampleConsumer,
  useSample
}