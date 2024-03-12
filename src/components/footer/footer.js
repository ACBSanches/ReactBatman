import React from "react";
import './styles.css'
import { Link, useNavigate } from "react-router-dom";
import Logo from '../../assets/logo3.webp'

function Footer(){

    return(
        <footer>
            <Link style={{textDecoration:'none'}} to='/'>
                <img  id="logo" src={Logo}></img>
            </Link>
            <span>Todos os direitos reservados ©</span>
            <span>Desenvolvido por Clau Sanches</span>
            <nav className="footer-navigation">
                <ul className="footer-list">
                    <Link style={{textDecoration:'none'}} to='/'>
                        <li>Home</li>
                    </Link>
                    <Link style={{textDecoration:'none'}} to='/contato'>
                        <li>Contato</li>
                    </Link>
                    <Link style={{textDecoration:'none'}} to='/fotos'>
                        <li>Fotos</li>
                    </Link>
                    <Link style={{textDecoration:'none'}} to='/comentarios'>
                        <li>Comentários</li>
                    </Link>
                </ul>
            </nav>
        </footer>
    )
        
    
}

export default Footer;