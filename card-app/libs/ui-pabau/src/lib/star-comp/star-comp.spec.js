import { render } from '@testing-library/react';
import StarComp from './star-comp';
describe('StarComp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StarComp />);
    expect(baseElement).toBeTruthy();
  });
});
