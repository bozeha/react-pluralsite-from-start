import React,{Component} from 'react';

class ChangeInput extends Component{

    render(props)
    {
        return(
            <div>this is the input
            <input type='text' onChange={this.props.changeInputFunc}/>
            </div>
        )
    }

}


export default ChangeInput;