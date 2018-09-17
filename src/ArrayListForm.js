import React, { Component, Fragment } from 'react';
import './ArrayListForm.css';

import { Map, List } from 'immutable';

class ArrayListForm extends Component {
  constructor(props) {
    super(props);

    this._onNameInputChange = this._onNameInputChange.bind(this);
    this._onValueInputChange = this._onValueInputChange.bind(this);
  }

  state = {
    data : Map({
      name : "",
      value : ""
    })
  }

  // 현재 setstate가 전체 state를 대상으로 하여 name이나 value 중 마지막으로 갱신 된것만 들어감.
  // Name onChanged
  _onNameInputChange = (value) => {
    const { data } = this.state;

    this.setState({
      data: data.set("name",value)
    });

    console.log("name changed : " + this.state.data.get("name"));
    if (this.state.data.get("name") == "") {
      console.log("BLANK");
    }
  }

  // Value onChanged
  _onValueInputChange = (value) => {
    const { data } = this.state;

    this.setState({
      data: data.set("value",value)
    });

    console.log("value changed : " + this.state.data.get("value"));
    if (this.state.data.get("value") == "") {
      console.log("BLANK");
    }
  }
  
  // ArrayObj추가 이벤트 발생
  clickAddArray = () => {
    console.log(this.state.data.get("name"));
    console.log(this.state.data.get("value"));
    this.props.AddArrayObj(this.state.data.get("name"),this.state.data.get("value"));
  }

  render() {
    return (
      <ul>
        <li className="array-config-title">
          <strong>개체명</strong>
          <span className="btn-line">
            <button onClick={this.clickAddArray} className="btn-custom btn-custom-success add-array-btn">추가</button>
            <button className="btn-custom btn-custom-default reset-array-btn">취소</button>
          </span>
        </li>
        <li className="array-name">
          <input type="text"
            name = "name"
            value={this.state.data.get("name")}
            onChange={e => this._onNameInputChange(e.target.value)}
            placeholder="Array 이름" />
        </li>
        <li className="array-config-title"><strong>개체 목록</strong></li>
        <li><textarea name="value"
          id=""
          cols="28"
          rows="2"
          placeholder="Value"
          value={this.state.data.get("value")}
          className="array-value"
          onChange={e => this._onValueInputChange(e.target.value)} />
        </li>
      </ul>
    );
  }
}

export default ArrayListForm;
