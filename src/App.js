import React from 'react'
import { Container, CssBaseline } from '@material-ui/core'
import Error from './pages/Error'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/NavBar'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  return (
    <>
      <Router>
        <CssBaseline />
        <Navbar />
        <Container maxWidth='md'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />

            <Route exact path='*' component={Error} />
          </Switch>
        </Container>
      </Router>
    </>
  )
}

export default App
