import React from 'react';
import { shallow } from 'enzyme';
import { VouchersComponent } from './Vouchers';

describe('Component Vouchers', () => {
  it('should render without crashing', () => {
    const component = shallow(<VouchersComponent />);
    expect(component).toBeTruthy();
  });
});
