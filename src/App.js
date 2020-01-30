import './App.css';
import { quizzes } from './quizzes';
import { getMessage} from './messages';
import React, { Component } from 'react'
import MultipleChoiceQuiz from './MultipleChoiceQuiz'

export default class App extends Component {
  
  render() {
    return (
      <div>
        <MultipleChoiceQuiz quizzes={quizzes} messages = {getMessage} />
      </div>
    );
  }
}