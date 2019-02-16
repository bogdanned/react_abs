
import React from "react";
import { Timeline } from 'antd';


export default () => {

    return (
        <Timeline pending="Calculating ...">
            <Timeline.Item>Gathered basic data</Timeline.Item>
            <Timeline.Item>step2 2015-09-01</Timeline.Item>
            <Timeline.Item>step3 2015-09-01</Timeline.Item>
        </Timeline>
    )
}