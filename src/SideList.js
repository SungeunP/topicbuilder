import React, { Component , Fragment } from 'react';
import QuestionList from './QuestionList';
import ArrayList from './ArrayList';
import './SideList.css';
class SideList extends Component {

  constructor(props) {
    super(props);
    this.QuestionListRef = React.createRef();
  }

  static defaultProps = {
    QuestionList : [
      {
        qName : "defaultName",
        questionData : {},
        id : 0
      }
    ]
  }
  

  render() {
    return (
      <div class="col-sm-2">
        <QuestionList QuestionList={this.props.QuestionList} ref={this.QuestionListRef}/>
        <ArrayList />
      </div>
    );
  }
}

export default SideList;
