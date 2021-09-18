import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme.js';
import { theme } from '../../styles/theme.js';
import { TextComponent } from './index.jsx';

describe('<TextComponent />', () => {
  it('Should render a text', () => {
    renderTheme(<TextComponent>Lorem ipsaum</TextComponent>);
    expect(screen.getByText('Lorem ipsaum')).toBeInTheDocument();
  });

  it('Should match with snapshot', () => {
    renderTheme(<TextComponent>Lorem ipsaum</TextComponent>);
    expect(screen.getByText('Lorem ipsaum')).toMatchSnapshot();
  });

  it('Should render with the small font', () => {
    renderTheme(<TextComponent>Lorem ipsaum</TextComponent>);
    expect(screen.getByText('Lorem ipsaum')).toHaveStyleRule(
      'font-size',
      theme.fonts.sizes.small,
    );
  });
});
