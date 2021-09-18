import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { LogoLink } from './index.jsx';

describe('<LogoLink />', () => {
  it('Should render as a text with a link', () => {
    renderTheme(<LogoLink text="Lucifer" link="http://localhost" />);
    const link = screen.getByText('Lucifer').parentNode;
    expect(link).toHaveAttribute('href', 'http://localhost');
  });
  it('Should render a image with a link', () => {
    renderTheme(
      <LogoLink
        text="Lucifer"
        srcImg="assets/images/logo.svg"
        link="http://localhost"
      />,
    );
    const link = screen.getByRole('img');
    expect(link).toHaveAttribute('src', 'assets/images/logo.svg');
    expect(link).toHaveAttribute('alt', 'Lucifer');
  });

  it('Should match snapshot text', () => {
    renderTheme(<LogoLink text="Lucifer" link="http://localhost" />);
    const link = screen.getByText('Lucifer').parentNode;
    expect(link).toMatchSnapshot();
  });

  it('Should match snapshot image', () => {
    renderTheme(
      <LogoLink
        text="Lucifer"
        srcImg="assets/images/logo.svg"
        link="http://localhost"
      />,
    );
    const link = screen.getByRole('img');
    expect(link).toMatchSnapshot();
  });
});
