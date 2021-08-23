import React, { Component } from 'react'

export default class Home extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         products: []
    //     }
    // }

    // componentDidMount(){
    //     fetch('https://cart-api-66.herokuapp.com/${productId}')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             this.setState({
    //                 products: data
    //             })
    //         })
    //             .catch(err => console.error(err))
    // }
    
    render() {

        // const product = this.state.product


        return (
            <div>
                <h1>Welcome to the Prestige World Wide Official Shop!</h1>
                <img src='/img/PWW.jpg' alt='pw' />
                <h4>This Week's Featured Item:</h4>
                
            </div>
        )
    }
}
