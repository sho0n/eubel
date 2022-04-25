import React from 'react';

import { BackTop } from 'antd';

function AppFooter() {
  return (
    <div className="container-fluid">
      <div className="footer">
      <div className="logo">
          <i className="fab fa-pagelines"></i>
          <a href="http://eubel.es">EUBEL</a>
        </div>
        <ul className="socials">
          <li>
            <p>C/ Embarcadero 3 Bajo</p>
            <p>Badajoz</p>
            <p>680493699</p>
          </li>
        </ul>
        <div className="copyright">Copyright &copy; 2022 Eubel</div>
        <BackTop>
          <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
        </BackTop>
      </div>
    </div>
  );
}

export default AppFooter;