import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Register from '../Register';

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

test('render Create New Account', () => {
  render(<Register />);
  const linkElement = screen.getByText(/Create New Account/i);
  expect(linkElement).toBeInTheDocument();
});
