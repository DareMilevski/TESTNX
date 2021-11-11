import BoxCard from './box-card';

export default {
  component: BoxCard,
  title: 'BoxCard',
};

const Template = (args) => <BoxCard{...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: "ime"
};
