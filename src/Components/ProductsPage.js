import React, {useState} from 'react';
import ChangeOrderByPrice from './Changeorder';
import PriceColor from './Getpricecolor';

export default function ProductsPage () {
        const [products, setProducts] = useState([
            { id: 1, name: 'Chachopo', price: 30, }, 
            { id: 3, name: 'Navajas', price: 25, }, 
            { id: 2, name: 'Chorizo a la sidra', price: 15, }, 
        ]);

            return ( 
            <> 
            <h1>Products</h1> 
            <ChangeOrderByPrice products={products} setProducts={setProducts}/> 
            {products.map(product => ( 
            <div key={product.id}> 
            {product.name} - <PriceColor price={product.price}/>
            </div> 
            ))} 
            </> 
            ); 
        } 

