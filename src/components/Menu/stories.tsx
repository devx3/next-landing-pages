import { Meta, Story } from '@storybook/react/types-6-0';
import { Menu, MenuProps } from '.';
import { mock } from '../NavLinks/mock';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: mock,
    logoData: {
      text: 'Logo',
      link: 'http://localhost',
      srcImage: '',
    },
  },
  argTypes: {
    links: { type: 'array' },
    logoData: { type: '' },
  },
} as Meta;

export const Template: Story<MenuProps> = (args) => {
  return (
    <div>
      <Menu {...args} />
    </div>
  );
};
