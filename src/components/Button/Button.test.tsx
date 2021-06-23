import { render, screen } from '@testing-library/react';
import { Button, ButtonType } from './Button';

const defaultArgs: ButtonType = {
  type: 'button',
  variant: 'filled',
  color: 'primary',
};

test('renders correctly', () => {
  const { asFragment } = render(<Button {...defaultArgs}>Test Button </Button>);
  expect(asFragment()).toMatchSnapshot();
});

test('filled outline outline variant', () => {
  const outlineArgs: ButtonType = {
    type: 'button',
    variant: 'outline',
    color: 'primary',
  };

  render(<Button {...outlineArgs}>Test Button </Button>);
  const button = screen.getByRole('button');

  expect(button.className).toEqual('button button--outline button--primary');
});

test('outline secondary outline variant', () => {
  const outlineArgs: ButtonType = {
    type: 'button',
    variant: 'outline',
    color: 'secondary',
  };

  render(<Button {...outlineArgs}>Test Button </Button>);
  const button = screen.getByRole('button');

  expect(button.className).toEqual('button button--outline button--secondary');
});

test('filled primary filled primary variant', () => {
  const outlineArgs: ButtonType = {
    type: 'button',
    variant: 'filled',
    color: 'primary',
  };

  render(<Button {...outlineArgs}>Test Button </Button>);
  const button = screen.getByRole('button');

  expect(button.className).toEqual('button button--filled button--primary');
});

test('filled secondary outline variant', () => {
  const outlineArgs: ButtonType = {
    type: 'button',
    variant: 'filled',
    color: 'secondary',
  };

  render(<Button {...outlineArgs}>Test Button </Button>);
  const button = screen.getByRole('button');

  expect(button.className).toEqual('button button--filled button--secondary');
});
