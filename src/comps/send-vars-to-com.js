import React, {Component} from 'react';
import '../style/top-bar.css';

class SendVars extends Component{

    render(props)
    {
        return(
            <li className="li-topbar">            
               {this.props.uiname} 
            </li>
        )
    }
}

export default SendVars;