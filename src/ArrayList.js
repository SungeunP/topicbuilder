import React, { Component } from 'react';
import './ArrayList.css';
import { Map, List } from 'immutable';

import ArrayListForm from './ArrayListForm';

class ArrayList extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      data : Map({
        ArrayObjList : List([])
      })
    };
  }

  static defaultProps = {
    ArrayComp_list : [
      {name : "저장한 배열이 없습니다."}
    ]
  }
  
  // Outer func
  _addArrayClick = (name, value) => {
    let Question = {
      name : name,
      value : value
    }
    this.AddArrayObj(Question);
  }

  // add ArrayObj func Core
  AddArrayObj = (ArrayObj) => {
    const { data } = this.state;

    // state.data.ArrayObjList += ArrayObj
    this.setState({
      data: data.update('ArrayObjList', ArrayObjList => ArrayObjList.push({
        name : ArrayObj.name,
        value : ArrayObj.value
      }))
    })
  }


  render() {
    console.log("ArrayList rendered");
    
    const {data} = this.state;
    const ArrayObjList = data.get("ArrayObjList");
    console.log(ArrayObjList);
    
    const list = ArrayObjList.map((data,index) => {
      console.log(data);
      return (
        <Array_component
          name={data.name} 
          id={index}
          value={data.value} />
      );
    });
    console.log(list);
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
            <ArrayListForm AddArrayObj={this._addArrayClick}/>
          </li>
          {
            list.size === 0 ? (<Array_component name="Array가 없습니다." />) : (list)
          }
        </ul>
      </div>
    );
  }

  /* Array Component 랜더링 */
  /* _RenderArrayComponent = () => {
    const {data} = this.state;
    const ArrayObjList = data.get("ArrayObjList");
    console.log(ArrayObjList);
    
    const list = ArrayObjList.map(data => {
      return (
        <Array_component
          name={data.name} />
      );
    });
    ArrayObjList.length === 0 && list.push(<Array_component name="Array가 없습니다." />)
    return list;
  } */

}
/* Array Component rendering roop function */
function Array_component ({name , id , value}) {
  return (
    <li id={id}><a href="">{name}<button className="array-config-btn"><i className="fas fa-cog"></i></button></a></li>
  );
}

export default ArrayList;
