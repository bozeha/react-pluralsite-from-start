import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
import App5 from './App5';
import SpecialElement from './React_special_elements';
import registerServiceWorker from './registerServiceWorker';



//import functions from './functions-exp';

/* ReactDOM.render(<App />, document.getElementById('root')); */
/* ReactDOM.render(<App2 />, document.getElementById('root')); */
//ReactDOM.render(<App3 />, document.getElementById('root'));
//  ReactDOM.render(<App4 />, document.getElementById('root'));
/* ReactDOM.render(<App5/>, document.getElementById('root')); */
ReactDOM.render(<SpecialElement/>, document.getElementById('root'));
registerServiceWorker();
