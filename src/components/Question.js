
import React from 'react'
import { Radio, Input, Button } from 'antd'

const RadioGroup = Radio.Group
const RadioButton = Radio.Button

const radioStyle = (thinking) => ({
    display: !thinking ? 'block' : 'none',
    height: '30px',
    lineHeight: '25px',
    borderLeft: 1,
    margin: '5px'
})

const groupStyle = {
    textAlig: 'left'
}

const renderOptions = (options, thinking) => {
    return options.map((opt, index) => (
        <RadioButton className="option" key={index} style={radioStyle(thinking)} value={opt.value}>{opt.label}</RadioButton >
    ))
}

export default class Question extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            name: ''
        }
        this.onClick = this.onClick.bind(this)
        this.onInputChange = this.onInputChange.bind(this)
    }

    onInputChange(e) {
        console.log(e, "e")
        e.preventDefault()
        this.setState({
            value: e.target.value,
            name: e.targe.name
        })
    }

    onClick(e) {
        const self = this
        e.preventDefault()
        self.props.submit({
            [self.state.name]: self.state.value
        })
    }

    render() {
        const { label, options, onChange, name, thinking, textType } = this.props
        const renderedOptions = renderOptions(options, thinking)
        return (
            <div>
                <h3>{label}</h3>
                {textType ?
                    <div>
                        <Input placeholder={name} name={name} onChange={this.onInputChange} />
                        <Button onClick={this.onClick}>Submit</Button>
                    </div>

                    :
                    <RadioGroup styles={groupStyle} onChange={onChange} value={this.state.value} name={name}>
                        {renderedOptions}
                    </RadioGroup>
                }
            </div>
        )
    }
}
