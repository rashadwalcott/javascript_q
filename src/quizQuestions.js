import React, { Component } from 'react'

export default class Questions extends Component {
    state = {
        question: []
    }
    render() {

        const showQuestions = this.props.questions.map(quest => {
        })
       
        console.log(this.props.questions);
        
        return (
            <div>
             {/* {showQuestions} */}
            </div>
        )
    }
}
