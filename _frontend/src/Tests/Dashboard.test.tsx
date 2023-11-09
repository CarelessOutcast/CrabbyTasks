

import { render, screen } from '@testing-library/react';
import Dashboard from '../pages/Dashboard/Home';
import '@testing-library/jest-dom/extend-expect'; // Add this line to extend Jest matchers
import '@testing-library/jest-dom';

//Rendering the DashBoard: 
test('renders dashboard page', () => {
  render(<Dashboard />);
  const dashboardElement = screen.getByTestId('Home');
  expect(dashboardElement).toBeInTheDocument();
});
