import React, {Component} from 'react';

class ChangeStateFromComp extends Component
{
    render(props)
    {
        
        console.log(this.props.changeState);
    
        
        return(
            <h1 onClick={this.props.changeState}>xxyy</h1>
        )
    }

}

export default ChangeStateFromComp;