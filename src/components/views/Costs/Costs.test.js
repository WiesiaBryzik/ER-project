import React from 'react';
import { shallow } from 'enzyme';
import { CostsComponent } from './Costs';

describe('Component Costs', () => {
  it('should render without crashing', () => {
    const component = shallow(<CostsComponent />);
    expect(component).toBeTruthy();
  });
});
