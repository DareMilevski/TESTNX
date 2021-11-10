import { render } from '@testing-library/react';
import BoxCard from './box-card';
describe('BoxCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BoxCard />);
    expect(baseElement).toBeTruthy();
  });
});
