import React from 'react';

import { Collapse, Button } from 'antd';

const { Panel } = Collapse;

function AppFaq() {
  return(
    <div id="faq" className="block faqBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Preguntas frecuentes</h2>
        </div>
        <Collapse defaultActiveKey={['1']}>
          <Panel header="Duele quemar la oreja?" key="1">
            <p>Si,aunque es un dolor intenso el procedimiento dura unos segundos por lo que es tolerable por todas las personas.</p>
          </Panel>
          <Panel header="Que es el piercing Daith?" key="2">
            <p>El daith piercing es un pendiente que se coloca en el cartílago interior de la oreja. Aparte de su finalidad estética, este tipo de perforaciones se utiliza como un remedio eficaz contra la migraña</p>
            <p>La cicatrización del piercing daith dependerá básicamente del cuidado que se le dé. Son primordiales los primeros 30 días, aunque el piercing no estará totalmente cicatrizado hasta pasados 3-6 meses, dependiendo de la cicatrización de cada uno</p>
          </Panel>
          <Panel header="Como puedo pedir cita?" key="3">
            <p>Puedes pedir cita en el 680493699 </p>
          </Panel>
         
        </Collapse>
        <div className="quickSupport">
          <h3>Necesitas ayuda</h3>
          <p>Si tienes cualquier duda o simplemente quieres dejarnos tu feedback</p>
          <Button type="primary" size="large"><i className="fas fa-envelope"></i> Envianos tu pregunta</Button>
        </div>
      </div>
    </div>  
  );
}

export default AppFaq;