import { render, screen } from '@testing-library/react';
import Login from '../Login';

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

test('render judul halaman', () => {
  render(<Login />);
  const linkElement = screen.getByText(/Welcome, Admin BCR/i);
  expect(linkElement).toBeInTheDocument();
});
