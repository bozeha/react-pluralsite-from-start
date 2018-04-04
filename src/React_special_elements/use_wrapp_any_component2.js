import React , {Component} from 'react';
import WrappTheComp from './wrapp_any_component_full_component';



class WrappThis extends Component{
    render (){

        return (
            <div>
        xxxxxxxxxxxxxxxxxxxxx
        yyyyyyyyyyyyyyyyyyyy
        zzzzzzzzzzzzzzzzzzzzz
            </div>
        )
    }
}

export default WrappTheComp(WrappThis,'bobClass');