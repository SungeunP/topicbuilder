import React, { Component, Fragment } from 'react';
import QuestionList from './QuestionList';
import ArrayList from './ArrayList';
import './SideList.css';

import { Map, List } from 'immutable';

class SideList extends Component {

  constructor(props) {
    super(props);
    this.QuestionListRef = React.createRef();

  }

  state = {
    data : Map({
      QuestionList : List([]),
      ArrayObjList : List([])
    })
  }

  static defaultProps = {
    data : Map({
      QuestionList : List([]),
      ArrayObjList : List([])
    })
  }

  _receiveQuestionData = (Question) => {
    this.props.QuestionDataReceive(Question);
  }

  _clickAddArray = (Array_obj) => {

  }

  render() {
    return (
      <div className="col-sm-2">
        <QuestionList QuestionList={this.state.data.get("QuestionList")} 
                      ref={this.QuestionListRef}
                      QuestionReciver={this._receiveQuestionData}/>
        <ArrayList clickAddArray={this._clickAddArray} 
                    ArrayObjList={this.state.data.get("ArrayObjList")}/>
      </div>
    );
  }
}

export default SideList;