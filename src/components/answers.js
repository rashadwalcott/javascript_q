import React, { Component } from 'react'

export default class Answers extends Component {
    state = {
        clicked: false,
        correct: 0,
        incorrect: 0,
        id: ''
    }
    //Function that is mapping and displaying the answers
    showAnswers = () => {
        return (
            <div>
                <ol type= "A">
                    {this.props.answers.map((answer, index) => (
                        <li key = {index}
                        onClick= {event => this.checkAnswer(event,index)}>
                        {answer}
                        </li>
                    ))}
                </ol>
            </div>
        )
    }

    //Function that is checking for the correct answer
    checkAnswer = (event, index) =>{
        console.log(event.target.innerText);
        
        
    }

    render() {
        return (
            <div>
                {this.showAnswers()}
            </div>
        )
    }
}
