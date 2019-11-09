import React, { Component } from 'react'

class Signup extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            this.props.password === this.props.password2 ? 
            <div className="signup">
                <h2>Sign-up</h2>
                <input className="signup-input" type="text" placeholder="Username" onChange={(e)=>this.props.setUsername(e.target.value)}/>
                <input className="signup-input" type="password" placeholder="Password" onChange={(e)=>this.props.setPassword1(e.target.value)}/>
                <input className="signup-input" type="password" placeholder="Confirm Password" onChange={(e)=>this.props.setPassword2(e.target.value)}/>
                <div id="login-buttons">
                    <input type="button" value="Sign-up" onClick={()=>{
                        // console.log('username', this.props.username)
                        // console.log('password', this.props.password)
                        fetch('/signup', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json'},
                            body: JSON.stringify({
                                'username': this.props.username,
                                'password': this.props.password,
                            })
                        }).then(resp=> resp.text())
                        .then(data =>{
                            if (data === "user created") {
                                this.props.logInOut()
                                this.props.setScore(0)
                            }
                        })
                    }}/>
                    <input type="button" value="Back to Log in" onClick={this.props.signUp}/>
                </div>
            </div> :
            <div className="signup">
            <h2>Sign-up</h2>
            <input className="signup-input" type="text" placeholder="Username" onChange={(e)=>this.props.setUsername(e.target.value)}/>
            <input className="signup-input" type="password" placeholder="Password" onChange={(e)=>this.props.setPassword1(e.target.value)}/>
            <input className="signup-input" type="password" placeholder="Confirm Password" onChange={(e)=>this.props.setPassword2(e.target.value)}/>
            <div id="login-buttons">
                <input type="button" value="Sign-up" onClick={(e)=> e.target.value = "passwords do not match"}/>
                <input type="button" value="Back to Log in" onClick={this.props.signUp}/>
            </div>
        </div>
        )
    }
}

export default Signup