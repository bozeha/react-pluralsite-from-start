import React, {Component} from 'react';

class ListOfElementsMapChild extends Component
{
    render(props)
    {

        return(
            <li>
                {this.props.currentChild}
            </li>

        )
    }
}

export default ListOfElementsMapChild;