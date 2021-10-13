import { Heading, HeadingProps } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Where the doves are gone',
    darkMode: true,
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Dark: Story<HeadingProps> = (args) => <Heading {...args} />;
export const Light: Story<HeadingProps> = (args) => <Heading {...args} />;

Dark.parameters = {
  backgrounds: {
    default: 'dark',
  },
};

Light.args = {
  darkMode: false,
};
