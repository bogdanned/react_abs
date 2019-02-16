
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


    return options.map(opt => (
        <RadioButton  style={radioStyle} value={opt.value}>{opt.label}</RadioButton >
    ))
}

export default ({label, options, onChange}) => {
    return (
        <div>
            <h3>{label}</h3>
            <RadioGroup onChange={onChange} value={this.state.value}>
                <RadioButton  style={radioStyle} value={2}>Option B</RadioButton >
                <RadioButton  style={radioStyle} value={3}>Option C</RadioButton >
                <RadioButton  style={radioStyle} value={4}>Option D</RadioButton >
            </RadioGroup>
        </div>
    )
}