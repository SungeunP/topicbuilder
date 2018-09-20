import React, { Component , Fragment } from 'react';

import { useSample } from '../contexts/QuestionListContext';

class AddTrigger extends Component {

  state = {
    actions : {}
  }

  componentDidMount(){
    this.setState({
      actions : this.props.value.addQuestion
    })
  }

  _addQuestion = (e) => {
    this.props.addQuestion();
  }

  render() {
    return (
        <button onClick={this._addQuestion} id="TopicBar_AddTrigger" className="btn-custom btn-custom-black add-question-btn">대화 추가</button>
    );
  }
}

export default useSample(AddTrigger);
