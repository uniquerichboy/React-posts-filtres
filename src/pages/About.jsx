import React from 'react';
import { Card, Col, Row } from 'antd';

const About = () => {
    return (
        <div className="site-card-wrapper" style={{margin: 10}}>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Instagram" bordered={false}>
                https://www.instagram.com/
            </Card>
          </Col>
          <Col span={8}>
            <Card title="GitHub" bordered={false}>
                https://github.com/uniquerichboy
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Telegram" bordered={false}>
                https://t.me/uniquerichboy
            </Card>
          </Col>
        </Row>
      </div>
    );
};

export default About;