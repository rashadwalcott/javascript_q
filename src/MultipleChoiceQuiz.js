import React, { Component } from 'react';

export default class MultipleChoiceQuiz extends Component {
    // Initializing State
    state ={
        quiz: 0,
        question: 0,
        incomplete: true
    }

     //Function that handles all the answers
     handleAnswers = () => {
        let presentQuestion = this.props.quizzes[this.state.quiz].questions[this.state.question];
        let correctAnswer = presentQuestion.correctAnswer;
        let incorrectAnswers = presentQuestion.incorrectAnswers;
        let allAnswers = incorrectAnswers.concat(correctAnswer);
        let shuffle = require('shuffle-array');
        return shuffle(allAnswers);
    }
    //Function that is mapping and displaying the answers
    showAnswers = () => {
        return (
            <div>
                <ol type= "A">
                    {this.handleAnswers().map((answer, index) => (
                        <li key = {index}>
                        <span>{answer}</span>
                        </li>
                    ))}
                </ol>
            </div>
        )
    }

    //Function that handles the next question
        handleNext = () => {
            if (this.state.question < this.props.quizzes[this.state.quiz].questions.length - 1){
                this.setState({question: this.state.question + 1})
            }
            else {
                this.setState({incomplete: false})
            }
        }
       
    render() {
        // console.log(this.handleAnswers());
        
        // console.log(this.props.quizzes[this.state.quiz].questions[this.state.quiz]);
        
        let title = this.props.quizzes[this.state.quiz].title;
        let question = this.props.quizzes[this.state.quiz].questions[this.state.question].text;
        return (
            <div>
                {this.state.incomplete ? 
                <>
                <h1>{title}</h1>
                <h2>{question}</h2>
                <div>{this.showAnswers()}</div>
                <button onClick = {this.handleNext}>
                    Next
                </button>
                </>
                :
                <>
                <h1>Message</h1>
                </>
                }
                

            </div>
        )
    }
}
