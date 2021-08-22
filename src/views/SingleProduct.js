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
        fetch(`https://cart-api-66.herokuapp.com/products`)
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
                <div className="card mt-3">
                    <div className="card-header">
                        Product Information
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Product ID: {product.id}</li>
                        <li className="list-group-item">Product Name: {product.name}</li>
                        <li className="list-group-item">Product Description: {product.description}</li>
                        <li className="list-group-item">Product Price: {product.price}</li>
                    </ul>
            
                </div>
            </div>
        )
    }
}
