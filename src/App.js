import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactBasics from './comps/React-basics';
import ExportFunc from './comps/export-func';
import SendVars from './comps/send-vars-to-com';
import SendChild from './comps/send-var-with-children';

class App extends Component {
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

      </div>
    );
  }
}

export default App;
