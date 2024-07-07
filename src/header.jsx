import React from 'react';
import './App.css';
import Afeez from './assets/afeez-code-w.png';
import { Link } from 'react-router-dom';

function Header() {

    return (
        <header className='navbar-header'>
            <img src={Afeez} alt="logo-white" />
            <div className='navbar-c'>
                <Link to="/CreateRepo"><button>Create Repo</button></Link>
                <Link to="/Page404"><button>404</button></Link>
            </div>
        </header>
    );
}

export default Header;