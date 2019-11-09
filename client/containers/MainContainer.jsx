import React, { Component } from 'react';
import Authentication from '../components/Authentication.jsx'
import Content from '../components/Content.jsx'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class MainContainer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            !this.props.loggedIn ?
            <React.Fragment>  
                <nav id='nav'>     
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>
                <img
                    alt=""
                    src="http://jservice.io/assets/trebek-503ecf6eafde622b2c3e2dfebb13cc30.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                {'Trivial Trivia'}
                </Navbar.Brand>
            </Navbar>
            </nav>     
            <Authentication 
            //methods
                setUsername={ this.props.setUsername }
                setPassword1={ this.props.setPassword1 }
                setPassword2={ this.props.setPassword2 }
                signUp={ this.props.signUp }
                logInOut={ this.props.logInOut }
                setScore= { this.props.setScore }
                //data
                username={ this.props.username }
                password={ this.props.password }
                password2={ this.props.password2 }
                signedUp={ this.props.signedUp } />
                </React.Fragment> :
            <React.Fragment>
                <nav id='nav'>
                <Navbar bg="light" expand="lg">
                <Navbar.Brand>Trivial Trivia</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link onClick={() =>{
                    fetch('/logout', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json'},
                        body: JSON.stringify({
                            'username': this.props.username,
                            'password': this.props.password,
                            'score': this.props.score,
                        })
                    })
                    this.props.logInOut()
                }}>Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
                </nav>
                <Content 
            //methods
                setAnswer={ this.props.setAnswer }
                logInOut={ this.props.logInOut } 
                correct={ this.props.correct }
                //data
                username={ this.props.username }
                password={ this.props.password }
                score={ this.props.score }
                answer={ this.props.answer }
                questions={ this.props.questions }/>
            </React.Fragment>
        )
    }
}

export default MainContainer