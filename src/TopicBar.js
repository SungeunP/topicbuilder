import React, { Component } from 'react';
import './TopicBar.css';
import './TopicBar_main.js';
import AddTrigger from './AddTrigger';
class TopicBar extends Component {

  // After DOM loaded
  componentDidMount(){

  }

  render() {

    console.log(document.getElementById("TopicBar_AddTrigger"));

    return (
      <div className="btn-line">
          <AddTrigger clickAddTrigger={this.props.clickAddTrigger}/>
          <button className="btn-custom btn-custom-success">임시 저장</button>
          <button className="btn-custom btn-custom-default">임시 저장 불러오기</button>
          <button className="btn-custom btn-custom-success">생성</button>
          <button className="btn-custom btn-custom-danger">나가기</button>
      </div>
    );
  }

}

export default TopicBar;