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
        this.setState({
            currentPerson:
            {
                id:33,name:333,age:333,Cindex:333
            }
        })

        console.log(this.state);
        const test_index= 2;
        const test_element = {test:'test'};
        console.log(event.target.value);
debugger;
        const  typeElements  = this.state;
        const updatedHeaders = typeElements.persons.map((obj, index) => {
          return index === test_index ? test_element : obj;
        });
        //const temp_state = {persons:[updatedHeaders]}
            /* two ways to copy element from state, firs one : */
            {console.log(this.state)}
     
         /*            this.setState({
                        persons:[
                            {id:'111',name:'111',age:22}
                        ]
                        
                    }) */
            /* const person1 ={
                ...this.persons.state.persons[this.persons.state.currentPerson.Cindex]
            } */
            /* second way  */
          //  const person2 = Object.assign({},this.persons.state.persons[this.persons.state.currentPerson.Cindex]);

        //setState({persons:})
        console.log('exit update age ');
        console.log(updatedHeaders);
        console.log(this.state);
    }

    testFunc = ()=>
    {
        console.log(this.state);
        this.setState({
            currentPerson:
            {
                id:44,name:444,age:44,Cindex:44
            }
        })
        debugger;
    }
    changeName =(event)=>{
        console.log(this.state);
        
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
                <Person persons={this} testThis={this.testFunc} change={this.changeName} changeAge={this.changeAgeFunc}/>


            </div>
        )
    }
}

export default App3;