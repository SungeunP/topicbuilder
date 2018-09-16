import React, { Component } from 'react';
import './QuestionList.css';

import QL_Question from './QL_Question';

class QuestionList extends Component {
    
    constructor(props){
        super(props);
        
        this.state = {
            QuestionList : this.props.QuestionList
        }
        this.handleAddQuestion = this.handleAddQuestion.bind(this);
    }

    static defaultProps = {
        QuestionList : [
            {
                qName : "default",
                questionData : {},
                id : 0    
            }
        ]
    }

    handleAddQuestion = (Question) => {
        const {QuestionList} = this.state;
        this.setState( ({QuestionList}) => {
            QuestionList : QuestionList.push(Question);
        });
        console.log(this.state.QuestionList);
    }

    componentWillMount(){
        console.log("component will mount");
    }
    
    componentDidMount(){
        console.log("component did mount");
    }

    componentDidUpdate(){
        console.log("component did update");
    }

    render() {
        const {QuestionList} = this.state;
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
                <ul className="list-contents">
                    <li className="search"><input type="text" placeholder="검색어를 입력해 주십시오" /><input type="submit" value="검색" className="btn-custom btn-custom-black" /></li>
                    {
                        list
                    } 
                </ul>
            </div>
        )
    }
}


export default QuestionList;