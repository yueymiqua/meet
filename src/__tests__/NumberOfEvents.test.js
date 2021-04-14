import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe ('<NumberOfEvents /> Component', () => {

  // initialize wrapper to use shallow before all tests are ran
  let NumberOfEventsWrapper;
  NumberOfEventsWrapper = shallow(<NumberOfEvents/>)

  // Test #1
  test('renders input field for number of events', () => {
    expect(NumberOfEventsWrapper.find('.number-of-events')).toHaveLength(1);
  });

  // Test #2
  test('renders text input correctly', () => {
    const query = NumberOfEventsWrapper.state('query');
    expect(NumberOfEventsWrapper.find('.number-of-events').prop('value')).toBe(query)
  });

  // Test #3
  test("input type is entered is a number", () => {
    expect(NumberOfEventsWrapper.find('.number-of-events').at(0).props().type).toEqual('number');
  })

  // Test #4
  test("input value is by default 32", () => {
    expect(NumberOfEventsWrapper.find('.number-of-events').at(0).props().value).toEqual(32);
  })

  // Test #5
  test('change state when input changes', () => {
    NumberOfEventsWrapper.setState({
      query: 3
    })
    const eventObject = { target: { value: 5 }}
    NumberOfEventsWrapper.find('.number-of-events').simulate('change', eventObject)
    expect(NumberOfEventsWrapper.state('query')).toBe(5)
  })

});