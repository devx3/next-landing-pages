import { renderTheme } from '../../styles/render-theme';
import GridText from '.';
import { mock } from './mock';

describe('<GridText />', () => {
  it('Should render with default values', () => {
    const { container } = renderTheme(<GridText {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('Should render with grid', () => {
    const { container } = renderTheme(<GridText {...mock} grid={mock.grid} />);
    expect(container).toMatchSnapshot();
  });

  it('Should render with background', () => {
    const { container } = renderTheme(<GridText {...mock} background={true} />);
    expect(container).toMatchSnapshot();
  });
  it('Should render with no background', () => {
    const { container } = renderTheme(
      <GridText {...mock} background={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });

  it('Should render with no grid', () => {
    const { container } = renderTheme(<GridText {...mock} grid={undefined} />);
    expect(container).toMatchSnapshot();
  });
});
