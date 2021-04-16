import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    query: 32, // by default if no number is inputted, there will be maximum of 32 events
  }

  updateNumberOfEvents = (event) => {
    const value = event.target.value
    this.props.updateEvents(null, value);
    this.setState({
      query: value
    })
  }

  render() {
    return <div className="numberOfEvents">
    <label>Number Of Events</label>
    <input type="number" className="eventNumberInput" value={this.state.query} onChange={this.updateNumberOfEvents}/>
    </div>
  }
}

export default NumberOfEvents;