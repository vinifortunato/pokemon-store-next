import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Cart } from '../';

const mockStore = configureStore();
const store = mockStore({
  cart: []
});

describe('Cart Component', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Cart />
      </Provider>

    );
    expect(screen.getByTestId('cart')).toBeInTheDocument();
  });

  it('should open cart correctly', () => {
    render(
      <Provider store={store}>
        <Cart open />
      </Provider>

    );
    expect(screen.getByTestId('cart')).toHaveClass('open');
  });

  it('should render items correctly', () => {
    const store = mockStore({
      cart: [
        {
          name: 'wartortle',
          sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png',
          price: 2250,
          amount: 1
        }
      ]
    });

    render(
      <Provider store={store}>
        <Cart />
      </Provider>

    );
    expect(screen.getByTestId('cart')).toBeInTheDocument();
    expect(screen.getByTestId('wartortle')).toBeInTheDocument();
  });

  it('should remove item correctly', async () => {
    const onRemoveCallback = jest.fn();

    const mockedItem = {
      name: 'wartortle',
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png',
      price: 2250,
      amount: 1
    }

    const store = mockStore({
      cart: [mockedItem]
    });

    render(
      <Provider store={store}>
        <Cart onRemove={onRemoveCallback} />
      </Provider>
    );
    expect(screen.getByTestId('cart')).toBeInTheDocument();
    expect(screen.getByTestId('wartortle')).toBeInTheDocument();

    await userEvent.click(screen.getByTestId('wartortle-button'));
    expect(onRemoveCallback).toBeCalledTimes(1);
    expect(onRemoveCallback).toBeCalledWith(mockedItem);
  });

  it('should close cart correctly', async () => {
    const onCloseCallback = jest.fn();
    render(
      <Provider store={store}>
        <Cart onClose={onCloseCallback} />
      </Provider>
    );
    expect(screen.getByTestId('cart')).toBeInTheDocument();
    await userEvent.click(screen.getByTestId('cart-button-close'));
    expect(onCloseCallback).toBeCalledTimes(1);
  });
});
