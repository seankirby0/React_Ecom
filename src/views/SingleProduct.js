import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class SingleProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            product: {}
        }
    }

    componentDidMount(){
        const productId = this.props.match.params.id
        fetch(`https://cart-api-66.herokuapp.com/${productId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    product: data
                })
            })
    }

    // deleteProduct = () => {
    //     const product = this.state.product
    //     fetch(`http://localhroduct:5000/api/products/delete/${product.id}`, {
    //         method : 'DELETE'
    //     })
    //     .then(response => response.json())
    //     .then(result => console.log(result))
    //     .catch(error => console.log('error', error));

    // }


    render() {
        const product = this.state.product

        return (
            <div>
                <Link to="/products" className="btn btn-secondary mt-3 mb-3 ml-3">Back To Products</Link> 
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
            </div>
        )
    }
}
