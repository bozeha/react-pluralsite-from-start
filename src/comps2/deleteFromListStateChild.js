import React, {Component} from 'react';

class DeletChild extends Component
{
    state={
        names:[
            {name:'bob'},
            {name:'brt'},
            {name:'sdf'},
            {name:'wer'}
        ]

    }

    /* currentTT is the => this  of the parent num is the index of the current element, 
    currentThis is the list from state of parent */
    deleteOne = (currentThis,num,currentTT)=>{
        debugger;
        /* we make a copy of the parent list state and save it in an  */
        /* this way we will make copy of pointer */
        const an1 = currentThis.animals;
        /* this way we will make real copy */
        const an2 = currentThis.animals.slice();
        
        /* this second way we will make real copy */
        const an = [...currentThis.animals];


        /* now we removing element from the copy of state list ,
         num -> the index of element list we want to remove , 1 -> 
         dnumber of element we whant to remove */
        an.splice(num,1);
        
        /* save in the parent state list the new copy with the changes  */
        currentTT.setState({animals: an});
    

        //alert(currentThis.animals);
    }

    render(props)
    {
        return(

                <h5>
           
                        <h4 onClick={()=>this.deleteOne(this.props.currentThis.state,this.props.currentIndex,this.props.currentThis)}>{this.props.current}</h4>
                        {/* <input type="text" onChange={(event)=>{this.props.currentThis.setState({ animals:[{ name:event.target.value },{ name:event.target.value }] });}}/> */}
                </h5>
        )
    }
}

export default DeletChild;