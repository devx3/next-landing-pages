import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import { NavLinks } from '.';
import { mock } from './mock';

describe('<NavLinks />', () => {
  it('Should render links', () => {
    renderTheme(<NavLinks links={mock} />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(mock.length);
  });

  it('Should render without links', () => {
    renderTheme(<NavLinks />);
    const links = screen.queryAllByText(/links/i);
    expect(links).toHaveLength(0);
  });

  it('Should render in Mobile', () => {
    renderTheme(<NavLinks links={mock} />);
    const links = screen.getByText(/Link 2/i).parentElement;
    expect(links).toHaveStyleRule('flex-flow', 'column wrap', {
      media: theme.media.ltMedia,
    });
  });

  it('Should match snapshot', () => {
    const { container } = renderTheme(<NavLinks links={mock} />);
    expect(container).toMatchSnapshot();
  });
});
