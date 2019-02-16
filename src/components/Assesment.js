
import React from "react"

import { version, Button, Progress, Radio } from 'antd';
import RenderPain from "./RenderPain"
import Question from "./Question"
import RadioGroupFull from "../RadioGroup"

import { Spin } from 'antd'

import questionList from "./questionList"

import voice from "../util/voice"

export default class Assesment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            questionIndex: 0,
            answers: {},
            thinking: false
        }
        this.answerQuestion = this.answerQuestion.bind(this)
    }

    answerQuestion(e) {
        const self = this
        e.preventDefault()
        this.setState({
            thinking: true,
            answers: {
                ...this.state.answers,
                [e.target.name]: e.target.value

            },
        })

        setTimeout(function(){
            // console.log(questionList[this.state.questionIndex + 1].label, "to say")
            const text = questionList[self.state.questionIndex + 1].label
            window.responsiveVoice.speak('Nice to meet you Frank!')
            //voice(questionList[this.state.questionIndex + 1].label)
            self.setState({
                thinking: false,
                questionIndex: self.state.questionIndex + 1
            })
        }, 2000); 
    }




    render() {
        console.log(this.state, "state")

        const question = questionList[this.state.questionIndex]
        const { label, options, name } = question
        const progressValue = (this.state.questionIndex+1) / questionList.length  * 100
        // console.log(progressValue , "progressValue ")
        return (
            <div className="assesmentInner">
                <div className="renderPainContainer">
                    <RenderPain />
                </div>
                <div className="aiContainer">
                {this.state.thinking ? <Spin size="large" /> : null}
                    
                    <p>Welcome to busco abbs whatever.</p>

                    <Progress percent={progressValue} />
                    <Question label={label} options={options} name={name} onChange={this.answerQuestion} />

                </div>

            </div>
        )
    }

}