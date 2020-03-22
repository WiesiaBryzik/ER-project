import React from 'react';
import { shallow } from 'enzyme';
import { RegulationsComponent } from './Regulations';

describe('Component Regulations', () => {
  it('should render without crashing', () => {
    const component = shallow(<RegulationsComponent />);
    expect(component).toBeTruthy();
  });
});
