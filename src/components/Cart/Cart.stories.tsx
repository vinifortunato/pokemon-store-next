import { Story } from '@storybook/react';
import { Provider } from 'react-redux';
import store from '../../store';
import Cart from "./Cart";
import { CartProps } from './Cart.types';

export default {
  title: 'Components/Cart',
  component: Cart,
  argTypes: {
    open: {
      control: 'boolean',
      defaultValue: false
    },
    onClose: {
      action: 'onClose'
    },
    onRemove: {
      action: 'onRemove'
    }
  }
}

const Template: Story<CartProps> = (args) => (
  <div>
    <Provider store={store}>
      <Cart {...args} />
    </Provider>
  </div>
);

export const Default = Template.bind({});
