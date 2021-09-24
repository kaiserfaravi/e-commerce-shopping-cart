import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './Product.css';

const Product = (props) => {
    // console.log(props);
    const { name, img, price, seller, stock } = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;

    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h2 className="product-name">Products name {name}</h2>
                <p><small>by:{seller} </small></p>
                <p>price:${price} </p>
                <p><small>Only {stock} left in stock-order soon</small></p>
                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className="btn-regular"
                >{cartIcon} Add to Cart</button>
            </div>

        </div>
    );
};

export default Product;