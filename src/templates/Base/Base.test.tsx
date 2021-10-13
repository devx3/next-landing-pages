import { renderTheme } from '../../styles/render-theme';
import { Base } from '.';
import { mock } from './mock';

describe('<Base />', () => {
  it('Should render with default values', () => {
    const { container } = renderTheme(<Base {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
