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
      ArrayObjList: List([])
    })
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
              <Middle />
            </div>
          </div>
        </div>
      </AppProvider>
    );
  }
}

export default App;
