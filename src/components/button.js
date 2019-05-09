import React, { Component } from 'react';

export class Button extends Component {
  render() {
    const { onClick, label } = this.props;
    return(
      <div className='button'
           onClick={ onClick }
      >
        { label }
      </div>
    )
  }
}
