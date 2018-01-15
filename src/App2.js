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
        ],
        deplecateValue:[{
            theValue:"aaa"
        }]

    }

     testTest =() =>
    {
    
        console.log(this.state.showBlock.condition);
    }

returnValue= (yyy) =>{
    
        ///setState  will change the state object 
        /* this.setState({showBlock:[{condition:this.state.showBlock[0].condition+yyy},{name:'yyy'}]}) */
        this.setState({deplecateValue:[{theValue:this.state.deplecateValue[0].theValue+yyy}]})
        this.state.showBlock[0].condition=="true"?this.setState({showBlock:[{condition:"false"}]}):this.setState({showBlock:[{condition:"true"}]});
        /* console.log(this.state);
        console.log(this.state.showBlock[0].condition+'aaa');
        */ 


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
{/*         {this.state.showBlock.condition?<div>xxxxx</div>:null}
        {this.state.persons[1].name}
        {this.state.showBlock[0].condition}
        {this.testTest()}
 */}        
        {this.state.deplecateValue[0].theValue}
        {/* <ConditionTorF sendBool={this.returnValue} currentBool={this.state.showBlock[0].condition}/> */}
        <ConditionTorF sendBool={this.returnValue.bind(this)} currentVal={this.state.showBlock[0].condition}/>
        </div>

    )
}


}


export default App2;