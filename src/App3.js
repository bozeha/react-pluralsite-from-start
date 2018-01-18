import React, {Component} from 'react';
import Person from './comps3/person';

class App3 extends Component 
{
    state = {
        persons:
            [
                {id:'1qq',name:'miasdf',age:22},
                {id:'3ed',name:'sdf',age:23},
                {id:'4ff',name:'fdghfg',age:24},
                {id:'111',name:'111',age:11}
            ],
            value:'false',
            currentPerson:{
                id:'',name:'',age:'',Cindex:''
            }
    }
    changeAgeFunc=(event)=>{

        alert(event.target.value);
        
        debugger;
            /* two ways to copy element from state, firs one : */

            /* const person1 ={
                ...this.persons.state.persons[this.persons.state.currentPerson.Cindex]
            } */
            /* second way  */
            const person2 = Object.assign({},this.persons.state.persons[this.persons.state.currentPerson.Cindex]);


        this.setState({
            persons:[]
            //this.state.currentPerson.Cindex
        })
        //setState({persons:})
    }
    changeName =(event)=>{
        /* console.log(event.target.value);
        console.log(this.state.persons[0].name); */
        
        this.setState({
            value:'false'
        })
        const pID =  this.state.persons.find((currentName,index)=>
            {
                console.log(currentName.name+'X');
                console.log(event.target.value+'Y');
                if (currentName.name == event.target.value)
                {
                    this.setState({
                        value:'true',
                        currentPerson:
                        {
                            id:currentName.id,name:currentName.name,age:currentName.age,Cindex:index
                        }
                    })
                    debugger;
                }
              
                /* return currentName.name == event.target.value; */
                /* return currentName == event.target.value; */
                
            }
        )
        
    }

    render()
    {
        return (
            <div>
            dddddddddddddddddddddddddd
                <Person persons={this}  change={this.changeName} changeAge={this.changeAgeFunc}/>
            </div>
        )
    }
}

export default App3;