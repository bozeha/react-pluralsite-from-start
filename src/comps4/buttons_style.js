import React, {Component} from 'react'

class ButtonsStyle extends Component
{
    state ={
        currentV:'true'
    }
    render()
    {
        let classes=[];
        if(this.state.currentV ==  'true')
        {
            classes.push('red');
        }
        else if (this.state.currentV ==  'false')
        {
            classes.push('blue');
            
        }

        return (
            <div>
                <p onClick={()=>this.state.currentV=='true'?this.setState({currentV: 'false'}):this.setState({currentV: 'true'})} className={classes}>
                lkj lkj lkj lkj lkj lkj lkj 
                </p>
            </div>
        )
    }
}


export default ButtonsStyle;