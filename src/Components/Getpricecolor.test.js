import { render, screen } from '@testing-library/react';
import PriceColor from './Getpricecolor';

describe('PriceColor', () => {
  test('renders green color when price is less than or equal to 15', () => {
    render(<PriceColor price={15} />);
    const priceElement = screen.getByText(/15/);
    expect(priceElement).toBeInTheDocument();
    expect(priceElement).toHaveStyle('color: green');
  });

  test('renders orange color when price is greater than 15 and less than or equal to 25', () => {
    render(<PriceColor price={20} />);
    const priceElement = screen.getByText(/20/);
    expect(priceElement).toBeInTheDocument();
    expect(priceElement).toHaveStyle('color: orange');
  });

  test('renders red color when price is greater than 25', () => {
    render(<PriceColor price={30} />);
    const priceElement = screen.getByText(/30/);
    expect(priceElement).toBeInTheDocument();
    expect(priceElement).toHaveStyle('color: red');
  });
});
