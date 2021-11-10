import { render } from '@testing-library/react';
import UiPabau from './ui-pabau';
describe('UiPabau', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiPabau />);
    expect(baseElement).toBeTruthy();
  });
});
