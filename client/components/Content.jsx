import React, { Component } from 'react';
import Questions from './Questions'

class Content extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <React.Fragment>
                <span className="userInfo">Welcome { this.props.username }</span>
                <span className="userInfo">Score: { this.props.score }</span>
                <input 
                type="button"
                value="Logout"
                onClick={() =>{
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
                }}
                />
                <Questions 
                questions={ this.props.questions }
                answer={ this.props.answer }
                correct={ this.props.correct }
                setAnswer={ this.props.setAnswer }/>
            </React.Fragment>
        )
    }
}
 
export default Content;