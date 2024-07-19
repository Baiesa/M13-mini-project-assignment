import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </nav>
        </header>
    );
};

export default Header;