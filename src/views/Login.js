import React, { Component } from 'react'

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
                    </div>
                </form>             
            </div>
        )
    }
}
                  
