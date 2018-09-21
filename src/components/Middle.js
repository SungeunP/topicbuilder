import React, { Component } from 'react';
import TopicBar from './TopicBar';
import TopicInfo from './TopicInfo';
import QuestionMain from './QuestionMain';

import './Middle.css';

class Middle extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    console.log("MIDDLE RENDERED");
    return (
      <div className="col-sm-7 question-contents">
        <TopicBar />
        <TopicInfo />
        <QuestionMain />
      </div>
    );
  }
}

export default Middle;
