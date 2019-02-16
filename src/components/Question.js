
import React from "react"
import { Radio, Input } from 'antd';

const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;

const radioStyle = (thinking) => ({
    display: !thinking ? 'block' : 'none',
    height: '30px',
    lineHeight: '25px',
    borderLeft: 1,
    margin: '5px'
})

const renderOptions = (options, thinking) => {
    return options.map((opt,index) => (
        <RadioButton className="option" key={index} style={radioStyle(thinking)} value={opt.value}>{opt.label}</RadioButton >
    ))
}

export default class Question extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value: ""
        }
    }

    render(){
        const {label, options, onChange, name, thinking} = this.props
        const renderedOptions = renderOptions(options, thinking)
        return (
            <div>
                <h3>{label}</h3>
                <RadioGroup onChange={onChange} value={this.state.value} name={name}>
                    {renderedOptions}
                </RadioGroup>
            </div>
        )
    }

}