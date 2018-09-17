import React, { Component, Fragment } from 'react';
import SideList from './SideList';
import Middle from './Middle';
import Preview from './Preview';
import Temp_sidebar from './temp_sidebar';
import Temp_header from './temp_header';
import { Map , List } from 'immutable';
import './App.css';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.SideListRef = React.createRef();
  }

  state = {
    data : Map({
      QuestionList : List([]),
      ArrayObjList : List([]),
      Current_Question : { // state re-render 를 위해
        data : Map({})
      }
    })
  }

  handleCreate = () => {
    if (document.getElementById("Question_input") === null ) { // Input
      this.SideListRef.current.QuestionListRef.current.setInputState(true); // state to on
      document.getElementById("Question_input").focus();
    } else { // remove Input
      this.SideListRef.current.QuestionListRef.current.setInputState(false); // state to off
    }
  }

  _QuestionDataReceive = (Question) => {
    console.log("Question data : ",Question);
    const { data } = this.state;

    // state.data.QuestionList += Question
    this.setState({
      data: data.update('Current_Question', Question => Question)
    })
    console.log(this.state.data.get("Current_Question"));
  }

  render() {
    console.log("App rendered");
    return (
      <Fragment>
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
                      QuestionDataReceive={this._QuestionDataReceive}/>
            <Middle clickAddTrigger={this.handleCreate} Current_Question={this.state.data.get("Current_Question")} />
            <Preview />
          </div>
        </div>
        </div>
        
      </Fragment>
    );
  }
}

export default App;
