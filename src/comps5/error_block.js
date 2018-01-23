import React, {Component} from 'react'

class ErrorBoundary extends Component
{
    state ={
        ErrorValue : false,
        ErrorMsg:''
        (property) ErrorBoundary.componentDidCatch:
        (error: any, info:any) => void 
        componentDidCatch = (error , info)=>{
            this.setState({ErrorValue:true,ErrorMsg:error })
        }
        
    }


    render()
    {
       
        if(this.state.ErrorValue)
        {
            return <h1>{this.state.ErrorMsg}</h1>;
        }
        else
        {
            return this.props.children;
        }

            
        
    }
}


export default ErrorBoundary;