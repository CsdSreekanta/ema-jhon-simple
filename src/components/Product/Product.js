import React from 'react';
import './Product.css'

const Product = (props) => {
   const {name, seller, price, ratings, img} =props.product
    return (
        <div className='product'>
           <img src={img} alt="" />
           <div className='product-details'>
                <p className='product-name'>{name}</p>
                <p>Price:${price}</p>
                <p><small>Manufacturer:{seller}</small></p>
                <p><small>Rating:{ratings}</small></p>
           </div>
           <button className='button-cart'>
               <p>Add to Card</p>
           </button>
        </div>
    );
};

export default Product;