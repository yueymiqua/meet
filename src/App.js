import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './nprogress.css';
import { WarningAlert } from './alert';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import EventGenre from './EventGenre';

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

  getData = () => {
    const { events, locations } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length;
      const city = location.split(' ').shift();
      return {number, city};
    })
    return data;
  };

  render() {
    const { locations, numberOfEvents, events } = this.state;
    return (
      <div className="App">
        <h1>Your Meet App</h1>
        <WarningAlert className="WarningAlert" text={this.state.infoText}/>
        <CitySearch locations={locations} updateEvents={this.updateEvents} />
        <NumberOfEvents updateEvents={this.updateEvents} numberOfEvents={numberOfEvents} />
        
        <div className="data-vis-wrapper">
          <EventGenre events={events} />
          <ResponsiveContainer height={400} >
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20, }}>
              <CartesianGrid />
              <XAxis type="category" dataKey="city" name="city" />
              <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false}/>
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.getData()} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        <EventList events={events}/>
      </div>
    );
  }
}

export default App;