import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';
import NewsPage from './NewsPage';
import NewsItem from './NewsPage';


xtest('renders DFA Github link', () =>
{
  render(<App />);
  const linkElement = screen.getByText(/Digital Futures Academy/i);
  expect(linkElement).toBeInTheDocument();
});

