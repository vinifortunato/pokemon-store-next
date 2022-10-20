import { Story } from '@storybook/react';
import DefaultButton from "./DefaultButton";
import { DefaultButtonProps } from './DefaultButton.types';

export default {
  title: 'Components/Buttons/DefaultButton',
  component: DefaultButton,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['button', 'submit', 'reset']
      },
      defaultValue: 'button'
    },
    label: {
      control: 'text',
      defaultValue: 'Label'
    },
    onClick: {
      action: 'onClick',
    },
    testId: {
      control: 'text',
      defaultValue: 'button-default'
    },
  }
}

const Template: Story<DefaultButtonProps> = (args) => (
  <div>
    <DefaultButton {...args} />
  </div>
);

export const Default = Template.bind({});
