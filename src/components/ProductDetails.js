import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class ProductDetails extends Component {
    render() {
        const product = this.props.product
        return (
            <div className="col-12 col-lg-4 col-md-6 col-sm-8">
                <li className='list-group-item mt-3'>
                    <div >
                        <h3>{product.name}</h3>
                        {/* <p>{product.id}</p> */}
                        <img src={`${product.image_url}` } className='card-img-top' alt='img'  />
                        <p>{product.description}</p>
                        <h4>${product.price}</h4>
                        <Link to={`/products/${product.id}`} className='btn btn-secondary mx-auto'>View Product</Link>
                        <Link to={`/cart`} className='btn btn-success mx-3'>Add to Cart</Link>
                    </div>
                </li>
            </div>    
        )
    }
}
