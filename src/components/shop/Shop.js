import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    // using state for containe load data
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    // usinf effect for load data
    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.key);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                <h3>Products {products.length}</h3>
                {
                    products.map(product => <Product
                        key={product.key}
                        product={product}
                        // props hisebe ptabo
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">

                <Cart cart={cart} ></Cart>
            </div>
        </div>
    );
};

export default Shop;