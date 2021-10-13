import { renderTheme } from '../../styles/render-theme';
import { GridTwoColumns } from '.';
import { mock } from './mock';

describe('<GridTwoColumns />', () => {
  it('Should render two columns grid', () => {
    const { container } = renderTheme(<GridTwoColumns {...mock} />);
    expect(container).toMatchSnapshot();
  });
  it('Should render two columns grid darkMode', () => {
    const { container } = renderTheme(
      <GridTwoColumns {...mock} darkMode={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
