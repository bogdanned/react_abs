
import React from "react"

import { version, Button, Progress, Radio } from 'antd';
import RenderPain from "./RenderPain"
import Question from "./Question"
import RadioGroupFull from "../RadioGroup"

export default () => {

    return (
        <div>

            <div className="renderPainContainer">
                <RenderPain />
            </div>
            <div className="aiContainer">
                <p>Welcome to busco abbs whatever.</p>
                <Progress percent={30} />
                <Question label={"Is your pain persistent ?"} />
                <RadioGroupFull />
                {/* <Button type="primary">Next</Button> */}
                {/* <Timeline/> */}
            </div>

        </div>
    )
}