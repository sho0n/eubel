import React from 'react';

import { Form, Input, Button, Checkbox } from 'antd';
const { TextArea } = Input;

function AppContact() {
  return (
    <div id="contact" className="block contactBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Ponte en contacto</h2>
          <p>Para pedir cita y más rápida atención llamar por teléfono.</p>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="fullname"
            rules={[
              { 
                required: true,
                message: 'Por favor escriba su nombre!' 
              }]
            }
          >
            <Input placeholder="Nombre" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: 'email',
                message: 'lo siento, eso no es un E-mail valido!',
              },
              {
                required: true,
                message: 'Porfavor escriba su E-mail!',
              },
            ]}
          >
            <Input placeholder="Email"/>
          </Form.Item>
          <Form.Item
            name="telephone"
          >
            <Input placeholder="Telefono" />
          </Form.Item>
          <Form.Item
            name="subject"
          >
            <Input placeholder="Asunto" />
          </Form.Item>
          <Form.Item
            name="message"
          >
            <TextArea placeholder="Mensage" />
          </Form.Item>
          <Form.Item>
            <Form.Item 
              name="remember" 
              valuePropName="checked"
              noStyle
              rules={[
                { validator:(_, value) => value ? Promise.resolve() : Promise.reject('Debes aceptar los terminos') },
              ]}
            >
              <Checkbox>Acepto los terminos y condiciones.</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Hecho!
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>  
  );
}

export default AppContact;