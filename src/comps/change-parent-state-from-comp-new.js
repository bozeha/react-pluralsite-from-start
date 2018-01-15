import React, {Component} from 'react';

class ChangeStateFromComp extends Component
{
    render(props)
    {
        
        console.log(this.props.changeState);
        return(
            <h1 onClick={()=>this.props.test('testtttttttt')}>the new way testtt</h1>
        )
    }

}

export default ChangeStateFromComp;