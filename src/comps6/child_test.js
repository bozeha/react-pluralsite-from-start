import React, {Component} from 'react'


class ChildR extends Component
{
   



    //every time we will chage the props state on parent 
    // the function will run -> the nextProps is what we send back to parent ,the new state
    
    componentWillReceiveProps(nextProps)
    {
        console.log('componentWillReceiveProps');
        console.log(nextProps);
    }

    /// the state of parent will pass her befor sending back to parent
    /// we can make test on the content that will be send 
    /// if we dont whant that the state will be chage we need only to return false
    ///=> return false;
    shouldComponentUpdate(nextProps,nextSatate)
    {
        console.log('sholdComponentUpdate');
        //return false;
        console.log(nextProps);
        console.log(nextSatate);
    }

    compnentWillUpdate(textProps,nextState){
        console.log('compnentWillUpdate')
        
    }

    componentDidUpdate()
    {
        console.log('componentDidUpdate')
    }

    render(props){

        return(
            <div>
            {this.props.test} 
            {this.props.all.state.test}
            <div onClick={()=>this.props.all.setState({test:666})}>CHAGNE parent STATE to 666</div>
            <p>parent state:{this.props.all.state.test}</p>
             </div>
        )
    }
}

export default ChildR;