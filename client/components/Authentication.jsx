import React, { Component } from 'react';

import Signup from './Signup.jsx';
import Login from './Login.jsx';

class Authentication extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            this.props.signedUp ? 
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
            :
            <Login 
            username={ this.props.username }
            password={ this.props.password }
            signUp={ this.props.signUp }
            logInOut={ this.props.logInOut }
            setUsername={ this.props.setUsername }
            setPassword1={ this.props.setPassword1 }
            setScore={ this.props.setScore }
            />
        )
    }
};


export default Authentication;