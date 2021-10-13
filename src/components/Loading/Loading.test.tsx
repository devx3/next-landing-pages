import { renderTheme } from '../../styles/render-theme';
import { Loading } from '.';

describe('<Loading />', () => {
  it('Should render with default values', () => {
    renderTheme(<Loading />);
  });
});
