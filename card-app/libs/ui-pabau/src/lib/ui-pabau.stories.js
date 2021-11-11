import Button from './button/button';

export default {
  component: Button,
  title: 'ButtonSubmit',
  argTypes: { handleClick: { action: 'handleClick' } },
};

const Template = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  name: 'dare',
  backgroundColor: 'green',
  color: 'white',
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  name: 'darko',
  backgroundColor: 'silver',
  color: 'black',
};
