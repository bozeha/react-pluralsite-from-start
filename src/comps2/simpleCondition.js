import React, {Component} from 'react';


class ConditionTorF extends Component
{
    render(props)
    {
        console.log(this.props+'ssss');
        let xxx = this.props.currentBool;
        //let temp= this.props.currentBool;
        return(
                <h1>
                {/* <button onClick={()=>this.props.sendBool()}>{this.props.state.showBlock[0].condition} </button> */}
                
                        {console.log(this.props+"xxxx")}

                        {/* using arrow function onClick prevent loop */}
                    <button onClick={()=>this.props.sendBool('xxx')}>{  this.props.currentVal}</button>
               {this.props.currentVal == 'true' ?
                <div>
                <p>block of code </p>
                <p>block of code </p>
                <p>block of code </p>
                <p>block of code </p> 
                </div>:null
                }

                </h1>
        )
    }

}

export default ConditionTorF;