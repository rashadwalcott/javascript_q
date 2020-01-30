import React, { Component } from 'react'

export default class Answers extends Component {
    //Function that is mapping and displaying the answers
    showAnswers = () => {
        return (
            <div>
                <ol type= "A">
                    {this.props.answers.map((answer, index) => (
                        <li key = {index}>
                        <span>{answer}</span>
                        </li>
                    ))}
                </ol>
            </div>
        )
    }

    
    render() {
        return (
            <div>
                {this.showAnswers()}
            </div>
        )
    }
}
