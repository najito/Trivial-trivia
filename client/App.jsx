import React, { Component } from 'react'
import MainContainer from './containers/MainContainer.jsx';
import './assets/Authentication.scss'

class App extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            username : 'John',
            password: 'abcd',
            password2: 'abcd',
            answer: '',
            questions: [],
            score: 0,
            loggedIn: false,
            signedUp: false,
        }
        this.logInOut = this.logInOut.bind(this);
        this.signUp = this.signUp.bind(this);
        this.correct = this.correct.bind(this);
        this.setUsername = this.setUsername.bind(this);
        this.setPassword1 = this.setPassword1.bind(this);
        this.setPassword2 = this.setPassword2.bind(this);
        this.setAnswer = this.setAnswer.bind(this);
        this.setScore = this.setScore.bind(this);
    }
  
    setScore(input) {
        this.setState((state) => {
           return  {
            ...state,
            score: input,
        }
        })
    }

    setAnswer(input) {
        this.setState((state) => {
            return {
                ...state,
                answer: input,
            }
        })
    }

    setPassword2(input) {
        this.setState((state) => {
            return {
                ...state,
                password2: input,
            };
        })
    }

    setPassword1(input) {
        this.setState((state) => {
            return {
                ...state,
                password: input,
            }
        })
    }

    setUsername(input) {
        // console.log('this function is firing')
        this.setState((state) => {
            return {
                ...state,
                username: input,
            }
        })
    }

    logInOut() {
        this.setState((state) => {
            return {...state,
                loggedIn: !state.loggedIn
            }
        })
    }

    signUp() {
        this.setState((state) => {
            return {
                ...state,
                signedUp: !state.signedUp
            }
        })
    }

    correct() {
        this.setState((state) => {
            return {...state,
            score : state.score + 1

        }  
        })
    }

    componentDidMount() {
        fetch('/api')          
        .then((data)=> (data.json()))
        .then((parsed) => this.setState((state) => {
            return {
                ...state,
                questions: [...parsed]
            }
        }))
    }

    render() {
        return (
            <React.Fragment>
                <MainContainer
                    //data
                    username={ this.state.username } 
                    password={ this.state.password }
                    password2={ this.state.password2 }
                    questions={ this.state.questions } 
                    answer={ this.state.answer }
                    score={ this.state.score } 
                    loggedIn={ this.state.loggedIn }
                    signedUp={ this.state.signedUp }
                    //methods
                    signUp={ this.signUp }
                    logInOut={ this.logInOut }
                    correct={ this.correct }
                    setUsername={ this.setUsername }
                    setPassword1={ this.setPassword1 }
                    setPassword2={ this.setPassword2 }
                    setAnswer={ this.setAnswer }
                    setScore={ this.setScore }/>
            </React.Fragment>
        )
    }
}

export default App