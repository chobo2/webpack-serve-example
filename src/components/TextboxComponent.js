import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable, action } from 'mobx';
import { withRouter } from 'react-router-dom';

@withRouter
@inject('routingStore')
@observer
export default class TextboxComponent extends Component {
  @observable
  min = '';

  @action
  componentDidMount() {
    console.log("test") 
  }

  constructor(props) {
    super(props);
  }

  @action
  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this[name] = value;
    this.props.history.replace("/test/why?param=1");
  };

  render() {
    const props = this.props;
    return (
      <div>
            <input
              type="number"
              name="min"
              value={this.min}
              placeholder="Min"
              onChange={this.handleChange}
            />
      </div>
    );
  }
}
