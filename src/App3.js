import React, {Component} from 'react';
import Person from './comps3/person';

class App3 extends Component 
{
    /* app3 state  */
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

    /* function that run from comp on change input get event  */
    changeAgeFunc=(event)=>{
        debugger;
        const test_index= this.state.currentPerson.name;
        const test_element = {age:event.target.value,name:this.state.currentPerson.name};
        const  typeElements  = this.state;
        
        /* two ways to copy element from state to object  */
        /* first way  */
        const way1 ={
            ...this.state.persons[1]
        }
        /* second way  */
        const way2 = Object.assign({},this.state.persons[0]);
        /* this test the values of every element in typeElements  
        via map and make condition what to return */
        const updatedHeaders = typeElements.persons.map((obj, index) => {
          return obj.name === test_index ? test_element : obj;
        });

        /* save the new list we crated to state  */
        this.setState({
                persons:updatedHeaders            
        })

    }
// fucntion that will run on changing input event 
    changeName =(event)=>{
        console.log(this.state.persons);
        

        //every change first make value in state false 
        this.setState({
            value:'false'
        })
        // run on every one of persons from state compare 
        //to event we receive from input 
        const pID =  this.state.persons.find((currentName,index)=>
            {
                
                /* if currentName(scan every element with map) from 
                state equal to event from input change state value to true */
                /* and add the current person to element in state name currentPerson */
                if (currentName.name == event.target.value)
                {
                    this.setState({
                        value:'true',
                        currentPerson:
                        {
                            id:currentName.id,name:currentName.name,age:currentName.age,Cindex:index
                        }
                    })
                   
                }
                              
            }
        )
        
    }

    render()
    {
        return (
            <div>
                {/* add person component and send few vars and function to it  */}
                <Person persons={this} testThis={this.testFunc} change={this.changeName} changeAge={this.changeAgeFunc}/>
            </div>
        )
    }
}

export default App3;