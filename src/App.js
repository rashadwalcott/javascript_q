import './App.css';
import Questions from './quizQuestions';
import { quizzes } from './quizzes';
import { getMessage} from './messages';
import React, { Component } from 'react'
import MultipleChoiceQuiz from './MultipleChoiceQuiz'

export default class App extends Component {
  // Initializing State
      // state = {
      //   quiz: quizzes[0]
      // }
      

      // questionList = () => {

      //   let questions = [];
      //   for (let eachQuest in this.state.quiz.questions){
      //     questions.push( this.state.quiz.questions[eachQuest])
      //   }
      //   return questions;
      //   }
      
  render() {
    // const questionsList = this.state.quiz.questions.map(quest => {
    //   return <Questions questions = {quest} 
    //     key = {quest.text}/>
    // })
    // console.log(this.state.quiz.questions);
    
    return (
      <div>
        <MultipleChoiceQuiz quizzes={quizzes} messages = {getMessage} />
        {/* <h1>{this.state.quiz.title}</h1> */}
        {/* <Questions questions = {this.questionList()} /> */}
      </div>
    );
  }
}