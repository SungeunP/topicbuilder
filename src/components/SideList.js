import React, { Component, Fragment } from 'react';
import QuestionList from './QuestionList';
import ArrayList from './ArrayList';
import './SideList.css';

import { Map, List } from 'immutable';

class SideList extends Component {

  constructor(props) {
    super(props);

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

  /*_receiveQuestionData = (Question) => {
    this.props.QuestionDataReceive(Question);
  }*/

  _clickAddArray = (Array_obj) => {

  }

  render() {
    console.log("SIDELIST RENDERED");
    return (
      <div className="col-sm-2">
        <QuestionList QuestionList={this.state.data.get("QuestionList")} />
        <ArrayList clickAddArray={this._clickAddArray} 
                    ArrayObjList={this.state.data.get("ArrayObjList")}/>
      </div>
    );
  }
}

export default SideList;
