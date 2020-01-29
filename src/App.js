import './App.css';
import Questions from './quizQuestions';
import { quizzes } from './quizzes';

import React, { Component } from 'react'

export default class App extends Component {
  // Initializing State
      state = {
        quiz: quizzes[0]
      }
      

      showQuiz = () => {
        let questions = [];
        for (let eachQuest in this.state.quiz.questions){
          questions.push( this.state.quiz.questions[eachQuest])
        }
        return questions;
        }
      
  render() {
    // console.log(this.state.quiz.questions);
    
    return (
      <div>
        <h1>{this.state.quiz.title}</h1>
        <Questions  questions= {this.showQuiz()}/>
      </div>
    );
  }
}