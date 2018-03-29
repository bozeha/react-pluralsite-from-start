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
import ChangeStateFromCompNew from './comps/change-parent-state-from-comp-new';
import ChangeInput from './comps/input-change-live';




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

  onChangeInput = (event) =>
  {
    this.setState({
      names:[{
        name:event.target.value
      },{
        name:event.target.value
      }]

    })
  }

  switchName= (newVar) =>{

    ///setState  will change the state object 
    
    this.setState({names:[{name:newVar},{name:newVar}]})
    
  }
  switchName2= () =>{

    ///setState  will change the state object 
    
    this.setState({names:[{name:"ggggggg"},{name:"321321654"}]})
    
  }
  switchName3= (xxx) =>{
    debugger;
        ///setState  will change the state object 
        
        this.setState({names:[{name:xxx},{name:xxx}]})
        
      }

  render() {

    
    
  const inlineStyle={
    color:'blue',
    fontSize:'15px',
    border:"1px solid red"
  }    


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

        <p>second way to run function and change state : </p>
          <button onClick={()=>this.switchName('the  other way button')}>other way</button>
        



        {/* sending the param from state to component StartState */}
        <StartState name="123" second={this.state.names[1].name}></StartState>
          
          <div style={inlineStyle}>this line have style inline from js object </div>

          this is the button from props: 
          {/* we will send the reference of the function switchName2 to the prop change-state-on-click-button-in-prop */}
          <ChangeStateButton refreFunc={this.switchName2}/>


          <p>change this with click on external button :</p>
          <p>{this.state.names[1].name}</p>

          

          <p>for changing the state var from the child comp (not just run func)</p>
          <p>this will run the func switchName3 with param blabla</p>
          <p>what it do </p>
          <ChangeStateFromComp changeState={this.switchName3.bind(this,'blabla')}/>
          

          
          <ChangeStateFromCompNew test={this.switchName3}/>

          <ChangeInput changeInputFunc={this.onChangeInput}/>

      </div>
    );
  }
}

export default App;
