import React ,{Component} from 'react';

class SendChild extends Component
{
    render(props)
    {
        
        return (
            <div>
                    what we get : {this.props.children}
                </div>

        )
    }

}

export default SendChild;