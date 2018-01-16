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
    deleteOne = (currentThis,num)=>{
        const an = currentThis.animals;
        an.splice(num,1);
        console.log(currentThis.animals[num].name);
        console.log(currentThis.animals);
        /* console.log(an.animals); */
        console.log(currentThis);
        /* console.log(this.state); */
        this.setState({animals: an});
    

        //alert(currentThis.animals);
    }

    render(props)
    {
        return(

                <h5>
                    {console.log(this.props.current)}
                    {console.log('1')}
                    {console.log(this.props.currentIndex)}



                    {console.log('this is the perent state')}
                    {console.log(this.props.currentThis.state)}
                    {console.log('3')}

                    
                    {console.log('this is the current state')}
                    {console.log(this.state)}
                    {console.log('fullends')}
                        <h4 onClick={()=>this.deleteOne(this.props.currentThis.state,this.props.currentIndex)}>{this.props.current}</h4>
                </h5>
        )
    }
}

export default DeletChild;