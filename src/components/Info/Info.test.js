import { render, screen } from '@testing-library/react';
import Info from './Info';

test('renders learn react link', () => {
  render(<Info title="Title" information={[]} />);
  const titleElement = screen.getByText(/Title/i);
  expect(titleElement).toBeInTheDocument();
});
