import React , {Component} from 'react';
import WrappTheComp from './wrapp_any_component';



const counter_style={
   color:'red',
   margin:'0 auto',
   textAlign:'center'
}
class WrappThis extends Component{
            constructor(props)
            {
                super(props);
                this.state={
                    counter:0,
                    counter2:0
                }
                
            }



            componentDidMount()
            {
                this.inputElement.focus();
            }
    render (props){


        return (
            <div>
            ddddddddddddddddddddddddddd
            aaaaaaaaaaaaaaaaaaaaaaaaaaaa
            ccccccccccccccccccccccccc
            <h1 onClick={()=>this.setState({counter:this.state.counter+1})}>this is counter->first way to update state(click on me) </h1>
            <h1 onClick={()=>this.setState((prevState,props)=>{return {counter2:prevState.counter2+1}})}>this is counter2->best practis to update state(click on me) </h1>
            <div ><h2 style={counter_style}>{this.state.counter}</h2></div>
            <div ><h2 style={counter_style}>{this.state.counter2}</h2></div>


                {/* ref let you to able to control element from outside of the runder =>after rundering componentdidmount  */}
              
            <input ref={(inp)=>{this.inputElement = inp}} type='text' onChange={this.props.changed} />
            </div>
        )
    }
}

export default WrappTheComp(WrappThis,'bobClass');