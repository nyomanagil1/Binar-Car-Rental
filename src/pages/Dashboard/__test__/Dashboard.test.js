import { render, screen } from '@testing-library/react';
import Dashboard from '../Dashboard';

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

test('render Limit', () => {
  render(<Dashboard />);
  const linkElement = screen.getByText(/Limit/i);
  expect(linkElement).toBeInTheDocument();
});
