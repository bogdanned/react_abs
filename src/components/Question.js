
import React from "react"
import { Radio, Input } from 'antd';

const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;

const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
};

const renderOptions = (options) => {
    return options.map((opt,index) => (
        <RadioButton key={index} style={radioStyle} value={opt.value}>{opt.label}</RadioButton >
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
        const {label, options, onChange, name} = this.props
        const renderedOptions = renderOptions(options)
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