import React, {Component} from 'react';


class ConditionTorF extends Component
{
    render(props)
    {
        console.log(this.props.currentBool);
        let xxx = this.props.currentBool;
        //let temp= this.props.currentBool;
        return(
                <h1>
                <button onClick={()=>this.props.sendBool()}>{this.props.currentBool} </button>
                <p>block of code </p>
                <p>block of code </p>
                <p>block of code </p>
                <p>block of code </p>
{/*                 <h1 onClick={()=>this.props.sendBool('testtttttttt')}>the new way testtt</h1> */}
                </h1>
        )
    }

}

export default ConditionTorF;