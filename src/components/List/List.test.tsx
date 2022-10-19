import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { List } from '../';

describe('List Component', () => {
  const mockedItems = [
    {
      name: 'bulbasaur'
    }
  ];

  const mockedResponse = {
    name: 'bulbasaur',
    sprites: {
      other: {
        'official-artwork': ''
      }
    },
    weight: 100,
    height: 100
  }

  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should render correctly', () => {
    render(<List />);
    expect(screen.getByTestId('list')).toBeInTheDocument();
  });

  it('should render items correctly', async () => {
    fetchMock.mockOnce(JSON.stringify(mockedResponse));
    await act(async () => {
      render(<List items={mockedItems} />);
    });
    expect(screen.getByTestId('list')).toBeInTheDocument();
    expect(screen.getByTestId('card-bulbasaur')).toBeInTheDocument();
  });

  it('should call onItemClick correctly', async () => {
    const onItemClick = jest.fn();
    fetchMock.mockOnce(JSON.stringify(mockedResponse));
    await act(async () => {
      render(<List items={mockedItems} onItemClick={onItemClick} />);
    });
    expect(screen.getByTestId('list')).toBeInTheDocument();
    expect(screen.getByTestId('card-bulbasaur')).toBeInTheDocument();
    await userEvent.click(screen.getByTestId('card-bulbasaur-button-add'));
    expect(onItemClick).toBeCalledTimes(1);
  });

});
