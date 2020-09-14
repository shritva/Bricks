import React from 'react';
import './style.css';
import Brick from '../Brick/Brick.js';

class Wall extends React.Component{

    //equal to sign before {} defines a opbject in react. Here the object name is state.
    //every object has a key-value pair. Key can be string, number etc. Before colon is key name, after colon is value of key
    //props are the data which comes from parent to the child
    //parent is wall, child is brick
    constructor(props){
        //array of bricks
        //this represent this class
        //we can't directly update the states
        //this basically reffers of this class i.e. wall
        //super keyword is used to call the parent clASS constructor. Here the constructor of React.component class
        super(props);
        this.state = {     
            bricks: [1,2,3,4]    //all the keys, i.e. brick must have diff value otherwise you will face an error, sorting is not necessary
    
        };
    }
        //we could have also defined this function directly on onClick as an anonymous function
        //we cannot directly update the state. otherwise our view will not get updated. 
        //therefore in react we have setState method. Using this only we can updatw the view in react.
        //setState method is a part of React.Component class. Provided by react.
        //It accepts an object and the key-value pair you want to update.
        addMoreBricks = () => {
            console.log("I am getting clicked");
            const newBrickArray = [ ...this.state.bricks ];
            newBrickArray.push(newBrickArray.length +1);
            //this.state.bricks.push[5];
            //console.log(this.state.bricks);
            this.setState({
                bricks: newBrickArray

            });
        };

    // render method returns what is beind displayed on the browser
    //@Override method
    //we can use any random word instead of 'name'
    //do not call the function in onClick. otherwise we will go on an infinite loop: her we are only giving th ereference of that function i.e. addMoreBricks
    //because we want that function to be cslled only when the user clicks on it, not every time.
    //() =>   these are called anonymous function, without any name
                 //brick is each element of bricks
                 //we can give key only to react components. and everytime it has to be unique
                 //using jsx we can write js code directly inside html
                 //jsk is an extension of javascript from react
    //state is the data of its own components
    //map function takes as function as an input
    //when we have to render more than one thing in an react component we have to define a key
    //key must be unique, and as we are giving the array ements as keys each elemnt in the array must be unique. Otherwise the console will complain.
    render = () => {
        return(
         <div className='wall-container'>
                  
                 {
                 this.state.bricks.map( (brick) => {
                     // return <Brick name="Brick 1"/>     static method
                     return <Brick key={brick} name={brick} />;
                 })

    }
                 <button className="btn" onClick = {this.addMoreBricks}> Add More </button>    
                
         </div>
        );      
    };
}

export default Wall;