import { fireEvent, render, screen } from '@testing-library/react';
import { Hero } from './Hero';


test('renders correctly', () => {
  const handleClick = jest.fn;
  const { asFragment } = render(<Hero onSignIn={handleClick} />);
  expect(asFragment()).toMatchSnapshot();
});


test('calls onClick', () => {
    const handleClick = jest.fn();
    render(<Hero onSignIn={handleClick} />);
    const button = screen.getByText('Sign In');
    fireEvent.click(button);
    expect(handleClick).toBeCalled();
  });