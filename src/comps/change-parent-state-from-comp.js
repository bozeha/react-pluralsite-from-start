import React, {Component} from 'react';

class ChangeStateFromComp extends Component
{
    render(props)
    {
        
        console.log(this.props.changeState);
        return(
            <h2 onClick={this.props.changeState}>the long weird way </h2>
            
        )
    }

}

export default ChangeStateFromComp;