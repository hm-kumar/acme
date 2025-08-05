import { render } from '@testing-library/react';

import AcmeLib from './lib';

describe('AcmeLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AcmeLib />);
    expect(baseElement).toBeTruthy();
  });
});
