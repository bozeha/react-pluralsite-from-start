import React,{Component} from 'react';
class Person extends Component
{
    //component person state

    state= {
        elements:[
        {
           test:"123",
           test2:"123"
        }
    ]}
    render(props)
    {

        return(
            <p>

            {/* return a input with onChage send the event to props.change -> function 
            we get from app3  */}
            <input type="text" onChange={(event)=>this.props.change(event)}/>
                {/* pring the value from APP3 state value  */}
                User Name :{this.props.persons.state.value+" "}
                
                {/* this is condition if  test value of app3 state */}
                {/* if true show this block with input that chage age of spasifec element in app3 state */}
                {this.props.persons.state.value == 'true'?
                <span>
                <input type="text" onChange={(event)=>this.props.changeAge(event)}/>
                </span>
                    :'' }    
                {/* use map to show the list of persons  */}
                 {this.props.persons.state.persons.map(pr=>{return pr.name+"  "+pr.age+" "})} 
            </p>
        )
    }
}

export default Person;
