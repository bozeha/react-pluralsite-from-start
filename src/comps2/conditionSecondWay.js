import React, {Component} from 'react';

class ConditionSecondWay extends Component
{
    render(props)
    {
        
        console.log(this.props.sendBool2.state.newWay[0].bool);
        let newWay =null;
        if (this.props.sendBool2.state.newWay[0].bool)
        {
         newWay=(
             <div>
            <p>second way </p>
            <p>second way </p>
            <p>second way </p>
            <p>second way </p>
            <p>second way </p>
             </div>
        )
    }
    let fewOnClick2 =()=>
    {
        this.props.sendBool2.state.newWay[0].bool?this.props.sendBool2.setState({newWay:[{bool:false}]}):this.props.sendBool2.setState({newWay:[{bool:true}]});
    }
    
        return(
            <div>
            {newWay}
        <button onClick={fewOnClick2}>sss</button>
            </div>

        )
    }
}

export default ConditionSecondWay;