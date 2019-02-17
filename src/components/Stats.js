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
                    <Tag color="magenta">magenta</Tag>
                    <Tag color="red">red</Tag>
                    <Tag color="volcano">volcano</Tag>
                    <Tag color="orange">orange</Tag>
                    <Tag color="gold">gold</Tag>
                    <Tag color="lime">lime</Tag>
                    <Tag color="green">green</Tag>
                    <Tag color="cyan">cyan</Tag>
                    <Tag color="blue">blue</Tag>
                    <Tag color="geekblue">geekblue</Tag>
                    <Tag color="purple">purple</Tag>
                </div>
                <Row gutter={16}>
                    <Col span={12}>
                        <Card>
                            <Statistic
                                title="Active"
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
                                title="Idle"
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
                <Button type="primary" className="buttonRep">Download Report</Button>
            </Popover>
        </div>
    )
}