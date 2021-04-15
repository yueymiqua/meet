import React, { Component } from 'react';

class Event extends Component {
  state = {
    showOrHideDetails: null,
  }

  changeHideShow(showOrHideDetails){
    if(showOrHideDetails){
      this.setState({
        showOrHideDetails: false
      })
    }
    if(!showOrHideDetails){
      this.setState({
        showOrHideDetails: true
      })
    }
  }

  render() {
    let { showOrHideDetails } = this.state;
    let { event } = this.props;
    return (
      <div className="event-container">
        <div className="basic-info">
          <div className="name">{ event.summary }</div>
          <br></br>
          <div className="event-start-dateTime">{ event.start.dateTime }</div>
          <div className="event-start-timeZone">{ event.start.timeZone }</div>
        </div>
        {showOrHideDetails
          ? <div className="additional-info">
            <a href={ event.htmlLink } className="event-link">See details on Google calendar</a>
            <div className="event-description">{ event.description }</div>
          </div>
          : null
        }
        <button className="details-btn"  onClick={() => this.changeHideShow(showOrHideDetails)}>Hide/Show Details</button>
      </div> 
      
    )
  }
}

export default Event;