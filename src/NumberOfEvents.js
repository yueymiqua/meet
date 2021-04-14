import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    query: 32, // by default if no number is inputted, there will be maximum 32 events shown
  }

  updateNumberOfEvents = (event) => {
    const value = event.target.value
    this.setState({
      query: value
    })
  }

  render() {
    return <div className="NumberOfEvents">
    <input type="number" className="number-of-events" value={this.state.query} onChange={this.updateNumberOfEvents}/>
    </div>
  }
}

export default NumberOfEvents;