import React, { Component , Fragment } from 'react';
import './QL_Question.css';


class QL_Question extends Component {

    static defaultProps = {
        qName : "질문",
        questionData : {} ,
        id : 0
    }
    
    render() {

        const { 
            qName, questionData, id
        } = this.props;
        
        return (
            <li id={id}>
                <a href="">{qName}
                    <button class="array-config-btn">
                        <i class="fas fa-cog"></i>
                    </button>
                </a>
            </li>
        )
    }

}


export default QL_Question;