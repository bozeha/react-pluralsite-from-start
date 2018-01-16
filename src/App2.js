import React, {Component} from 'react';
import ConditionTorF from './comps2/simpleCondition';
import ConditionSecondWay from './comps2/conditionSecondWay';
import ChangeCompState from './comps2/changeCompState';
import ListOfElementsMap from './comps2/listOfElementsMap';
import DeleteFromListState from './comps2/deleteFromListState';

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
        }],
        newWay:
        [{bool:true}]

    }
    returnValue= (yyy) =>{
        /* this will change the state content and add the yyy we receive to it   */
        this.setState({deplecateValue:[{theValue:this.state.deplecateValue[0].theValue+yyy}]})

        /* this will change the state condiditon to true if false and to false if true */
        this.state.showBlock[0].condition=="true"?this.setState({showBlock:[{condition:"false"}]}):this.setState({showBlock:[{condition:"true"}]});
        
      }
    
    render()
    {
        console.log('aa')
            const mainDivStile ={
                margin:'0 auto',
                backgroundColor:'lightblue',
                height:'100%'
            }
            let fewOnClick =()=>
            {

                this.state.newWay[0].bool?this.setState({newWay:[{bool:false}]}):this.setState({newWay:[{bool:true}]});
                console.log(this.state.newWay[0].bool+'xxxxx');
            }
    return(
        <div style={mainDivStile}>

        {/* this will show the current value of state var deplecatevalue */}
        {this.state.deplecateValue[0].theValue}

        {/* this will send to the component the function returnValue and the state var condition */}
        <ConditionTorF sendBool={this.returnValue.bind(this)} currentVal={this.state.showBlock[0].condition}/>


        {/* send this to ConditionSecondWay and its schage the state independently */}
        <ConditionSecondWay sendBool2={this}/>


        <ChangeCompState/>
        <ListOfElementsMap/>
        <DeleteFromListState/>


        
        

        </div>
    )
}
}

export default App2;