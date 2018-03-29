import React from 'react';

const withClass =(Wrapped,className)=>
{
    return (props)=>(
        <div className={className}>
            <Wrapped/>
        </div>

    )
}

export default withClass;