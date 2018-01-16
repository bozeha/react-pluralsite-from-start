import React, {Component} from 'react';
import ListOfElementsMapChild from './listOfElementsMapChild';

class ListOfElementsMap extends Component
{

    state={
        persons:[
            {name:"bob",age:22},
            {name:"bff",age:24},
            {name:"asd",age:25},
            {name:"ewr",age:26}
        ],
        animals:{
            dog:'mike',
            bird:'twiki',
            fish:'nemon'

        }
        

    }
    render()
    {
        return(

            <div>
                
                <ul>
                {/* send every one of the list to child comp that will build element  */}
                {this.state.persons.map(temp=>{return <ListOfElementsMapChild currentChild={temp.name}/> })}
                </ul>

                    {/* change the state will change the element we build in the child porp */}                
                    <button onClick={()=>this.setState({persons:[{name:'dddddddddd'}]})}>changeStage</button>
            </div>
        )
    }

}

export default ListOfElementsMap;