import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class HomeComponent extends Component {
  componentDidMount() {
    console.log("home did mount") 
  }
  render() {
    return (
       <div>home
         <img src="Freesample.svg" />
       </div>
    );
  }
}

