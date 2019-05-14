import React, { Component } from "react";
import connect from 'react-redux/es/connect/connect';
import { Button } from "./components/button";
import { AddEvent } from "./components/addEvent";
import { openEventCreationWindow, closeEventCreationWindow} from "./store/actions/eventCreationWindowActions/eventCreationWindow";
import { setEvents } from "./store/actions/eventsActions/setEvents";
import { addEvent } from "./store/actions/eventsActions/addEvent";
import { events } from "./services/events";
import Event from "./components/event";
import { deleteEvent } from "./store/actions/eventsActions/deleteEvent";

import './App.css';

class AppComponent extends Component {
  constructor() {
    super();
    this.state = {
      myEvents: []
    }
  }


  componentDidMount() {
    const { setEvents } = this.props;
    // setEvents( events );               //  to set default events
  }

  onClickAddEventOpen = (e) => {
    const { openEventCreationWindow } = this.props;
    openEventCreationWindow()

  };

  onClickAddEventClose = () => {
    const { closeEventCreationWindow } = this.props;
    closeEventCreationWindow();
  };

  onClickSendEvents = () => {
    const { events } = this.props;
    fetch('url', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(events)
    }).then(response => {
      console.log('response', response);
    })
  };

  intersection = (e1x, e1y, e2x, e2y) => {
    if(e1y <= e2x || e1x >= e2y ) {
      return false
    } else {
      return true
    }
  };

  renderEvents = () => {
    const { events, deleteEvent } = this.props;

    return events.map((event, index)=> {
      let style = {
        top: (event.start * 2) + 'px',
        height: (event.duration * 2) + 'px'
      };
      let arr = events.filter(ev => {
        return ((ev.start !== event.start) || (ev.duration !== event.duration) || (ev.title !== event.title))
      });

      arr.forEach((elem, ind) => {
        let tmp = this.intersection(event.start, (event.start + event.duration), elem.start, (elem.start + elem.duration));
        if(tmp) {
          style.width = '85px';
          if(ind >= index) {
            // style.position = 'relative';
            style.left = '100px';
          }
        }
      });
      const childRef = React.createRef();
      // this.state.myEvents.push(childRef);

      return <Event ref={ childRef } style={ style } key={ index } title={ event.title } delEvent={ deleteEvent } event={ event }/>
    })
  };

  render() {
    const { eventCreationWindow, addEvent } = this.props;
    return (
      <div className='container'>
        <div className='manage-events'>
          <Button label='add event' onClick={ this.onClickAddEventOpen } />
          <Button label='send events' onClick={ this.onClickSendEvents } />
        </div>
        <div className='calendar'>
          <div className='time'>
            <ul className='time-list'>
              <li>8:00</li>
              <li>8:30</li>
              <li>9:00</li>
              <li>9:30</li>
              <li>10:00</li>
              <li>10:30</li>
              <li>11:00</li>
              <li>11:30</li>
              <li>12:00</li>
              <li>12:30</li>
              <li>13:00</li>
              <li>13:30</li>
              <li>14:00</li>
              <li>14:30</li>
              <li>15:00</li>
              <li>15:30</li>
              <li>16:00</li>
              <li>16:30</li>
              <li>17:00</li>
            </ul>
          </div>
          <div className='calendar-events'>
            {
              this.renderEvents()
            }
          </div>
        </div>

        {
          eventCreationWindow ? <AddEvent  close={ this.onClickAddEventClose } addEvent={ addEvent } /> : ''
        }

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    eventCreationWindow: state.eventCreationWindow,
    events: state.events
  };
};

const mapDispatchToProps = {
  openEventCreationWindow,
  closeEventCreationWindow,
  setEvents,
  addEvent,
  deleteEvent
};

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);
