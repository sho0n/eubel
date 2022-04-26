import React from 'react';

import image2 from '../../assets/images/estetica.jpg';
import image3 from '../../assets/images/fisioterapia.jpg';
import image4 from '../../assets/images/nutricion.jpg';
import image5 from '../../assets/images/osteopatia.jpg';
import image1 from '../../assets/images/ciatica.jpg';
import image6 from '../../assets/images/daith.png';

import { Row, Col } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

function AppFeature() {
  return (
    <div id="feature" className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Tratamientos</h2>
        </div>
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Modern Design" src={image1} />}
            >
              <Meta title="Ciática" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Daith" src={image6} />}
            >
              <Meta title="Daith" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Masajes" src={image3} />}
            >
              <Meta title="Masajes" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Test" src={image4} />}
            >
              <Meta title="Nutrición" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Test" src={image5} />}
            >
              <Meta title="Osteopatia" />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AppFeature;