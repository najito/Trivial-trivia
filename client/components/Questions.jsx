import React from 'react';
import { useState } from 'react'

const Questions = (props) => {
    const [count, setCount] = useState(0);
    const tableRows = [];
    const questions = props.questions
    const displayQuestion = questions[count]
    const categories = ['Difficulty', 'Category', 'Question', 'Answer','ID'];
    const questionAccess = ['value', 'category.title', 'question', 'answer', 'id'];
    for (let i = 0; i < 5; i ++) {
        tableRows.push(<tr>
            <td>
            <strong>{categories[i]}</strong>
            </td>
            <td>{displayQuestion[questionAccess[i]]}</td>
        </tr>)
    }
    return (
        <React.Fragment>
            <table>
                <tbody>
                {tableRows}
                </tbody>
            </table>
            <input
            type ="text"
            placeholder="type answer here"
            onChange={(e) => props.setAnswer(e.target.value)}/>
            <input 
            type="button" 
            value="Submit Answer" 
            onClick={
                ()=>{
                    if (props.answer == displayQuestion.answer) {
                        props.correct()
                    }
                    setCount(Math.floor(Math.random()* 100))
                }}/>
        </React.Fragment>
      );
}
 
export default Questions;