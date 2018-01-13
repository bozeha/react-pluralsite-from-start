import React, {Component} from 'react';

class ReactBasic extends Component{
    render()
    {
        /* return (
            <div>
            this is basic return 
            </div>
        ) */
        
        /// whats realy created in the background

        /// option 1 create element , the div is the element we creating
        // instead of null we can enter js object 
        //the therd element it's a text we add in the div we created 
        return React.createElement('div',null,'this is the new div we created');
        
        /// option 2 is to create element with element in the element 
        /// instead of text we adding another react.createElement
        return React.createElement('div',null,React.createElement('h1',null,'this is the h1 we create in the div we create'));
        
        /// option 3 is to create element with css class =>className
        // in the second element instead of null we addin js object of className
        return React.createElement('div',{className:'divClass'},'this element return with className');

    }
}

export default  ReactBasic;