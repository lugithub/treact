import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import MyComponent from '../src/my-component';

const renderer = ReactTestUtils.createRenderer();
let result;

describe('MyComponent', () => {
  beforeEach(() => {
    renderer.render(<MyComponent />);
    result = renderer.getRenderOutput();
  });

  it('renders a div', () => {
    expect(result.type).toBe('div');
    expect(result.props.children).toEqual(
      <span className="heading">Title</span>
    );
  });
});
