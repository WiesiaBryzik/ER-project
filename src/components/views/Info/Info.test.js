import React from 'react';
import { shallow } from 'enzyme';
import { InfoComponent } from './Info';

describe('Component Info', () => {
  it('should render without crashing', () => {
    const component = shallow(<InfoComponent />);
    expect(component).toBeTruthy();
  });
});
