import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class ProductDetails extends Component {
    render() {
        const product = this.props.product
        return (
            <li className='list-group-item'>
                <h5>{product.name}</h5>
                <div>
                    {/* <p>{product.id}</p> */}
                    <img  src={product.image_url}  />
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    <Link to={`/products/${product.id}`} className='btn btn-secondary mx-auto'>View Product</Link>
                    <Link to={`/cart`} className='btn btn-success mx-3'>Add to Cart</Link>
                </div>
            </li>
        )
    }
}
