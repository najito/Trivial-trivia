import React, { Component } from 'react';
import Questions from './Questions'

class Content extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <div id="content">
                <div id="User-info">
                    <h3 className="userInfo">Welcome { this.props.username }</h3>
                    <h3 className="userInfo">Score: { this.props.score }</h3>
                </div>
                <div id="question">
                <Questions 
                    questions={ this.props.questions }
                    answer={ this.props.answer }
                    correct={ this.props.correct }
                    setAnswer={ this.props.setAnswer }/>
                </div>
            </div>
        )
    }
}
 
export default Content;