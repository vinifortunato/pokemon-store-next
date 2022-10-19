import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DefaultButton } from '../';

describe('DefaultButton Component', () => {

  it('should render correctly', () => {
    render(<DefaultButton />);
    expect(screen.getByTestId('button-default')).toBeInTheDocument();
  });

  it('should call callback on click correctly', async () => {
    const onButtonClick = jest.fn();
    render(<DefaultButton onClick={onButtonClick} />);
    expect(screen.getByTestId('button-default')).toBeInTheDocument();
    await userEvent.click(screen.getByTestId('button-default'));
    expect(onButtonClick).toBeCalledTimes(1);
  });

});
