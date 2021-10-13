import { renderTheme } from '../../styles/render-theme';
import { GridImage } from '.';
import { mock } from './mock';

describe('<GridImage />', () => {
  it('Should render with default values', () => {
    const { container } = renderTheme(<GridImage {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('Should render with no grid', () => {
    const { container } = renderTheme(<GridImage {...mock} grid={undefined} />);
    expect(container).toMatchSnapshot();
  });
});
