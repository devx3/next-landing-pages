import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GoTop } from './index.jsx';

describe('<GoTop />', () => {
  it('Should render with default values', () => {
    const { container } = renderTheme(<GoTop />);
    const link = screen.getByRole('link', { name: 'Go to top' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#');
    expect(container).toMatchSnapshot();
  });
});
