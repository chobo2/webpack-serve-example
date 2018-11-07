import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable, action } from 'mobx';
import { withRouter } from 'react-router-dom';

@withRouter
@observer
export default class CheckboxComponent extends Component {

    @observable
    isChecked = false;

    @action
  componentDidMount() {
    console.log("CheckboxComponent") 
  }

  constructor(props) {
    super(props);
  }

  @action
  handleChange = event => {
    this.isChecked = event.target.checked;
  };


  render() {
    const props = this.props;
    return (
      <div>
            <input type="checkbox" value="test" checked={this.isChecked} onChange={this.handleChange}/>
      </div>
    );
  }
}
