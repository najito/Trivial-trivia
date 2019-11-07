import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <React.Fragment>
                <input
                type="text"
                placeholder="Username"
                name="Username entry"
                onChange={(e)=> this.props.setUsername(e.target.value) }
                />
                <input
                type="password"
                placeholder="Password"
                name="Password entry"
                onChange={(e)=> this.props.setPassword1(e.target.value) }
                />
                <input
                type="button"
                value="Log-In"
                name="LogInSwitch"
                onClick={()=>{
                    fetch('/login', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json'},
                        body: JSON.stringify({
                            'username': this.props.username,
                            'password': this.props.password,
                        })
                    }).then(resp=> resp.json())
                    .then(data => {
                        if (data.message === 'user found') {
                            this.props.logInOut()
                            this.props.setScore(data.score)
                        }
                    })
                }}
                    />
                <input 
                type="button" 
                value="Sign-Up" 
                name="SignUpSwitch" 
                onClick={ this.props.signUp }/>
            </React.Fragment>
        )
    }
}
export default Login;