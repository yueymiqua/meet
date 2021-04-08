# Meet Application


## FEATURE 1: FILTER EVENTS BY CITY

### Feature 1 User Story:
 - As a: User
 - I should be able to: type in a city to the filter box
 - So that: I can see a list of upcoming events for that city

### Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
 - Given: User has not search a city
 - When: User opens up the app
 - Then: the user should see a list of the events

### Scenario 2: User should see a list of suggestions when they search for a city.
 - Given: the main page is loaded
 - When: user starts typing in the city textbox
 - Then: user should see a list of cities (suggestion) matching what they typed

### Scenario 3: User can select a city from the suggested list.
 - Given: the user was typing a city name in the textbox and a list of suggested cities is showing
 - When: the user is selecting a city from the suggested list
 - Then: city should change to that selected city and user will get all the events happening there


## FEATURE 2: SHOW/HIDE AN EVENT’S DETAILS

### Feature 2 User Story:
 - As a: User
 - I should be able to: toggle on an “event’s details” button
 - So that: I can show or hide the details of that particular event

### Scenario 1: An event element is collapsed by default.
 - Given: the list of events have been loaded
 - When: User navigates to the events page
 - Then: User sees a collapsed bar that can expand to show details
### Scenario 2: User can expand an event to see its details.
 - Given: the list of events have been loaded
 - When: user clicks “show details” button for an event
 - Then: the event element will expand to show event details
### Scenario 3: User can collapse an event to hide its details.
 - Given: the details of a particular event are loaded
 - When: the user clicks “show less” button for an event
 - Then: the event element will collapse the event details


## FEATURE 3: SPECIFY NUMBER OF EVENTS

### Feature 1 User Story:
 - As a: User
 - I should be able to: enter a number in a “number of events” field
 - So that: I can see that many event displayed my the current webpage

### Scenario 1: When user hasn’t specified a number, 32 is the default number.
 - Given: all events have been loaded from database
 - When: user navigates to the event page
 - Then: events list will display 32 items
### Scenario 2: User can change the number of events they want to see.
 - Given: text field when all events have been loaded
 - When: user types in number events to be displayed on screen
 - Then: number of events are displayed according to user’s input in text field


## FEATURE 4: USE THE APP WHEN OFFLINE

### Feature 1 User Story:
 - As a: User
 - I should be able to: open the app on the desktop
 - So that: I can see a static list of events even when there is no internet connection
 
### Scenario 1: Show cached data when there’s no internet connection.
 - Given: all events that were loaded when there was connection are stored in cache folder
 - When: user navigates to event page without internet connection
 - Then: displays a list of events stored in cache
### Scenario 2: Show error when user changes the settings (city, time range).
 - Given: all events relating to a particular city is displayed
 - When: user navigates to event page without internet connection
 - Then: user gets error prompt that there is no internet connection and city cannot be changed


## FEATURE 5: DATA VISUALIZATION

### Feature 1 User Story:
 - As a: User
 - I should be able to: navigate to an “event chart” page
 - So that: view a chart that displays number of events by city

### Scenario 1: Show a chart with the number of upcoming events in each city.
 - Given: data chart is created from derived list of upcoming events
 - When: user clicks on show a button/link to view chart of upcoming events in each city 
 - Then: displays a chart of a breakdown of upcoming events by city
