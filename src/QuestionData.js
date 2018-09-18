import React, { Component, Fragment } from 'react';
import './QuestionData.css';

import { Map, List } from 'immutable';

class QuestionData extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <Fragment>
        <button className="btn-custom btn-custom-black add-response-btn">답변 추가</button>
        <div className="response-contents">
          <div className="response">
            <h2>
              <span>답변</span>
              <select name="" id="">
                <option value="default">기본</option>
                <option value="hs">수평스크롤</option>
                <option value="hp">수평배치</option>
                <option value="vs">수직스크롤</option>
                <option value="vp">수직배치</option>
              </select>
              <button className="delete-response-btn"><i className="fas fa-times"></i></button>
            </h2>
            <p><span>조건문</span><input type="text" placeholder="조건문을 입력해주십시오" /></p>

            {/* 오브젝트 추가 버튼 */}
            <div className='add-obj-btn'>
              <button className="btn-custom btn-custom-success" type='button'>오브젝트 추가</button>
              <ul>
                <li className='add-obj-text'>텍스트</li>
                <li className='add-obj-img'>이미지</li>
                <li className='add-obj-button'>버튼</li>
                <li className='add-obj-group'>그룹</li>
              </ul>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default QuestionData;