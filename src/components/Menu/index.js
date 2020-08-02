import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/img/LogoV.png';
import './Menu.css';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink';

function Menu () {
    return (
        <nav className="Menu">
            <a  to="/">
                <img  className="Logo" src={Logo} alt="VeggieFlix logo"/>
            </a>

            <Button as={Link} className="ButtonLink" to="/cadastro/video"> 
        Novo video
            </Button>

        </nav>
    );
}

export default Menu;


