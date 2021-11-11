import UiPabau from './ui-pabau';

export default {
  component: UiPabau,
  title: 'UiPabau',
  argTypes: { handleClick: { action: 'handleClick' } },
};

const Template = (args) => <UiPabau {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  name: 'dare',
  backgroundColor: 'blue',
  color: 'green',
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  name: 'darkom',
  backgroundColor: 'silver',
  color: 'black',
};
