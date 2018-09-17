import React, { Component } from 'react';
import './TopicMain.css';
class TopicMain extends Component {

  constructor(){
      super();
  }

  render() {
    return (
        <div className="topic-contents">
            <div className="previous-list hidden">
                <h2>이전 질문 목록</h2>
                <ul>

                </ul>
            </div>
            <ul>
                <li><span>질문</span><input className="question" type="text" placeholder="질문을 입력해주십시오" /></li>
                <li className="previous"><span>이전 질문</span><input type="text" placeholder="이전 질문을 선택해주십시오" readOnly /><button className="delete-previous-btn"><i className="fas fa-times"></i></button></li>
                <li className="question-status">
                    <span>접근 허용 여부<button className="help-btn"><i className="fas fa-question-circle"></i></button></span>
                    <p className="hidden">접근 허용 여부 도움말</p>
                    <input type="checkbox" id="status-public" />
                    <label for="status-public" className="checkbox"><span></span>공개</label>
                </li>
                <li><hr /></li> {/* style="border: 0px; border-bottom: 1px solid #ccc; margin: 0px;" */ }
            </ul>
            {/* 답변 추가 버튼 */}
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
        </div>
    );
  }
}

export default TopicMain;