import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }
    const shipping = 15;
    const tax = (total + shipping) * 10;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h4> order summury</h4>
            <h5>Items Ordered {props.cart.length}</h5>
            <br />
            <p> Total ={total} </p>
            <p>shipping ={shipping} </p>
            <p>tax = {tax}</p>
            <p>GrandTotal ={grandTotal} </p>
        </div>
    );
};

export default Cart;