import React, { Component } from 'react';
import TopicBar from './TopicBar';
import TopicInfo from './TopicInfo';
import QuestionMain from './QuestionMain';
import './Middle.css';
class Middle extends Component {
  // After DOM loaded
  componentDidMount(){
    console.log(this.props.clickAddTrigger);
  }
  render() {
    return (
      <div className="col-sm-7 question-contents">
        <TopicBar clickAddTrigger={this.props.clickAddTrigger}/>
        <TopicInfo />
        <QuestionMain Current_Question={this.props.Current_Question} />
      </div>
    );
  }
}

export default Middle;
