import React, { Component } from 'react';
import { Map, List } from 'immutable';
import './TopicInfo.css';
class TopicInfo extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    data : Map({
      topicName : "",
      topicDesc : "",
      topicPublic : ""
    })
  }

  // OnChanged events //
  _topicNameOnChanged = () => {
    console.log("_topicNameOnChanged");
  }

  _topicDescOnChanged = () => {
    console.log("_topicDescOnChanged");
  }
  
  _topicPublicOnChanged = () => {
    console.log("_topicPublicOnChanged");
  }
  // OnChanged events //

  render() {
    return (
      <div className="topic-info">
        <ul>
          <li className="topic-name"><label>토픽 이름</label> {/* for="" */}
            <input type="text" 
                  placeholder="토픽 이름" 
                  onChange={this._topicNameOnChanged} />
          </li>
          <li className="topic-status">
            <span> 토픽 공개 여부</span>
            <select name="" id="">
              <option value="">비공개</option>
              <option value="">공개</option>
            </select>
          </li>
          <li className="topic-desc"><label>토픽 설명</label> {/* for="" */}
            <input type="text" 
                  value={this.state.data.get("topicDesc")}
                  placeholder="토픽 설명" 
                  onChange={this._topicDescOnChanged} />
          </li>
        </ul>
      </div>
    );
  }
}

export default TopicInfo;