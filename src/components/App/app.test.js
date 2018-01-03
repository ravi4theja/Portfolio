import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { App } from './index';

describe('App', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('should render without crashing', () => {
    expect(wrapper.exists()).to.be.true;
  })

})