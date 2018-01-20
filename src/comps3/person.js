import React,{Component} from 'react';
class Person extends Component
{

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
            <input type="text" onChange={(event)=>this.props.change(event)}/>
                User Name :{this.props.persons.state.value+" "}
                
                {this.props.persons.state.value == 'true'?
                <span>
                 {/*    {console.log("in comp:")}
                    {console.log(this.state)} */}
                <input type="text" onChange={(event)=>this.props.changeAge(event)}/>
                <button onClick={this.props.testThis}>dddd</button>
                </span>
                    :'' }    
                
                

                 {this.props.persons.state.persons.map(pr=>{return pr.name+"  "+pr.age+" "})} 


            </p>
        )
    }
}
export default Person;
