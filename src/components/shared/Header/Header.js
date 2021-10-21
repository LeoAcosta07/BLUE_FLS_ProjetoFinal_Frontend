import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    
    <header>
            <div className='navbar-container'>
                <nav className='navbar'>
                    <h1>Minhas tarefas</h1>
                </nav>
                 <nav className='navbar-2'>
                     <Link className='navbar-menu' to="/">Home</Link>
                    <Link className='navbar-menu' to="/cadastro">Cadastrar</Link>
                </nav>
            </div>
    </header>
  )
}

export default Header;