import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GridContent } from '.';
import { mock } from './mock';

describe('<GridContent />', () => {
  it('Should render Grid Content', () => {
    renderTheme(<GridContent {...mock} />);
    const heading = screen.getByRole('heading', {
      name: 'Hello GridContent',
    });

    expect(heading).toBeInTheDocument();
    expect(heading).toMatchSnapshot();
  });
});
