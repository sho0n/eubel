import React from 'react';

import { Row, Col } from 'antd';

const items = [
  {
    key: '1',
    icon: <i className="fas fa-dove"></i>,
    title: 'No más dolor',
    content: 'Despídete para siempre del dolor, hormigueo o entumecimiento del muslo, la pantorrilla o el pie.',
  },
  {
    key: '2',
    icon: <i className="fas fa-percentage"></i>,
    title: '99%',
    content: 'Esta técnica tiene un alto porcentaje de éxito.',
  },
  {
    key: '3',
    icon: <i className="fas fa-check-circle"></i>,
    title: 'Definitivo',
    content: 'La mayoría de las personas no vuelven a sentir dolor debido a la ciática.',
  },
]

function AppAbout() {
  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Ciatica</h2>
          <p>Aliviamos la ciática quemando la oreja</p>
        </div>
        <div className="contentHolder">
          <p>La cauterización es una técnica que se utiliza en auriculoterapia, consiste en quemar los puntos de la oreja y está dentro de la moxibustion. De aquí viene esta técnica ancestral que realizamos en nuestro centro, consiste en cauterizar o quemar varios puntos de la oreja, solo le quedará  una pequeña costra a se caerá en 15 días quedando una pequeña quemadura inapreciable, pero que para usted será una gran alegría deshacerse de sus problemas del nervio ciático para siempre.</p>
        </div>
        <Row gutter={[16, 16]}>   
          {items.map(item => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default AppAbout;