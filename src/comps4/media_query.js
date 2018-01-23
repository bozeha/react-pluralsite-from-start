import React, {Component} from 'react';

/* need to add the radium for media query  */
/* and export this prop with radium  exmpale : export default Radium(MediaQ); */
import Radium from 'radium';
class MediaQ extends Component
{
    render()
    {
        /* this is the media query style  */
        const theRaduimMedia={
            '@media (max-width:700px)':{
                backgroundColor:'peru',
                color:'red'
            }
         }
    return(
        
            <div style={theRaduimMedia}>Radium = >change with media query under 700px</div>
        
    )
}
}

export default Radium(MediaQ);