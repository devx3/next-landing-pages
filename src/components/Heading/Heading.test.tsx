import { screen } from '@testing-library/react';
import { Heading } from '.';
import { renderTheme, rerenderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
  it('Should render with default values', () => {
    renderTheme(<Heading>Hangmans Chair x Regarde Les Hommes Tomber</Heading>);

    const heading = screen.getByRole('heading', {
      name: 'Hangmans Chair x Regarde Les Hommes Tomber',
    });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.fonts.sizes.extraHuge,
      'text-transform': 'none',
    });
  });

  it('Should render with DarkMode Off values', () => {
    renderTheme(<Heading darkMode={false}>Cant Talk</Heading>);

    const heading = screen.getByRole('heading', {
      name: 'Cant Talk',
    });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
    });
  });

  it('Should render correct font sizes', () => {
    const { rerender } = renderTheme(
      <Heading size={'smallest'}>Cant Talk</Heading>,
    );

    const heading = screen.getByRole('heading', {
      name: 'Cant Talk',
    });

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.smallest,
    });

    rerenderTheme(rerender, <Heading size={'small'}>Cant Talk</Heading>);

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.small,
    });
  });

  it('Should render correct when using mobile', () => {
    renderTheme(<Heading size={'smallest'}>Cant Talk</Heading>);

    expect(screen.getByRole('heading', { name: 'Cant Talk' })).toHaveStyleRule(
      'font-size',
      theme.fonts.sizes.biggest,
      {
        media: theme.media.ltMedia,
      },
    );
  });

  it('Should render correctly in UPPERCASE letters', () => {
    renderTheme(<Heading uppercase>Olá</Heading>);

    const heading = screen.getByRole('heading', { name: 'Olá' });

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('Should render correctly a H6', () => {
    const { container } = renderTheme(<Heading as="h6">Olá</Heading>);
    const h6 = container.querySelector('h6');

    expect(h6.tagName.toLowerCase()).toBe('h6');
  });
});
