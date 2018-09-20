import React, { Component, Fragment } from 'react';
import SideList from './components/SideList';
import Middle from './components/Middle';
import Preview from './components/Preview';
import Temp_sidebar from './components/temp_sidebar';
import Temp_header from './components/temp_header';

import { SampleProvider } from './contexts/sample';
import { QuestionListContextProvider } from './contexts/QuestionListContext';

import { Map, List } from 'immutable';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    data: Map({
      QuestionList: List([]),
      ArrayObjList: List([]),
      Current_Question: Map({ // state re-render 를 위해
        data: Map({})
      })
    })
  }

  _QuestionDataReceive = (Question) => {
    const { data } = this.state;

    let name = Question.get("name");
    let qData = Question.get("data");
    let qID = Question.get("id");
    let obj_a = Map({
      name: name,
      data: qData,
      id: qID
    })

    // current.asdfasdf
    this.MiddleRef.current.QuestionMainRef.current._SetQuestion(obj_a);

    // state.data.QuestionList += Question
    /* this.setState({
      data: data.update('Current_Question', (name,data) => {
        return Question;
      })
    })
    console.log(this.state.data.get("Current_Question")); */
  }


  render() {

    // 현재 이 앱의 Provider들
    const AppProvider = ({ contexts, children }) => contexts.reduce(
      (prev, context) => React.createElement(context, {
        children: prev
      }),
      children
    );

    console.log("App rendered");
    const data_outer = this.state.data.get("Current_Question");
    return (
      <AppProvider contexts={[SampleProvider, QuestionListContextProvider]} >
        <div className="container-fluid">
          <div className="row">
            <Temp_header />
          </div>
          <div className="row">
            <Temp_sidebar />
          </div>
          <div className="contents col-sm-12">
            <div className="row" > {/* style="position: relative; z-index: 100;" */}
              <SideList QuestionList={this.state.data.get("QuestionList")}
                ArrayObjList={this.state.data.get("ArrayObjList")}
                ref={this.SideListRef}
                QuestionDataReceive={this._QuestionDataReceive} />
              <Middle clickAddTrigger={this.handleCreate}
                Current_Question={data_outer.get("data")}
                ref={this.MiddleRef} />
              <Preview />
            </div>
          </div>
        </div>
      </AppProvider>
    );
  }
}

export default App;
