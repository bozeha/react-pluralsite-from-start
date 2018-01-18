import React, {Component} from 'react';
import DeletChild from './deleteFromListStateChild';


class DeleteFromListState extends Component
{

    state={
        animals:[
            {key:123,name:'dog'},
            {key:1234,name:'fish'},
            {key:1235,name:'bird'},
            {key:12435,name:'dolfin'},
            {key:12335,name:'ent'},
            {key:12235,name:'snek'}
        ]
    }

    render()
    {

        return(
            <div>
            {console.log('parent')}
            {/* map converting the state to list and every current is on of this list elemetn
            index is the place of element in the list 
            and for every one of the element in the list call comp DeletChild and send him the vars  */}
            {this.state.animals.map((current,index)=>{return <DeletChild key={current.key} current={current.name} currentIndex={index} currentThis={this}/>})}
                
            </div>
        )
    }
}

export default DeleteFromListState;