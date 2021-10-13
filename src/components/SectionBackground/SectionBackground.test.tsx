import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import { SectionBackground } from '.';

describe('<SectionBackground />', () => {
  it('Should render with white background', () => {
    renderTheme(
      <SectionBackground>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(screen.getByText('Children').parentNode.parentNode).toHaveStyleRule(
      'background',
      theme.colors.white,
    );
  });

  it('Should render with a given ID', () => {
    renderTheme(
      <SectionBackground sectionId="666">
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(screen.getByText('Children').parentNode.parentNode).toHaveAttribute(
      'id',
      '666',
    );
  });

  it('Should render with dark background', () => {
    renderTheme(
      <SectionBackground background={true}>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(screen.getByText('Children').parentNode.parentNode).toHaveStyleRule(
      'background',
      theme.colors.primaryColor,
    );
  });

  it('Should render with dark background', () => {
    renderTheme(
      <SectionBackground background={true}>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(screen.getByText('Children').parentNode.parentNode).toHaveStyleRule(
      'background',
      theme.colors.primaryColor,
    );
  });

  it('Should render with dark background', () => {
    renderTheme(
      <SectionBackground background={true}>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(screen.getByText('Children').parentNode.parentNode).toHaveStyleRule(
      'background',
      theme.colors.primaryColor,
    );
  });
});
