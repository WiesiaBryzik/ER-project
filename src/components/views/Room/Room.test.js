import React from 'react';
import { shallow } from 'enzyme';
import { RoomComponent } from './Room';

describe('Component Room', () => {
  it('should render without crashing', () => {
    const component = shallow(<RoomComponent />);
    expect(component).toBeTruthy();
  });
});
