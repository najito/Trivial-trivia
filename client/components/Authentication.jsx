import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Signup from './Signup.jsx';
import Login from './Login.jsx';

class Authentication extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            this.props.signedUp ? 
            <React.Fragment>
                <Particles className="sky"
                    params={{
                        "particles": {
                            "number": {
                                "value": 50
                            },
                            "size": {
                                "value": 3
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            }
                        }
                    }} />
                <Signup
                username={ this.props.username }
                password={ this.props.password }
                password2={ this.props.password2 }
                logInOut={ this.props.logInOut}
                signUp={ this.props.signUp }
                setUsername={ this.props.setUsername }
                setPassword1={ this.props.setPassword1 }
                setPassword2={ this.props.setPassword2 }
                setScore={ this.props.setScore }/>
            </React.Fragment>
            :
            <React.Fragment>
                <Particles className="sky"
                    params={{
                        "particles": {
                            "number": {
                                "value": 50
                            },
                            "size": {
                                "value": 3
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            }
                        }
                    }} />
                <Login
                username={ this.props.username }
                password={ this.props.password }
                signUp={ this.props.signUp }
                logInOut={ this.props.logInOut }
                setUsername={ this.props.setUsername }
                setPassword1={ this.props.setPassword1 }
                setScore={ this.props.setScore }
                />
            </React.Fragment>
        )
    }
};


export default Authentication;