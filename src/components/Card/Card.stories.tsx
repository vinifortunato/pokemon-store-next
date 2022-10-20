import { Story } from '@storybook/react';
import Card from "./Card";
import { CardProps } from './Card.types';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    name: {
      control: 'text',
      defaultValue: 'bulbasaur'
    },
    onClick: {
      action: 'onClick'
    }
  }
}

const Template: Story<CardProps> = (args) => (
  <div>
    <Card {...args} />
  </div>
);

export const Default = Template.bind({});
