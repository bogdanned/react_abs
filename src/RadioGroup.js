import React from "react"
import { Radio, Input } from 'antd';

const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;


export default class RadioGroupFull extends React.Component {
  state = {
    value: 1,
  }

  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    return (
      <RadioGroup onChange={this.onChange} value={this.state.value}>
        <RadioButton  style={radioStyle} value={1}>Option A</RadioButton >
        <RadioButton  style={radioStyle} value={2}>Option B</RadioButton >
        <RadioButton  style={radioStyle} value={3}>Option C</RadioButton >
        <RadioButton  style={radioStyle} value={4}>Option D</RadioButton >
      </RadioGroup>
    );
  }
}