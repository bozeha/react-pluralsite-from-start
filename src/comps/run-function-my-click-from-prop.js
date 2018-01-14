import React, {Component} from "react";

class ChangeStateButton extends Component
{
    render(props)
    {
        return(
            //reciving the function reference and run it on click ; 
            <button onClick={this.props.refreFunc}>button-from-props</button>
        )
        
    }

}


export default ChangeStateButton;