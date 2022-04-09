import React from 'react';
import './Product.css'

const Product = ({product, handleAddToCart}) => {
   
   const {name, seller, price, ratings, img} =product;
   

 
    return (
        <div className='product'>
           <img src={img} alt="" />
           <div className='product-details'>
                <p className='product-name'>{name}</p>
                <p>Price:${price}</p>
                <p><small>Manufacturer:{seller}</small></p>
                <p><small>Rating:{ratings}</small></p>
           </div>
           <button onClick={()=> handleAddToCart(product)} className='button-cart'>
               <p>Add to Cart</p>
           </button>
        </div>
    );
};

export default Product;