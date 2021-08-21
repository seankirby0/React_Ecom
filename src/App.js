import React, { Component } from 'react';
import Nav from './components/Nav';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home' ;
import About from './views/About' ;
import Products from './views/Products';
import Users from './views/Users';
import CreateUser from './views/CreateUser';
import Login from './views/Login';
import SingleUser from './views/SingleUser';
import Cart from './views/Cart';

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <div className='container'>
          <Switch>
            <Route exact path='/' render={ () => <Home />  } />
            <Route exact path='/about' render={ () => <About />  } />
            <Route exact path='/products' render={ () => <Products />  } />
            <Route exact path='/users' render={ () => <Users />  } />
            <Route exact path='/create-user' render={ () => <CreateUser />  } />
            <Route exact path='/login' render={ () => <Login />  } />
            <Route exact path='/cart' render={ () => <Cart />  } />
            <Route exact path='/users/:id'component={SingleUser} />


          </Switch>

        </div>
      </div>
    )
  }
}
