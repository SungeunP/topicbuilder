import React, { Component } from 'react';
import TopicBar from './TopicBar';
import TopicInfo from './TopicInfo';
import QuestionMain from './QuestionMain';

import { SampleConsumer } from '../contexts/sample';

import './Middle.css';

import { Map , List } from 'immutable';

class Middle extends Component {

  constructor(props) {
    super(props);
    this.QuestionMainRef = React.createRef();
  }

  // After DOM loaded
  componentDidMount(){
    
  }

  render() {
    return (
      <div className="col-sm-7 question-contents">
        <TopicBar clickAddTrigger={this.props.clickAddTrigger}/>
        <TopicInfo />
        <SampleConsumer>
          {
            ({state}) => {
              if (state.value != null) {
                (<QuestionMain />)
              }
            }
          }
          
        </SampleConsumer>
        
      </div>
    );
  }
}

export default Middle;
