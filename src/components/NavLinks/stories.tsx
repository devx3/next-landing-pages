import { Meta, Story } from '@storybook/react/types-6-0';
import { NavLinkProps, NavLinks } from '.';
import { mock } from './mock';

export default {
  title: 'NavLinks',
  component: NavLinks,
  args: {
    links: mock,
  },
  argTypes: {
    links: { type: '' },
  },
} as Meta;

export const Template: Story<NavLinkProps> = (args) => {
  return (
    <div>
      <NavLinks {...args} />
    </div>
  );
};
