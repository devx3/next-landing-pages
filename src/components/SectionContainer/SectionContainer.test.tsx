import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { SectionContainer } from '.';

describe('<SectionContainer />', () => {
  it('Should render with default values', () => {
    const { container } = renderTheme(
      <SectionContainer>Children</SectionContainer>,
    );
    const section = screen.getByText('Children');

    expect(section).toHaveStyle('max-width: 120rem');
    expect(container).toMatchSnapshot();
  });
});
