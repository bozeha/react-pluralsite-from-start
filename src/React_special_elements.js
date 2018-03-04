import React, {Component} from 'react';


// we will build elments and export it to child sendAndReceive 
//we will do what we want with the element we creacte her and returnd them 
import ChangeAndReturnToParent from './React_special_elements/send_and_receive_to_child'



class SpecialElement extends Component
{
render()
{
    return(

        <div>

        

            <ChangeAndReturnToParent>
            dsfasdfasdf
            asdfasdfadsfadsf
            
            </ChangeAndReturnToParent>



        </div>
    )
}

}

export default SpecialElement;