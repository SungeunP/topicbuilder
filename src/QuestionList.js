import React, { Component } from 'react';
import './QuestionList.css';

import QL_Question from './QL_Question';
import QL_QuestionInput from './QL_QuestionInput';

class QuestionList extends Component {
    
    constructor (props) {
        super(props);
        this.setInputState = this.setInputState.bind(this);
    }

    static defaultProps = {
        QuestionList : []
    }

    state = {
        QuestionList : [],
        isInputMode : false
    }

    setInputState = (tf) => {
        this.setState({
            isInputMode : tf
        });
    }



    // Before this.onBlurr
    // 네이티브한 onBlur가 있었나봄 중복되어서 이상하게 동작했었음
    onBlurr = (e) => {
        if (document.getElementById("Question_input").value == "") { 
            this.setInputState(false);
        } else {
            this.props.QuestionList.push({
                qName : document.getElementById("Question_input").value,
                questionData : {},
                id : this.id++
            });
            this.setInputState(false);
        }
    }

    render() {
        // props에서 QuestionList 가져옴
        // state로 안하고 props로 한 이유는 component생성 로직이 따로 있어서 state를 쓸 필요가 없음
        const {QuestionList} = this.props;
        // QuestionList를 기반으로 컴포넌트 생성
        const list = QuestionList.map(
            question =>
            (<QL_Question qName={question.qName} questionData={question.questionData}/>)
        );

        return (
            <div className="question-list">
                <p className="list-header">
                    <strong>질문 목록</strong>
                    <span><button type="button" className="searchvar-btn"><i className="fas fa-search"></i></button></span>
                    <span><button type="button" className="list-btn"><i className="fas fa-caret-down"></i></button></span>
                    <span className="hidden previous-close-btn"><button type="button"><i className="fas fa-caret-down"></i></button></span>
                </p>
                <ul id="Question_List" className="list-contents">
                    <li className="search"><input type="text" placeholder="검색어를 입력해 주십시오" /><input type="submit" value="검색" className="btn-custom btn-custom-black" /></li>
                    {
                        this.state.isInputMode === true  && (<QL_QuestionInput onBlurr={this.onBlurr}/>)
                    }
                    {
                        list
                    }
                </ul>
            </div>
        )
    }
}


export default QuestionList;