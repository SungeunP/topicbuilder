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

  _addArrayObj = (data) => {

  }

  _clickAddArray = (Array_obj) => {
    console.log("Array add button clicked");
  }

  render() {
    console.log("SideList rendered");
    return (
      <div className="col-sm-2">
        <QuestionList QuestionList={this.state.data.get("QuestionList")} 
                      ref={this.QuestionListRef}/>
        <ArrayList clickAddArray={this._clickAddArray} 
                    ArrayObjList={this.state.data.get("ArrayObjList")}/>
      </div>
    );
  }
}

export default SideList;
