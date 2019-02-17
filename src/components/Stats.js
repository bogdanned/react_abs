import React from "react"
import { Statistic, Card, Row, Col, Icon, Tag, Button, Popover } from 'antd'

const content = (
    <div>
      <p>Personalized Symptoms Report</p>
    </div>
  );

export default () => {


    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <div style={{
                background: '#ECECEC',
                padding: '30px'
            }}>
                <div>
                    <Tag color="#66ff66">Symptom 1</Tag>
                    <Tag color="#4dff4d">Symptom 2</Tag>
                    <Tag color="#33ff33">Symptom 3</Tag>
                    <Tag color="#00ff00">Symptom 4</Tag>
                    <Tag color="#00ff00">Symptom 5</Tag>
                    <Tag color="#00e600">Symptom 6</Tag>
                    <Tag color="#00cc00">Symptom 7</Tag>
                    <Tag color="#00b300">Symptom 8</Tag>
                    <Tag color="#009900">Symptom 9</Tag>
                    <Tag color="#008000">Symptom 10</Tag>
                    <Tag color="#006600">Symthom 11</Tag>
                </div>
                <Row gutter={16}>
                    <Col span={12}>
                        <Card>
                            <Statistic
                                title="Importance of visiting a doctor"
                                value={11.28}
                                precision={2}
                                valueStyle={{ color: '#3f8600' }}
                                prefix={<Icon type="percentage" />}
                                suffix="%"
                            />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card>
                            <Statistic
                                title="Pain intensity"
                                value={9.3}
                                precision={2}
                                valueStyle={{ color: '#cf1322' }}
                                prefix={<Icon type="perdentage" />}
                                suffix="%"
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
            <Popover content={content}>
                <a href="/report.pdf" target="_blank">
                    <Button type="primary" className="buttonRep">Download Report</Button>
                </a>
            </Popover>
        </div>
    )
}