import React from 'react';
import './style.css';
//props is predefined object name
//whenever we want to write text using js in html tag we use {}
const Brick = (props) => {
    console.log("how do my props look like", props);
    return(
         
        <div className='brick-cont'>
            {props.name}  
        </div>
    )
};
export default Brick;