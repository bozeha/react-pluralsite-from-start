import React, {Component} from 'react'

class StartStyle extends Component
{
    state ={
        value :'true'
    }
    render()
    {
        const buttonStyle={
            backgroundColor:'red'
        }        
        {this.state.value == 'true'?buttonStyle.backgroundColor='red':buttonStyle.backgroundColor='blue'}
        return (
            <div>
                
                <button style={buttonStyle} onClick={()=>this.state.value=='true'?this.setState({value:'false'}):this.setState({value:'true'})}>the button</button>
                    
            </div>
        )
    }
}

export default StartStyle;