import { render } from '@testing-library/react';
import DetailMenu from './detail-menu';
describe('DetailMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DetailMenu />);
    expect(baseElement).toBeTruthy();
  });
});
