import { Footer } from '.';
import { mock } from './mock';

export default {
  title: 'Footer',
  component: Footer,
  args: mock,
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
