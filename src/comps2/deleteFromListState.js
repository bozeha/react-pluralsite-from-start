import React, {Component} from 'react';
import DeletChild from './deleteFromListStateChild';


class DeleteFromListState extends Component
{

    state={
        animals:[
            {name:'dog'},
            {name:'fish'},
            {name:'bird'}
        ]
    }

    render()
    {

        return(
            <div>
            {console.log('parent')}
            {this.state.animals.map((current,index)=>{return <DeletChild current={current.name} currentIndex={index} currentThis={this}/>})}
                <h4>xxxx{this.state.animals[0].name}uuuuu</h4>
                <h4>xxxx{this.state.animals[1].name}uuuuu</h4>
                <h4>xxxx{this.state.animals[2].name}uuuuu</h4>
                
            </div>
        )
    }
}

export default DeleteFromListState;