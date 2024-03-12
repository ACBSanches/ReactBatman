import React from "react";
import './styles.css'
import { Link, useNavigate } from "react-router-dom";
import Logo from '../../assets/logo3.webp'

function Header(){

    return(
        <header>
            <Link style={{textDecoration:'none'}} to='/'>
                <img id='logo' src={Logo}></img>
            </Link>
            <nav>
                <ul>
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
        </header>
    )
}

export default Header;