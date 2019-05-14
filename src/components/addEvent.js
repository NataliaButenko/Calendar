import React, { Component } from 'react';
import { Button } from "./button";

export class AddEvent extends Component {
  constructor() {
    super();
    this.state = {
      event: {}
    }
  }

  onClickApply = () => {
    let newEvent = {
      start: Number(this.state.event.hour) + Number(this.state.event.minutes),
      duration: Number(this.state.event.duration),
      title: this.state.event.title,
      position: 1
    };
    const { close, addEvent } = this.props;
    addEvent(newEvent);
    close();
  };

  onChangeTime = (e) => {
    this.setState({
      event: {...this.state.event, [e.target.id]: e.target.value }
    })
  };

  onChange = (e) => {
    this.setState({
      event: {...this.state.event, [e.target.id]: e.target.value}
    })
  };

  render() {
    const { close } = this.props;
    return(
      <div className='add-event'>
        <h3>Add event</h3>
        <h5>Select the start time of the event</h5>
        <select id='hour' name="hour" onChange={ this.onChangeTime } defaultValue='0'>
          <option value="0">8</option>
          <option value="60">9</option>
          <option value="120">10</option>
          <option value="180">11</option>
          <option value="240">12</option>
          <option value="300">13</option>
          <option value="360">14</option>
          <option value="420">15</option>
          <option value="480">16</option>
        </select>
        <span> : </span>
        <select name="minutes" id="minutes" onChange={ this.onChangeTime } defaultValue='00'>
          <option value="00">00</option>
          <option value="05">05</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
          <option value="30">30</option>
          <option value="35">35</option>
          <option value="40">40</option>
          <option value="45">45</option>
          <option value="50">50</option>
          <option value="55">55</option>
        </select>
        <h5>Enter duration in minutes</h5>
        <input id="duration" type='number' onChange={ this.onChange }/>
        <h5>Title</h5>
        <textarea id="title" onChange={ this.onChange }></textarea>
        <div className='apply'>
          <Button label='apply' onClick={ () => this.onClickApply({ start: 70, duration: 15, title: 'MMMMMM' }) }/>
        </div>
        <button className='close' onClick={ () => { close() }}>X</button>
      </div>
    )
  }
}
