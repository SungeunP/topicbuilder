import React, { Component } from 'react';
import TopicBar from './TopicBar';
import TopicInfo from './TopicInfo';
import TopicMain from './TopicMain';
import './Middle.css';
class Middle extends Component {
  // After DOM loaded
  componentDidMount(){
    console.log(this.props.clickAddTrigger);
  }
  render() {
    return (
      <div class="col-sm-7 question-contents">
        <TopicBar clickAddTrigger={this.props.clickAddTrigger}/>
        <TopicInfo />
        <TopicMain />
      </div>
    );
  }
}

export default Middle;
