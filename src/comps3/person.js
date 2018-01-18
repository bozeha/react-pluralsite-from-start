import React,{Component} from 'react';
class Person extends Component
{
    render(props)
    {
        return(
            <p>
            <input type="text" onChange={(event)=>this.props.change(event)}/>
                User Name :{this.props.persons.state.value+" "}
                
                {this.props.persons.state.value == 'true'?
                
                    <input type="text" onChange={(event)=>this.props.changeAge(event)}/>
                    :'' }    
                
                
                {/* {this.props.persons.state.persons.map(p=>{p.name})} */}
                {/* {this.props.persons.state.persons.map(pr=>{return pr.name+"  "+pr.age+" "})} */}


            </p>
        )
    }
}
export default Person;