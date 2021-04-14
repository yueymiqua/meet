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
    return (
      <div className="event-container">
        <div className="basic-info"/>
        {showOrHideDetails
          ? <div className="additional-info"/>
          : null
        }
        <button className="show-or-hide-details-button" onClick={this.changeHideShow(showOrHideDetails)}>Hide/Show Details</button>
      </div> 
      
    )
  }
}

export default Event;