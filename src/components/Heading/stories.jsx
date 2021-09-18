import { Heading } from '.';

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
};

export const Dark = (args) => <Heading {...args} />;
export const Light = (args) => <Heading {...args} />;

Dark.parameters = {
    backgrounds: {
        default: 'dark',
    },
};

Light.args = {
    darkMode: false,
};
