import { Story } from '@storybook/react';
import Header from "./Header";
import { HeaderProps } from './Header.types';

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    onCartClick: {
      action: 'onCartClick',
    }
  }
}

const Template: Story<HeaderProps> = (args) => (
  <div>
    <Header {...args} />
  </div>
);

export const Default = Template.bind({});
