import React, { Component } from 'react';

export class Event extends Component {
  constructor() {
    super();
    this.state = {
      showDelEvent: false
    }
  }

  handleHoverOn = () => {
    this.setState({
      showDelEvent: true
    })
  };

  handleHoverOff = () => {
    this.setState({
      showDelEvent: false
    })
  };

  render() {
    const { style, title, delEvent, event } = this.props;

    return(
      <div className={ `event ${ event.position }` }
           style={ style } onMouseEnter={ this.handleHoverOn } onMouseLeave={ this.handleHoverOff }>
        { title }
        {
          this.state.showDelEvent ? <div className='delEvent' onClick={ () => delEvent(event) }>X</div> : ''
        }
      </div>
    )
  }
}
