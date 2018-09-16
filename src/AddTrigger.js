import React, { Component , Fragment } from 'react';

class AddTrigger extends Component {

  // After DOM loaded
  componentDidMount(){
    // App.js function binding AddTrigger button
    document.getElementById("TopicBar_AddTrigger").addEventListener(
      "click",
      this.props.clickAddTrigger);
      
  }

  render() {
    return (
        <button id="TopicBar_AddTrigger" className="btn-custom btn-custom-black add-question-btn">대화 추가</button>
    );
  }
}
 export default AddTrigger;
