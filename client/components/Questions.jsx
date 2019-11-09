import React from 'react';
import { useState } from 'react'
import Table from 'react-bootstrap/table'

const Questions = (props) => {
    const [count, setCount] = useState(0);
    const tableRows = [];
    const questions = props.questions
    const displayQuestion = questions[count]
    const categories = ['Difficulty', 'Category', 'Question','ID'];
    const questionAccess = ['value', 'category.title', 'question', 'id'];
    for (let i = 0; i < 5; i ++) {
        tableRows.push(<tr>
            <td>
            <strong>{categories[i]}</strong>
            </td>
            <td>{displayQuestion[questionAccess[i]]}</td>
        </tr>)
    }
    return (
        <div id="questions">
            <p hidden="true">{displayQuestion.answer}</p>
            <Table>
                <tbody>
                {tableRows}
                </tbody>
            </Table>
            <div id="qButtons">
                <input
                type ="text"
                placeholder="type answer here"
                value={props.answer}
                onChange={(e) => props.setAnswer(e.target.value)}/>
                <input 
                type="button" 
                value="Submit Answer" 
                onClick={
                    (e)=>{
                        if (props.answer == displayQuestion.answer) {
                            props.correct()
                        }
                        setCount(Math.floor(Math.random()* 100))
                        props.setAnswer('')
                    }}/>
            </div>
        </div>
      );
}
 
export default Questions;