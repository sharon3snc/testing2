import { render, screen } from '@testing-library/react';
import ChangeOrderByPrice from './Changeorder';

test('renderiza la orden del boton', () => {
    const setProducts = jest.fn();
    render(<ChangeOrderByPrice products={[]} setProducts={setProducts} />);

    const button = screen.getByText('Change order');
    expect(button).toBeInTheDocument();

    button.click();
    expect(setProducts).toHaveBeenCalled();
});

