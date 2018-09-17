import React, { Component , Fragment } from 'react';
import './QL_Question.css';


class QL_Question extends Component {

    static defaultProps = {
        qName : "질문",
        questionData : {},
        id : 0
    }
    
    _QuestionClicked = () => {
        let name = this.props.qName;
        let data = this.props.questionData;
        this.props.onClickQuestion(name, data)
    }

    render() {

        const { 
            qName, questionData, id
        } = this.props;
        console.log(this._QuestionClicked);
        return (
            <li id={id}>
              <a onClick={this.props.onClickQuestion}>{qName}
                                <button class="array-config-btn">
                  <i class="fas fa-cog"></i>
                </button>
              </a>
            </li>
        )
    }
}


export default QL_Question;