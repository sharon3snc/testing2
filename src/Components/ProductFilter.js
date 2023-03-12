import { useState } from "react";


function ProductFilter ({products, setFilteredProducts}) {
    const[searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
        setFilteredProducts(
            products.filter((product)=>
                product.name.toLowerCase().includes(event.target.value.toLowerCase())
            )
        );
    };

    return(
        <div>
            <input type="text" placeholder="Buscar producto:" value={searchTerm} onChange={handleInputChange}/>
        </div>
    );
}

export default ProductFilter;
