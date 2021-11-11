import Button from './button/button';

export default {
  component: Button,
  title: 'ButtonSubmit',
  argTypes: { handleClick: { action: 'handleClick' } },
};

const Template = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
Button.args = {
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
