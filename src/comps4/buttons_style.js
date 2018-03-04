import React, {Component} from 'react'


/// for using spacial styles like Pseudo selector :hover we need to install
//radium , import in to the component and rap it in the export 
// like that : export default Radium(ButtonsStyle);
import Aaa from './aaa'
import Radium from 'radium'
class ButtonsStyle extends Component
{
    state ={
        currentV:'true'
    }
    render()
    {
        
        const theRaduim = {
            color:'green',
            border:'2px solid red',
            ':hover':{
                color:'blue',
                borderColor:'pink'
            }
        }
        let classes=[];
        if(this.state.currentV ==  'true')
        {
            debugger;
            classes.push('bold');
            classes.push('gray');
           
        }
        else if (this.state.currentV ==  'false')
        {
            classes.push('gray');
            
        }

        return (
            <div>
                {/* join(' ') make the array be separate by space for few classes */}
                <p onClick={()=>this.state.currentV=='true'?this.setState({currentV: 'false'}):this.setState({currentV: 'true'})} className={classes.join(' ')}>
                lkj lkj lkj lkj lkj lkj lkj 
                <p style={theRaduim}>Radium = >hover</p>
                
                </p>
                <Aaa sendVar={'2222222222222'} >
                ddddddd
                sdfasdfasdf
                </Aaa>
            </div>
        )
    }
}


export default Radium(ButtonsStyle);