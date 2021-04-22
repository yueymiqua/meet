import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './nprogress.css';
import { WarningAlert } from './alert';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    selectedLocation: "all",
    infoText: '',
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if(!navigator.onLine) {
        if (this.mounted) {
          this.setState({ 
            infoText: 'Warning: No internet connection. Events displayed may not be up to date', 
            events: events.slice(0, this.state.numberOfEvents), 
            locations: extractLocations(events) 
          });
        }
      } else {
        if (this.mounted) {
          this.setState({ 
            events: events.slice(0, this.state.numberOfEvents), 
            locations: extractLocations(events) 
          });
        }
      }

    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {
    let locationEvents
    getEvents().then((events) => {
      const count = eventCount || this.state.eventCount;
      const selectedLocation = location || this.state.selectedLocation
      if(selectedLocation === 'all') {
        locationEvents = events.slice(0, count);
      }else {
        locationEvents = events.filter((event) => event.location === selectedLocation).slice(0, count);
      }
      this.setState({
        events: locationEvents,
        numberOfEvents: eventCount,
        selectedLocation,
      });
    });
  }

  render() {
    const { locations, numberOfEvents, events } = this.state;
    return (
      <div className="App">
        <h1>yoUr Meet App</h1>
        <WarningAlert className="WarningAlert" text={this.state.infoText}/>
        <CitySearch locations={locations} updateEvents={this.updateEvents} />
        <NumberOfEvents updateEvents={this.updateEvents} numberOfEvents={numberOfEvents} />
        <EventList events={events}/>
      </div>
    );
  }
}

export default App;