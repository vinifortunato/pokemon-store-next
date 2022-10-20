import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { Card } from '../';

describe('Card Component', () => {
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

  it('should render correctly', async () => {
    fetchMock.mockOnce(JSON.stringify(mockedResponse));
    await act(async () => {
      render(<Card name="bulbasaur" />);
    });
    expect(screen.getByTestId('card-bulbasaur')).toBeInTheDocument();
  });

  it('should call onClick correctly', async () => {
    const onClick = jest.fn();
    fetchMock.mockOnce(JSON.stringify(mockedResponse));
    await act(async () => {
      render(<Card name="bulbasaur" onClick={onClick} />);
    });
    expect(screen.getByTestId('card-bulbasaur')).toBeInTheDocument();
    await userEvent.click(screen.getByTestId('card-bulbasaur-button-add'));
    expect(onClick).toBeCalledTimes(1);
  });

});
