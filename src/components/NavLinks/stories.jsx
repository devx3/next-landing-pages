import { NavLinks } from '.';
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
};

export const Template = (args) => {
  return (
    <div>
      <NavLinks {...args} />
    </div>
  );
};
