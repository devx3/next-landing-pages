import { Footer, FooterProps } from '.';
import { mock } from './mock';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'Footer',
  component: Footer,
  args: mock,
} as Meta;

export const Template: Story<FooterProps> = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
