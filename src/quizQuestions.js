import React, { Component } from 'react'

export default class Questions extends Component {
    render() {
        const showQuestions = this.props.questions.map(quest => {
            return <h3>{quest.text}</h3>
        })
       
        // console.log(this.props.questions);
        
        return (
            <div>
             {showQuestions}
            </div>
        )
    }
}
