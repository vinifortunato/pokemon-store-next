import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header } from '../';

describe('Header Component', () => {

  it('should render correctly', () => {
    render(<Header />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('should call callback on click correctly', async () => {
    const onCartClick = jest.fn();
    render(<Header onCartClick={onCartClick} />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
    await userEvent.click(screen.getByTestId('header-button'));
    expect(onCartClick).toBeCalledTimes(1);
  });

});
