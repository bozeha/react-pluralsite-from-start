import React from 'react';

const tempR = (props)=>{
    const rnd= Math.random();
    console.log("aaaa"+rnd);
    if (rnd>0.7)
    {
        throw new Error('sssssss');
    }
    
    return (
        <div>
        ddd
        </div>
    )
}

export default Pr;