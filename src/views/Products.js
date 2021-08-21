import React, { Component } from 'react'
import ProductDetails from '../components/ProductDetails';
// import { Link } from 'react-router-dom';

export default class Products extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount(){
        fetch('https://cart-api-66.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    products: data.products
                })
            })
                .catch(err => console.error(err))
    }

    render() {
        let products = this.state.products

        return (
            <>
                <ul className='list-group'>
                    {products.map((product, idx) => <ProductDetails product={product} key={idx} />)}
                </ul>
            </>
        )
    }
}
