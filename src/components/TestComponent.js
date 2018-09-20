import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import TextboxComponent from './TextboxComponent';


@withRouter
@inject('routingStore')
@observer
export default class TestComponent extends Component {
  render() {
    const testArray = ["1", "2", "3"]
    const uuidv4 = require('uuid/v4');
    return (
       <div>
          {testArray.map(t => {
              return <TextboxComponent key={uuidv4()}  />;
          })}
       </div>
        
    );
  }
}

