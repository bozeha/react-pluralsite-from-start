import React ,{Component} from 'react';

class ChangeCompState extends Component
{
    state={
        names:[
            {name:'bob'},
            {name:'brt'},
            {name:'sdf'},
            {name:'wer'}
        ]

    }
    render()
    {
        return(
                <h3>
                
                <div onClick={()=>this.setState({names:[{name:'123'}]})}>click =>{this.state.names[0].name}</div>
                
                </h3>
        )
    }
}

export default ChangeCompState;