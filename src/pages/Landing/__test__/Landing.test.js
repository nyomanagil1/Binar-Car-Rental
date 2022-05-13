import { render, screen } from '@testing-library/react';
import Landing from '../Landing';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

test('render Logo', () => {
  render(<Landing />);
  const linkElement = screen.getByText(/logo/i);
  expect(linkElement).toBeInTheDocument();
});
