import React, { Component } from 'react';
import './ArrayList.css';
class ArrayList extends Component {
  
  static defaultProps = {
    ArrayComp_list : [
      {name : "저장한 배열이 없습니다."}
    ]
  }
  
  render() {
    return (
      <div className="array-list">
      <p className="list-header">
          <strong>개체 목록</strong>
          <span><button type="button" className="searchvar-btn"><i className="fas fa-search"></i></button></span>
          <span><button type="button" className="list-btn"><i className="fas fa-caret-down"></i></button></span>
      </p>
      <ul className="list-contents">
          <li className="search"><input type="text" placeholder="검색어를 입력해 주십시오" /><input type="submit" value="검색" className="btn-custom btn-custom-black" /></li>
          <li className="array-config highlight">
              <ul>
                  <li className="array-config-title">
                      <strong>개체명</strong>
                      <span className="btn-line">
                          <button className="btn-custom btn-custom-success add-array-btn">추가</button>
                          <button className="btn-custom btn-custom-default reset-array-btn">취소</button>
                      </span>
                  </li>
                  <li className="array-name"><input type="text" value="Coffee" /></li>
                  <li className="array-config-title"><strong>개체 목록</strong></li>
                  <li><textarea name="" id="" cols="28" rows="2" className="array-value">아이스 아메리카노|카페라떼|카푸치노</textarea></li>
              </ul>
          </li>
          {
            this._RenderArrayComponent
          }
      </ul>
    </div>
    );
  }

  /* Array Component 랜더링 */
  _RenderArrayComponent = this.props.ArrayComp_list.map(Array_comp => {
    return (
      <Array_component 
        name={Array_comp.name}/>
    );
  });

}
/* Array Component rendering roop function */
function Array_component ({name}) {
  return (
    <li><a href="">{name}<button className="array-config-btn"><i className="fas fa-cog"></i></button></a></li>
  );
}

export default ArrayList;
