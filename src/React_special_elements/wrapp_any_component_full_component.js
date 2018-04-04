import React, {Component} from 'react';

const WrappTheCompFull  = (TheComponentToWrapp,className)=>
{
    return class extends Component{
        render()
        {
        return(
            <div className={className}>
            {/* ...this.props ->to forword the props  */}
                <TheComponentToWrapp {...this.props}/>
                00000this is full0000000
            </div>

        )

        }
 
}
}

export default WrappTheCompFull; 