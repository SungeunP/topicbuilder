import React, { Component, Fragment } from 'react';
import SideList from './SideList';
import Middle from './Middle';
import Preview from './Preview';
import temp_sidebar from './temp_sidebar';
import temp_header from './temp_header';
import './App.css';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.SideListRef = React.createRef();
  }

  state = {
    QuestionList : [

    ]
  }

  handleCreate = (data) => {
    if (document.getElementById("Question_input") === null ) {
      console.log("Question_input On");
      this.SideListRef.current.QuestionListRef.current.setInputState(true);
      document.getElementById("Question_input").focus();
    } else {
      console.log("Question_input Off");
      this.SideListRef.current.QuestionListRef.current.setInputState(false);
    }
    
    /* const { QuestionList } = this.state;
    this.setState({
      QuestionList: QuestionList.concat({ id: this.id++, ...data })
    }) */
  }

  render() {
    return (
      <Fragment>
        <div class="container-fluid">
        <div class="row">
          <temp_header />
        </div>
        <div class="row">
        <temp_sidebar />
        </div>
        <div className="contents col-sm-12">
          <div className="row" > {/* style="position: relative; z-index: 100;" */}
            <SideList QuestionList={this.state.QuestionList} ref={this.SideListRef}/>
            <Middle clickAddTrigger={this.handleCreate} />
            <Preview />
          </div>
        </div>
        </div>
        
      </Fragment>
    );
  }
}

export default App;
