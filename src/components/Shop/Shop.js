import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(()=>{
        console.log('product load first before fetch')
        fetch('products.json')
        .then(res =>res.json())
        .then(data =>setProducts(data))
    }, [])

    useEffect(()=>{
        console.log('local store first line')
        const storedCart = getStoredCart();
        const savedCart =[]
       for(const id in storedCart){
        const addedProduct = products.find(product => product.id===id);
       if(addedProduct){
          const quantity = storedCart[id];
          addedProduct.quantity = quantity;
          savedCart.push(addedProduct);
          console.log(addedProduct)
       }
       }
       setCart(savedCart)
    },[products])

    const handleAddToCart = (product)=>{
        // console.log('clicked', product); 
        setCart([...cart, product])
        addToDb(product.id);
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
              <Cart cart={cart} ></Cart>
            </div>
        </div>
    );
};

export default Shop;