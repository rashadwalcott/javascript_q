import React, { Component } from 'react'

export default class MultipleChoiceQuiz extends Component {
    // Initializing State
    state ={
        quiz: 0,
        question: 0,
        incomplete: true
    }
        handleNext = () => {
            if (this.state.question < this.props.quizzes[this.state.quiz].questions.length - 1){
                this.setState({question: this.state.question + 1})
            }
            else {
                this.setState({incomplete: false})
            }
        }

        handleAnswers = () => {
            let presentQuestion = this.props.quizzes[this.state.quiz].questions[this.state.question];
            let correctAnswer = presentQuestion.correctAnswer;
            let incorrectAnswers = presentQuestion.incorrectAnswers;
            let allAnswers = correctAnswer.concat(incorrectAnswers);
            
        }
    render() {
        console.log(this.props.quizzes[this.state.quiz].questions[this.state.quiz]);
        let title = this.props.quizzes[this.state.quiz].title;
        let question = this.props.quizzes[this.state.quiz].questions
        return (
            <div>
                <h1>{title}</h1>
                    
                
            </div>
        )
    }
}
