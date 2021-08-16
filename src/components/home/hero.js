import React from 'react';
import { Button } from 'antd';

import { Carousel } from 'antd';

const items = [
  {
    key: '1',
    title: 'Centro de bienestar',
    content: 'Tenemos mas de 30 anos de experiencia y miles de personas nos avalan.',
  },
  {
    key: '2',
    title: 'Expertos en ciatica',
    content: 'En Eubel usamos tecnicas ancestrales para aliviar los dolores de la ciatica.',
  },
  {
    key: '3',
    title: 'Shein y Daigh',
    content: 'Usamos varias tecnicas para tratar la ansiedad y las migra;as.',
  },
]

function AppHero() {
  return (
    <div id="hero" className="heroBlock">
      <Carousel>
        {items.map(item => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div className="btnHolder">
                  <Button type="primary" size="large">Learn More</Button>
                  <Button size="large"><i className="fas fa-desktop"></i> Watch a Demo</Button>
                </div>
              </div>
            </div>  
          );
        })}
      </Carousel>
    </div>
  );
}

export default AppHero;