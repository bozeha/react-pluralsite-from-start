import React, {Component} from 'react';

class StartState extends Component
{
    render(props)
    {
    
        console.log(this.props);
        return(
            <h2>
            {this.props.name}
            {this.props.second}
            </h2>
        )
    }

}

export default StartState;