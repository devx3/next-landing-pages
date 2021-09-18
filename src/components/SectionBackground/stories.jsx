import { SectionBackground } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>Testando SectionContainer</h1>
        <p>
          Fugiat sunt anim quis quis in laboris exercitation cillum id non
          fugiat elit ullamco et. Pariatur amet aliqua exercitation deserunt sit
          cillum culpa consectetur eiusmod est nostrud sint enim. Veniam do
          reprehenderit irure anim nulla voluptate dolore cillum excepteur eu.
          Adipisicing do sunt ex do qui nostrud consectetur id nulla non esse
          voluptate et. Sit laborum aliqua adipisicing cillum consequat cillum
          ullamco aute labore adipisicing ullamco sunt.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
