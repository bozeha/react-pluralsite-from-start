import React from 'react';

const WrappTheComp  = (TheComponentToWrapp,className)=>
{
    return (props)=>
    (
        <div className={className}>
            {/* ...props ->to forword the props  */}
            <TheComponentToWrapp {...props}/>
        </div>
    )
}

export default WrappTheComp; 