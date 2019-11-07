import React, { Component } from 'react';
import Authentication from '../components/Authentication.jsx'
import Content from '../components/Content.jsx'

class MainContainer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            !this.props.loggedIn ?
            <div>
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
                </div> :
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
        )
    }
}

export default MainContainer