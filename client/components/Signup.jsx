import React, { Component } from 'react'

class Signup extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            this.props.password === this.props.password2 ? 
            <React.Fragment>
                <input className="signup-input" type="text" placeholder="Username" onChange={(e)=>this.props.setUsername(e.target.value)}/>
                <input className="signup-input" type="text" placeholder="Password" onChange={(e)=>this.props.setPassword1(e.target.value)}/>
                <input className="signup-input" type="text" placeholder="Confirm Password" onChange={(e)=>this.props.setPassword2(e.target.value)}/>
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
            </React.Fragment> :
            <React.Fragment>
            <input className="signup-input" type="text" placeholder="Username" onChange={(e)=>this.props.setUsername(e.target.value)}/>
            <input className="signup-input" type="text" placeholder="Password" onChange={(e)=>this.props.setPassword1(e.target.value)}/>
            <input className="signup-input" type="text" placeholder="Confirm Password" onChange={(e)=>this.props.setPassword2(e.target.value)}/>
            <input type="button" value="Sign-up" onClick={(e)=> e.target.value = "passwords do not match"}/>
            <input type="button" value="Back to Log in" onClick={this.props.signUp}/>
        </React.Fragment>
        )
    }
}

export default Signup