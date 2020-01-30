import React, { Component } from 'react';
import Answers from './components/answers';

export default class MultipleChoiceQuiz extends Component {
    // Initializing State
    state ={
        quiz: 0,
        question: 0,
        incomplete: true,
        clicked: false,
        correct: 0,
        incorrect: 0
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

    //Function that handles the next question
        handleNext = () => {
            if (this.state.question < this.props.quizzes[this.state.quiz].questions.length - 1){
                this.setState({question: this.state.question + 1})
            }
            else {
                this.setState({incomplete: false,
                    clicked: false
                })
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
                <Answers answers = {this.handleAnswers()} 
                    handleNext = {this.handleNext}
                    correctAnswer = {this.props.quizzes[this.state.quiz].questions[this.state.question].correctAnswer}
                />
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
