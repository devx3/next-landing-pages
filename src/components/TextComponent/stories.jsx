import { TextComponent } from '.';

export default {
    title: 'TextComponent',
    component: TextComponent,
    args: {
        children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed pharetra tempor odio at vehicula. Curabitur malesuada elit mollis,
        dictum velit nec, vulputate tellus. Aenean lobortis arcu et enim
        aliquam sodales eu vitae erat. Suspendisse mattis scelerisque rutrum.
        Pellentesque imperdiet orci dolor, ut consectetur metus elementum quis.`,
    },
    argTypes: {
        children: { type: 'string' },
    },
};

export const Template = (args) => {
    return (
        <div>
            <TextComponent {...args} />
        </div>
    );
};
