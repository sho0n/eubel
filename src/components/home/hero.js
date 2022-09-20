import React from 'react';
import { Button } from 'antd';

import { Carousel } from 'antd';

const items = [
  {
    key: '1',
    title: 'Piercing Daith',
    content: 'Usamos varias técnicas para tratar la ansiedad y las migrañas.',
    
  },
  {
    key: '2',
    title: 'Expertos en ciática',
    content: 'En Eubel usamos tecnicas ancestrales para aliviar los dolores de la ciática.',
  },
  {
    key: '3',
    title: 'Centro de bienestar',
    content: 'Tenemos mas de 30 años de experiencia y miles de personas nos avalan.',
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
                {/* <div className="btnHolder"> 
                  <Button type="primary" size="large">Learn More</Button>
                  <Button size="large"><i className="fas fa-desktop"></i> Watch a Demo</Button>
          </div> */}
              </div>
            </div>  
          );
        })}
      </Carousel>
    </div>
  );
}

export default AppHero;