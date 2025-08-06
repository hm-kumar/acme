import { render } from '@testing-library/react';

import AcmeLibs from './libs';

describe('AcmeLibs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AcmeLibs />);
    expect(baseElement).toBeTruthy();
  });
});
