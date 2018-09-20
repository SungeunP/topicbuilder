import React , { Component , createContext} from 'react';

import {Map} from 'immutable';

const Context = createContext(); // Context를 생성

const { Provider , Consumer: SampleConsumer } = Context;

class SampleProvider extends Component {
  state = Map({
    value : "sample"
  })

  // actions 객체는 사용자 정의 객체임
  // 변화를 일으키는 함수들을 전달해줄 때, 함수 하나하나 전달하지 않고
  // 객체 하나로 전달하기 위함
  actions = {
    setValue: (value) => {
      this.setState({value});
    }
  }

  render(){
    const { state , actions } = this;
    const value = { state , actions}
    console.log("SAMPLE STATE",this.state.value);
    return (
      <Provider value={value}>
        {this.props.children}
      </Provider>
    )
  }
}

// :: HoC 를 사용
function useSample(WrappedComponent) {
  return function UseSample(props) {
    return (
      <SampleConsumer>
        {
          ({ state, actions }) => (
            <WrappedComponent
              value={state.value}
              setValue={actions.setValue}
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