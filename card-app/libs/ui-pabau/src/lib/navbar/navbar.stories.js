import Navbar from './navbar';

export default {
  component: Navbar,
  title: 'Navbar',
};

const Template = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
