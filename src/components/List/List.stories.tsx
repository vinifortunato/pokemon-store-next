import { Story } from '@storybook/react';
import List from "./List";
import { ListProps } from './List.types';

export default {
  title: 'Components/List',
  component: List,
  argTypes: {
    items: {
      control: 'object',
      defaultValue: [
        {
          name: 'bulbasaur'
        },
        {
          name: 'charmander'
        },
        {
          name: 'charizard'
        }
      ]
    },
    onItemClick: {
      action: 'onItemClick',
    }
  }
}

const Template: Story<ListProps> = (args) => (
  <div>
    <List {...args} />
  </div>
);

export const Default = Template.bind({});
