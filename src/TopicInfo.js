import React, { Component } from 'react';
import './TopicInfo.css';
class TopicInfo extends Component {
  render() {
    return (
      <div className="topic-info">
      <ul>
          <li className="topic-name"><label for="">토픽 이름</label><input type="text" placeholder="토픽 이름" /></li>
          <li className="topic-status">
              <span> 토픽 공개 여부</span>
              <select name="" id="">
                  <option value="">비공개</option>
                  <option value="">공개</option>
              </select>
          </li>
          <li className="topic-desc"><label for="">토픽 설명</label><input type="text" placeholder="토픽 설명" /></li>
      </ul>
  </div>
    );
  }
}

export default TopicInfo;