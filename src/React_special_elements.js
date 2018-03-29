import React, {Component} from 'react';


// we will build elments and export it to child sendAndReceive 
//we will do what we want with the element we creacte her and returnd them 
import ChangeAndReturnToParent from './React_special_elements/send_and_receive_to_child';
import recieveClass from './React_special_elements/recieve_class';




class SpecialElement extends Component
{
render()
{
    return(

        <div>

        

            <ChangeAndReturnToParent>
            dsfasdfasdf
            asdfasdfadsfadsf
            this block sended as props children 
            </ChangeAndReturnToParent>
    <recieveClass/>


        </div>
    )
}

}

export default SpecialElement;