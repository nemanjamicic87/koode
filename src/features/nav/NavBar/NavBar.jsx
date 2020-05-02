import React, { Component } from 'react'
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import SignOutMenu from '../Menus/SignOutMenu';
import SignedInMenu from '../Menus/SignedInMenu';

class NavBar extends Component {

    state = {
      autenticated: false
    }

    handleSignIn = () => {
      this.setState({autenticated: true});
    }

    handleSignOut = () => {
      this.setState({autenticated: false});
      this.props.history.push('/');
    }

    render() {
        const {autenticated} = this.state;
        return (
                  <Menu inverted fixed="top">
                    <Container>
                      <Menu.Item as={NavLink} exact to='/' header>
                        <img src="assets/logo.png" alt="logo" />
                        Koode
                      </Menu.Item>
                      <Menu.Item as={NavLink} to='/events' name="Events" />
                      <Menu.Item as={NavLink} to='/people' name="People" />
                      <Menu.Item>
                        <Button 
                          as={Link}
                          to='/createEvent'
                          floated="right" 
                          positive 
                          inverted 
                          content="Create Event" 
                          />
                      </Menu.Item>
                      {autenticated ?  (
                        <SignedInMenu signOut={this.handleSignOut}/> 
                        ) : (
                        <SignOutMenu signIn={this.handleSignIn}/>
                        )}
                    </Container>
                  </Menu>
        )
    }
}
export default withRouter (NavBar);
