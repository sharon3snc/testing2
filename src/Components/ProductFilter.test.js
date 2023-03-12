import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductFilter from './ProductFilter';

describe('ProductFilter', () => {
  const setFilteredProducts = jest.fn();
  const products = [
    { id: 1, name: 'Cachopo', price: 30 },
    { id: 3, name: 'Navajas', price: 25 },
    { id: 2, name: 'Chorizo a la sidra', price: 15 },
  ];

  it('should render an input element', () => {
    render(<ProductFilter products={products} setFilteredProducts={setFilteredProducts} />);
    expect(screen.getByPlaceholderText('Buscar producto:')).toBeInTheDocument();
  });

  it('should update the filtered products when user types in the input', () => {
    render(<ProductFilter products={products} setFilteredProducts={setFilteredProducts} />);
    const input = screen.getByPlaceholderText('Buscar producto:');

    userEvent.type(input, 'Cachopo');

    expect(setFilteredProducts).toHaveBeenCalledWith([
      { id: 1, name: 'Cachopo', price: 30 },
    ]);
  });
});

