import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Menu } from './index.jsx';
import { mock } from '../NavLinks/mock';
import { theme } from '../../styles/theme';

const links = mock;
const logoData = {
  text: 'Logo',
  link: 'http://localhost',
  srcImage: '',
};

describe('<Menu />', () => {
  it('Should render logo and Main Menu', () => {
    const { container } = renderTheme(
      <Menu links={links} logoData={logoData} />,
    );

    expect(screen.getByRole('heading', { name: 'Logo' })).toBeInTheDocument();
    expect(
      screen.getByRole('navigation', { name: 'Main menu' }),
    ).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('Should render menu mobile and button for open and clone menu', () => {
    renderTheme(<Menu links={links} logoData={logoData} />);

    const button = screen.getByLabelText('Open/Close Menu');
    const menuContainer = button.nextSibling;

    expect(button).toHaveStyleRule('display', 'none');
    expect(button).toHaveStyleRule('display', 'flex', {
      media: theme.media.ltMedia,
    });

    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.ltMedia,
    });

    expect(screen.getByLabelText('Open Menu')).toBeInTheDocument();

    fireEvent.click(button);

    expect(menuContainer).toHaveStyleRule('opacity', '1', {
      media: theme.media.ltMedia,
    });

    expect(screen.getByLabelText('Close Menu')).toBeInTheDocument();

    fireEvent.click(menuContainer);

    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.ltMedia,
    });

    expect(screen.getByLabelText('Open Menu')).toBeInTheDocument();
  });

  it('Should not render links', () => {
    const { container } = renderTheme(<Menu logoData={logoData} />);
    expect(
      screen.queryByRole('navigation', { name: 'Main menu' }).firstChild,
    ).not.toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
