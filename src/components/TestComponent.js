import React, { Component } from 'react';
import TextboxComponent from './TextboxComponent';
import CheckboxComponent from './CheckboxComponent';



export default class TestComponent extends Component {
  componentDidMount() {
    console.log("testcomponent") 
  }

  render() {
   
    const testArray = ["1", "2", "3"]
    const uuidv4 = require('uuid/v4');
    return (
       <div>
          {testArray.map(t => {
             if(t == 1){
              return <TextboxComponent key={t}  />;
             }else {
               return <CheckboxComponent  key={t}/>
             }
          
          })}
       </div>
        
    );
  }
}

