import React, { Component } from 'react';

class Event extends Component {
  constructor() {
    super();
    this.state = {
      showDelEvent: false,
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
      <div ref={this.props.innerRef}
           className='event'
           style={ style }
           onMouseEnter={ this.handleHoverOn }
           onMouseLeave={ this.handleHoverOff }
      >
        { title }
        {
          this.state.showDelEvent ? <div className='delEvent' onClick={ () => delEvent(event) }>X</div> : ''
        }
      </div>
    )
  }
}

export default React.forwardRef((props, ref) => <Event innerRef={ref} {...props}/>);