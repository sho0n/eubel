import React from 'react';

import { Button, Modal } from 'antd';

class AppWorks extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div id="works" className="block worksBlock">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>PIDE CITA</h2>
            <p>680493699</p>
          </div>
          <div className="contentHolder">
            <Button size="large"><i className="fas fa-phone"></i></Button>
          </div>
        </div>
      </div>
    );
  }
}

export default AppWorks;