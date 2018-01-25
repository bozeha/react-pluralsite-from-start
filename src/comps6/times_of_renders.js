import React, {Component} from 'react'
import ChildR from './child_test'
class TimesOfRender extends Component
{

    constructor(props){
        super(props);
        //the code in constructor will only run once 
        //it will be the first thing that runs
        console.log('constructor');
    }

    state ={
        test:123
    }
  componentWillMount(){
      /// this wil only run once 
      /// it will run after the constructor before the render 
      //** the function without arrow this becout its not calld from the dom 
    console.log('componentWillMount');
    }
    
  componentDidMount(){
      console.log(this.state);
      /// this wil only run once 
      /// it will run after the rendering
      //** the function without arrow this becout its not calld from the dom 
    console.log('componentDidMount');
    }

    /* componentWillReceiveProps(nextProps)
    {
        console.log('componentWillReceiveProps');
        console.log(nextProps);
    } */
    render()
    {
        {console.log('we runder')}
        return(
            <div>dddddd
            <div onClick={()=>this.setState({test:111})}>change currend state</div>
            <ChildR all={this} test={'test'}/>
            {()=>this.setState({test:999})}
            </div>
        )
    }
}

export default TimesOfRender