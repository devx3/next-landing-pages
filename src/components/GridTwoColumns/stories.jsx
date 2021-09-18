import { GridTwoColumns } from '.';
import { mock } from './mock';

export default {
  title: 'GridTwoColumns',
  component: GridTwoColumns,
  args: mock,
  argTypes: {
    children: { type: 'string' },
  },
};

export const GridDark = (args) => {
  return (
    <div>
      <GridTwoColumns {...args} />
    </div>
  );
};

export const Grid = (args) => {
  return (
    <div>
      <GridTwoColumns {...args} darkMode={false} />
    </div>
  );
};
