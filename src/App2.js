import React, {Component} from 'react';
import ConditionTorF from './comps2/simpleCondition';



class App2 extends Component{

    state={
        persons:
        [
        {name:'bob'},
        {name:'dan'},
        {name:'yan'},
        {name:'jon'}
        ],
        showBlock:
        [
        {
        condition:"false",
        value:false
        }
        
        ]
    }

     testTest =() =>
    {
    
        console.log(this.state.showBlock.condition);
    }

returnValue= (xxx) =>{
    
        ///setState  will change the state object 
        
        this.setState({persons:[{name:'yyy'},{name:'yyy'}]})
        console.log(this.state.showBlock.condition+'aaa');
      }
    
    render()
    {
            const mainDivStile ={
                margin:'0 auto',
                backgroundColor:'lightblue',
                height:'100%'
            }
    return(
        <div style={mainDivStile}>
        {this.state.showBlock.condition?<div>xxxxx</div>:null}
        {this.state.persons[1].name}
        {this.testTest()}
        
        <ConditionTorF sendBool={this.returnValue} currentBool={this.state.showBlock[0].condition}/>
        </div>

    )
}


}


export default App2;