import React, { Component } from 'react';
class temp_header extends Component {


  render() {
    return (
        <header className="col-sm-12">
        <h1><img src="./image/logo.png" alt="Logo" /></h1>
        <span className="manager">
            <span className="bell">
                <button><i className="fas fa-bell"></i></button>
                <span className="notice-count">4</span>
                <ul className="notice hidden">
                    <li className="notice-default">봇이 켜졌습니다.</li>
                    <li className="notice-warning"><i className="fas fa-exclamation-triangle"></i> 봇이 꺼졌습니다.</li>
                    <li className="notice-success"><i className="fas fa-check-square"></i> 토픽 생성에 성공하였습니다.</li>
                    <li className="notice-error"><i className="fas fa-exclamation-circle"></i> 토픽 생성에 실패하였습니다.</li>
                </ul>
            </span>
            <span className="admin">Manager01</span>
        </span>
        </header>
    );
  }

}

export default temp_header;