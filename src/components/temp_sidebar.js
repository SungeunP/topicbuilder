import React, { Component , Fragment } from 'react';
import './temp_sidebar.css';

class temp_sidebar extends Component {

  render() {
    return (
        <Fragment>
            <div className="side-nav">
            <ul>
                <li><strong>매니저</strong>
                    <ul>
                        <li><a href="#">매니저 리스트</a></li>
                        <li><a href="#">매니저 생성</a></li>
                    </ul>
                </li>
                <li><strong>봇</strong>
                    <ul>
                        <li><a href="#">봇 리스트</a></li>
                        <li><a href="#">봇 생성</a></li>
                    </ul>
                </li>
                <li className="highlight"><strong>토픽</strong>
                    <ul>
                        <li><a href="#">토픽 리스트</a></li>
                        <li><a href="#">토픽 생성</a></li>
                    </ul>
                </li>
            </ul>
            <span className="menu-arrow topic-builder"></span>
        </div>
        </Fragment>
    );
  }

}

export default temp_sidebar;