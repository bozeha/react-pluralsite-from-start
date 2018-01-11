import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactBasics from './comps/React-basics';
import ExportFunc from './comps/export-func';

class App extends Component {
  render() {
    return ( 
      <div className="App">
        <h1>Main React comp</h1>
        <ReactBasics/>
        <ExportFunc/>
      </div>
    );
  }
}

export default App;
