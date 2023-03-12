import React, {useState} from 'react';
import ProductFilter from './ProductFilter';
import ChangeOrderByPrice from './Changeorder';
import PriceColor from './Getpricecolor';


export default function ProductsPage () {
        const [products, setProducts] = useState([
            { id: 1, name: 'Cachopo', price: 30, }, 
            { id: 3, name: 'Navajas', price: 25, }, 
            { id: 2, name: 'Chorizo a la sidra', price: 15, }, 
        ]);

        const [filteredProducts, setFilteredProducts] = useState(products);

        return ( 
            <> 
            <h1>Products</h1>
            <ProductFilter products={products} setFilteredProducts={setFilteredProducts} /> 
            <ChangeOrderByPrice products={filteredProducts} setProducts={setFilteredProducts}/> 
            {filteredProducts.map(product => ( 
            <div key={product.id}> 
            {product.name} - <PriceColor price={product.price}/>
            </div> 
            ))} 
            </> 
            ); 
        } 

