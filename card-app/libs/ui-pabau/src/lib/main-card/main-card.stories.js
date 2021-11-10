import MainCard from './main-card';

export default {
  component: MainCard,
  title: 'MainCard',
};

const Template = (args) => <MainCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
