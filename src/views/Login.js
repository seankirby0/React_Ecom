import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Login extends Component {
    render() {
        return (
            <div>
                LOGIN PAGE
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <fieldset>
                            <label htmlFor='username'>Username</label>
                            <input type='text' className='form-control' name='username' placeholder='Username'></input>
                        </fieldset>
                        <fieldset>
                            <label htmlFor='password'>Password</label>
                            <input type='password' className='form-control' name='password' placeholder='Password'></input>
                        </fieldset>
                        <button type='submit' className='btn btn-outline-primary mt-3'>Log In</button>
                        <Link to='/create-user' className='btn btn-primary mt-3 ml-3'>Register</Link>
                    </div>
                </form>             
            </div>
        )
    }
}
                  
