# Your Meet App

## Project Description
Your Meet App is both a web and mobile application(can be downloaded onto Desktop or mobile) that allows the user to receive a list of upcoming CareerFoundry events. Users are able to type in the name of a city that they want to view upcoming events in, and then are able to view a list of suggested cities that match the characters of their input. Upon selecting a city (or choosing the "all cities" selection), the user will then be able to view a list of upcoming events pertaining to that selection. They can also enter a number between 1 and 32 to specify how many events they would like to be displayed on the page. In the list of events shown, they can view basic information regarding the event (ie. event name, start-time, and location). They can click on a button to display more details (ie. event description and a link to the google calendar invite). By default the details are collapsed. Once the details are displayed, they can click the button again to hide the details. There will also be a scatterchart and a pie chart displayed to show visual representation of the number of events, the type of events, and the location of the events that are upcoming. 
Event data used for this application are CareerFoundry events. This project uses a serverless function created on AWS Lambda. The user first requests an access code from Google API. The access code is then sent to the serverless function along with client details, which are then passed back to google to acquire an access token. Once authenticated by google, user will then be authorized to fetch the events from Google storage to be displayed in the app. 
The methodology for building this app was through test-driven development. Unit tests and integration tests were written first before the code was modified to passed those test. The Jest library was used (shallow rendering for unit tests and mount rendering for integration tests) as well as Jest-Cucumber for Acceptance testing and Puppeteer for End-to-End testing.
Your Meet App also functions offline thanks to it being a Progressive Web Application (has secure requests, uses ServiceWorker API to fetch data from previous cache, and manifest.json).  

## How to run the project:
1. Clone GitHub repository
2. Navigate to project root directory
3. Run "npm install" on command prompt CLI
4. Open web browser and navigate to http:localhost:3000
5. Enjoy using the app!

## Local Dependancies:
 - "@testing-library/jest-dom": "^5.11.10",
 - "@testing-library/react": "^11.2.6",
 - "@testing-library/user-event": "^12.8.3",
 - "atatus-spa": "^4.3.2",
 - "axios": "^0.21.1",
 - "nprogress": "^0.2.0",
 - "react": "^17.0.2",
 - "react-dom": "^17.0.2",
 - "react-scripts": "4.0.3",
 - "recharts": "^2.0.9",
 - "web-vitals": "^0.2.4",
 - "workbox-background-sync": "^5.1.4",
 - "workbox-broadcast-update": "^5.1.4",
 - "workbox-cacheable-response": "^5.1.4",
 - "workbox-core": "^5.1.4",
 - "workbox-expiration": "^5.1.4",
 - "workbox-google-analytics": "^5.1.4",
 - "workbox-navigation-preload": "^5.1.4",
 - "workbox-precaching": "^5.1.4",
 - "workbox-range-requests": "^5.1.4",
 - "workbox-routing": "^5.1.4",
 - "workbox-strategies": "^5.1.4",
 - "workbox-streams": "^5.1.4"

## Dev Dependancies:
 - "@wojtekmaj/enzyme-adapter-react-17": "^0.6.1",
 - "gh-pages": "^3.1.0",
 - "jest-cucumber": "^3.0.1",
 - "puppeteer": "^8.0.0"