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

  static defaultProps = {
    QuestionList : [
      {
        qName : "Question1",
        questionData : {

        },
        id : 1
      },
      {
        qName : "Question2",
        questionData : {

        },
        id : 2
      }
    ]
  }

  
  state = this.props;

  handleCreate = (data) => {
    const { QuestionList } = this.state;
    this.setState({
      QuestionList: QuestionList.concat({ id: this.id++, ...data })
    })
  }

  addTrigger = () => {
    console.log("addTrigger event from App Component");
    
    this.question = {
      qName : "default",
      questionData : {},
      id : 0    
    }

    const { QuestionList } = this.state;
    this.setState({
      QuestionList: QuestionList.concat({ id: this.id++, ...this.question })
    })

    console.log(this.state);

    /* this.SideListRef.current.QuestionListRef.current.handleAddQuestion(
      {
        qName : "default",
        questionData : {},
        id : 0    
      }
    ); */

    console.log("end");
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
            <Middle clickAddTrigger={this.addTrigger} />
            <Preview />
          </div>
        </div>
        </div>
        
      </Fragment>
    );
  }
}

export default App;
