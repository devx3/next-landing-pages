import { Menu } from '.';
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
};

export const Template = (args) => {
    return (
        <div>
            <Menu {...args} />
        </div>
    );
};
