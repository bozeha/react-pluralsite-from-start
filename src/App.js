import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactBasics from './comps/React-basics';
import ExportFunc from './comps/export-func';
import SendVars from './comps/send-vars-to-com';
import SendChild from './comps/send-var-with-children';
import StartState from './comps/start-with-state';
import ChangeStateButton from './comps/run-function-my-click-from-prop';
import ChangeStateFromComp from './comps/change-parent-state-from-comp';


class App extends Component {
//// state is build in property that will runder the page every
///  time the params will be change 
  state={
    names:[
      {name:'bob'},
      {name:'dan'},
      {name:'jon'},
      {name:'nin'}
    ]

  }
  switchName= (newVar) =>{

    ///setState  will change the state object 
    
    this.setState({names:[{name:"ggggggg"},{name:"xaaaa"}]})
    
  }
  switchName2= () =>{

    ///setState  will change the state object 
    
    this.setState({names:[{name:"ggggggg"},{name:"321321654"}]})
    
  }
  switchName3= (xxx) =>{
    
        ///setState  will change the state object 
        
        this.setState({names:[{name:xxx},{name:xxx}]})
        
      }

  render() {
    return ( 
      <div className="App">
        <ul>
            <SendVars uiname="ראשי"/>
            <SendVars uiname="קטגוריות"/>
            <SendVars uiname="אודותינו"/>
            <SendVars uiname="צור קשר"/>
          </ul>
        
        <h1>Main React comp</h1>
        <ReactBasics/>
        <ExportFunc/>
        <SendChild>this is the child we send</SendChild>
        {/* dont use () after the function name switchName 
        exmp: onClick={this.switchName()}
        this will make the function run once when the runder is done */}

        {/* without the () onclick will run the founction only when clicking */}
        <button onClick={this.switchName}>switch</button>

        {/* sending the param from state to component StartState */}
        <StartState name="123" second={this.state.names[1].name}></StartState>
          
          

          this is the button from props: 
          {/* we will send the reference of the function switchName2 to the prop change-state-on-click-button-in-prop */}
          <ChangeStateButton refreFunc={this.switchName2}/>


          <p>change this with click on external button :</p>
          <p>{this.state.names[1].name}</p>

          

          <p>for changing the state var from the child comp (not just run func)</p>
          <p>this will run the func switchName3 with param blabla</p>
          
          <ChangeStateFromComp changeState={this.switchName3.bind(this,'blabla')}/>


      </div>
    );
  }
}

export default App;
