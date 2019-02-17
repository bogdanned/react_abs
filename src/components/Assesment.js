
import React from 'react'

import { version, Button, Progress, Radio, Tag } from 'antd'
import RenderPain from './RenderPain'
import Question from './Question'
import RadioGroupFull from '../RadioGroup'

import { Spin } from 'antd'

import questionList from './questionList'
import Stats from "./Stats"

import voice from '../util/voice'

export default class Assesment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            questionIndex: 0,
            answers: {},
            displayReport: false,
            thinking: false
        }
        this.answerQuestion = this.answerQuestion.bind(this)
        this.submit = this.submit.bind(this)
    }

    submit(data) {
        console.log(data, "data")
        const self = this
        this.setState({
            thinking: true,
            answers: {
                ...this.state.answers,
                ...data

            }
        })
        console.log(this.state)
    }

    answerQuestion(e) {
        e.preventDefault()
        const self = this
        this.setState({
            thinking: true,
            answers: {
                ...this.state.answers,
                [e.target.name]: e.target.value
            }
        })
        console.log(self.state.questionIndex)
        console.log(questionList.length, "question list length")
        if (self.state.questionIndex < questionList.length - 1) {
            setTimeout(function () {
                // console.log(questionList[this.state.questionIndex + 1].label, "to say")
                const text = questionList[self.state.questionIndex].machine_answer
                text && window.responsiveVoice.speak(text)
                self.setState({
                    thinking: false,
                    questionIndex: self.state.questionIndex + 1
                })
                text && window.responsiveVoice.speak(questionList[self.state.questionIndex].label)
            }, 2000)
        } else {
            this.setState({
                displayReport: true
            })
        }


    }



    render() {
        const { thinking } = this.state
        const question = questionList[this.state.questionIndex]
        const { label, options, name, textType, image } = question
        console.log(image, "image")
        const progressValue = (this.state.questionIndex + 1) / questionList.length * 100
        // console.log(progressValue , "progressValue ")
        return (
            <div className="assesmentInner">
                <div className="renderPainContainer">
                    <RenderPain image={image}/>
                </div>
                <div className="aiContainer">

                    <p>AVA</p>
                    {/* <iframe src="/animation/index.html"></iframe> */}

                    {!this.state.displayReport ?
                        <div>
                            <Progress percent={progressValue} strokeWidth={15} />

                            <Question
                                label={label}
                                options={options}
                                thinking={thinking}
                                name={name}
                                textType={textType}
                                thinking={thinking}
                                submit={this.submit}
                                onChange={this.answerQuestion}
                            />

                            {this.state.thinking
                                ? <div className="spinnerContainer">
                                    <Spin size="large" />
                                </div>
                                : null}
                        </div>
                        :
                        <div>
                            <Stats/>
                        </div>
                    }

                </div>

            </div>
        )
    }
}
