
import React from "react"

import { version, Button, Progress, Radio } from 'antd';
import RenderPain from "./RenderPain"
import Question from "./Question"
import RadioGroupFull from "../RadioGroup"

import questionList from "./questionList"

export default class Assesment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            questionIndex: 0,
            answers: {}
        }
        this.answerQuestion = this.answerQuestion.bind(this)
        this.goNext = this.goNext.bind(this)
    }

    answerQuestion(e) {
        const self = this
        e.preventDefault()
        this.setState({
            answers: {
                ...this.state.answers,
                [e.target.name]: e.target.value

            },
        })
        console.log(this.state)
        setTimeout(self.goNext(), 500); 
    }

    goNext(){
        this.setState({
            questionIndex: this.state.questionIndex + 1
        })
    }


    render() {
        const question = questionList[this.state.questionIndex]
        const { label, options, name } = question
        const progressValue = (this.state.questionIndex+1) / questionList.length  * 100
        console.log(progressValue , "progressValue ")
        return (
            <div className="assesmentInner">
                <div className="renderPainContainer">
                    <RenderPain />
                </div>
                <div className="aiContainer">
                    <p>Welcome to busco abbs whatever.</p>
                    <Progress percent={progressValue} />
                    <Question label={label} options={options} name={name} onChange={this.answerQuestion} />

                </div>

            </div>
        )
    }

}