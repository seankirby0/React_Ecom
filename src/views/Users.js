import React, { Component } from 'react'
import UserInfo from '../components/UserInfo'
import { Link } from 'react-router-dom';


export default class Users extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        fetch('https://cart-api-66.herokuapp.com/users')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                this.setState({
                    users: data.users
                })
            })
    }

    render() {
        // console.log(this.props.user);
        // const u = this.state.users
        return (
            <div>
                <Link to='/create-user' className='btn btn-primary mt-3'>Register</Link>
                <div className='row'>
                {this.state.users.map((u, i) => {
                    return <UserInfo user={u} key= {i} />
                })}
                </div>
            </div>
        )
    }
}
