import React, {Component} from 'react'
import StartStyle from './comps4/start_with_style'
import ButtonsStyle from './comps4/buttons_style'
import MediaQ from './comps4/media_query'
/* need to add this radium for using media query  */
/* and rap all the return in StyleRoot element  */
/* you dont need it if you use only Pseudo like :hover */
import Radium, { StyleRoot } from 'radium'
import ErrorBoundary from './comps5/error_block'

class App4 extends Component
{
    render()
    {
       
        return(
            /* the styleRoot rap all only for media query  */
            
                <StyleRoot>            
                    <div>
                    <ErrorBoundary>
                        <StartStyle/>
                        <ButtonsStyle/>
                        <MediaQ/>
                        </ErrorBoundary>
                        aaa
                    </div>
                </StyleRoot>
            
        )
    }
}

export default App4;