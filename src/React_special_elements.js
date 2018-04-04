import React, {Component} from 'react';


// we will build elments and export it to child sendAndReceive 
//we will do what we want with the element we creacte her and returnd them 
import ChangeAndReturnToParent from './React_special_elements/send_and_receive_to_child';
import recieveClass from './React_special_elements/recieve_class';
import Warpping from './React_special_elements/use_wrapp_any_component';
import Warpping2 from './React_special_elements/use_wrapp_any_component2';



class SpecialElement extends Component
{
render()
{
    return(

        <div>

        

            <ChangeAndReturnToParent>
            11111dsfasdfasdf
            asdfasdfadsfadsf
            this block sended as props children 22222
            </ChangeAndReturnToParent>
            <recieveClass/>
            <Warpping/>
            <Warpping2/>

        </div>
    )
}

}

export default SpecialElement;