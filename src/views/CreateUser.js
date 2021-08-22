import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class CreateUser extends Component {
    constructor(props){
        super(props);

        this.state = {
            redirect: null
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const first_name = e.target.first_name.value;
        const last_name = e.target.last_name.value;
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
    
        console.log(first_name, last_name, username, email, password, confirmPassword);
        if (password !== confirmPassword){
            console.log('Password Does Not Match')
            return
        }

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Accept", "*/*")
    


        const requestBody = JSON.stringify({
            "first_name" : first_name,
            "last_name" : last_name,
            "username" : username,
            "email" : email,
            "password" : password,
        })

        // fetch('http://localhost:5000/api/create-user',{
        fetch('https://cart-api-66.herokuapp.com/create-user',{
            method: 'POST',
            headers: myHeaders,
            body: requestBody
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    redirect: `users/${data.id}`
                })
            })
            .catch(err => console.error(err))
    }

    render() {

        return (
            this.state.redirect ? 
            <Redirect to={this.state.redirect} /> :
            <div>
                <h2>Create User</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <fieldset>
                            <label htmlFor='first_name'>First Name</label>
                            <input type='text' className='form-control' name='first_name' placeholder='First Name'></input>
                        </fieldset>
                        <fieldset>
                            <label htmlFor='last_name'>Last Name</label>
                            <input type='text' className='form-control' name='last_name' placeholder='Last Name'></input>
                        </fieldset>
                        <fieldset>
                            <label htmlFor='username'>Username</label>
                            <input type='text' className='form-control' name='username' placeholder='Username'></input>
                        </fieldset>
                        <fieldset>
                            <label htmlFor='email'>Email</label>
                            <input type='text' className='form-control' name='email' placeholder='Email'></input>
                        </fieldset>
                        <fieldset>
                            <label htmlFor='password'>Password</label>
                            <input type='password' className='form-control' name='password' placeholder='Password'></input>
                        </fieldset>
                        <fieldset>
                            <label htmlFor='confirmPassword'>Confirm Password</label>
                            <input type='password' className='form-control' name='confirmPassword' placeholder='Confirm Password'></input>
                        </fieldset>
                        <button type='submit' className='btn btn-outline-primary mt-3'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
