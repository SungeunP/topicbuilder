import React, { Component } from 'react';
import './Preview.css';
class Preview extends Component {
  render() {
    return (
      <div className="col-sm-3 preview-contents">
        <button className="btn-custom btn-custom-success preview-btn">미리보기 닫기 <i className="fas fa-caret-down"></i></button>
        <iframe src="" frameBorder="0" >
          
        </iframe>
      </div>
    );
  }
}

export default Preview;
