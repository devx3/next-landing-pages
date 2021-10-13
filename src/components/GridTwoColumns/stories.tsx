import { Meta, Story } from '@storybook/react/types-6-0';
import { GridTwoColumns, GridTwoColumnsProps } from '.';
import { mock } from './mock';

export default {
  title: 'GridTwoColumns',
  component: GridTwoColumns,
  args: mock,
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const GridDark: Story<GridTwoColumnsProps> = (args) => {
  return (
    <div>
      <GridTwoColumns {...args} />
    </div>
  );
};

export const Grid: Story<GridTwoColumnsProps> = (args) => {
  return (
    <div>
      <GridTwoColumns {...args} darkMode={false} />
    </div>
  );
};
