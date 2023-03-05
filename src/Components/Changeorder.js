//Should order all products by price in descending order 

export default function ChangeOrderByPrice ({products,setProducts}) {

    const changeOrderByPrice = () => {
        const newProducts = [...products].sort((a,b) => b.price - a.price);
        setProducts(newProducts);
    };

    return <button onClick={changeOrderByPrice}>Change order</button>;
};

