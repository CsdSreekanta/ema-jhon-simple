import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data =>setProducts(data))
    }, [])
    const handleAddToCart = (product)=>{
        console.log('clicked', product); 
        setCart([...cart, product])
    }
    

    return (
        <div className='shop-container'>
            <div className="product-container">
               {
                   products.map(product=> <Product
                     key={product.id}
                     product={product}
                     handleAddToCart={handleAddToCart}></Product>)
               }
            </div>
            <div className="cart-container">
                <h3>Order Summary:{products.length}</h3>
                <p>Selected item:{cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;