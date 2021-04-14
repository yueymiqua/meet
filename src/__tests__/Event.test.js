import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe ('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event events={ mockData }/>)
  });
  test('render event details correctly', () => {
    expect(EventWrapper.find('.basic-info')).toHaveLength(1);
  });
  test('render show event details', () => {
    EventWrapper.setState({ showOrHideDetails: true })
    EventWrapper.find('.show-or-hide-details-button').simulate('click')
    expect(EventWrapper.find('.additional-info')).toHaveLength(1);
  });
  test('render hide event details', () => {
    EventWrapper.setState({ showOrHideDetails: false})
    EventWrapper.find('.show-or-hide-details-button').simulate('click')
    expect(EventWrapper.find('.additional-info')).toHaveLength(0);
  })
});