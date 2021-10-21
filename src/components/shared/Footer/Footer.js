import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
<footer className="footer">
    <div className="container-footer">

        <div className="footer-row">

            <div className="footer-col">
                <h4>Desenvolvedor</h4>
                <ul>
                    <li><Link to="#">Leonardo Acosta</Link></li>
                </ul>
            </div>

            <div className="footer-col">
                <h4>Redes</h4>
                <div className="redes">
                    <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                    <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
                    <Link to="#"><i className="fab fa-youtube"></i></Link>
                </div>
            </div>

        </div>
    </div>
</footer>

  )
}

export default Footer