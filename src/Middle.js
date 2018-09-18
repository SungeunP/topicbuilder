import React, { Component } from 'react';
import TopicBar from './TopicBar';
import TopicInfo from './TopicInfo';
import QuestionMain from './QuestionMain';
import './Middle.css';

import { Map , List } from 'immutable';

class Middle extends Component {

  constructor(props) {
    super(props);
    this.QuestionMainRef = React.createRef();
  }

  // After DOM loaded
  componentDidMount(){
    console.log(this.props.clickAddTrigger);
  }

  render() {
    return (
      <div className="col-sm-7 question-contents">
        <TopicBar clickAddTrigger={this.props.clickAddTrigger}/>
        <TopicInfo />
        <QuestionMain ref={this.QuestionMainRef} /> { /* Current_Question={this.props.Current_Question.get("data")} */}
      </div>
    );
  }
}

export default Middle;
