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
                    <Tag style={{margin: "5px"}} color="#00e600">Low abdominal pain</Tag>
                    <Tag color="#00cc00">Pain up to one week</Tag>
                    <Tag style={{margin: "5px"}} color="#00b300">Dull ache</Tag>
                    <Tag color="#009900">Moderate pain intensity</Tag>
                    <Tag style={{margin: "5px"}}color="#008000">Bloating</Tag>
                    
                </div>
                <Row gutter={16}>
                    <Col span={12}>
                        <Card>
                            <Statistic
                                title="Importance of visiting a Doctor"
                                value={7}
                                
                                valueStyle={{ color: '#3f8600' }}
                                prefix={<Icon type="fraction" />}
                                suffix="/10"
                            />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card>
                            <Statistic
                                title="Pain Intensity"
                                value={5}
                                
                                valueStyle={{ color: '#cf1322' }}
                                prefix={<Icon type="fractioin" />}
                                suffix="/10"
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
                <a href="/report.pdf" target="_blank">
                    <Button type="primary" className="buttonRep">Download Symptom Report</Button>
                </a>
        </div>
    )
}