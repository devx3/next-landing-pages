import { renderTheme } from '../../styles/render-theme';
import { Loading } from './index.jsx';

describe('<Loading />', () => {
  it('Should render with default values', () => {
    renderTheme(<Loading>Children</Loading>);
  });
});
