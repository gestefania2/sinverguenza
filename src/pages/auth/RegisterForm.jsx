import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Link } from 'react-router-dom';
import './RegisterForm.css';

const RegisterForm = () => {
    return (
        <>
            <Navbar showLogo={false} />
        <div className="register-container">
            <form className="register-form">
                <h1 className="title">
                    <span style={{ color: '#000000' }}>c</span>
                    <span style={{ color: '#FBBF24' }}>r</span>
                    <span style={{ color: '#000000' }}>e</span>
                    <span style={{ color: '#e6007e' }}>a</span>
                    <span style={{ color: '#000000' }}>r</span>
                    {' '}
                    <span style={{ color: '#000000' }}>m</span>
                    <span style={{ color: '#5e17eb' }}>i</span>
                    <br />
                    <span style={{ color: '#000000' }}>c</span>
                    <span style={{ color: '#5e17eb' }}>u</span>
                    <span style={{ color: '#000000' }}>e</span>
                    <span style={{ color: '#21a41d' }}>n</span>
                    <span style={{ color: '#000000' }}>t</span>
                    <span style={{ color: '#FBBF24' }}>a</span>
                </h1>

                <input
                    type="text"
                    placeholder="nombre"
                    className="input-field"
                />
                <input
                    type="email"
                    placeholder="email"
                    className="input-field"
                />
                <input
                    type="password"
                    placeholder="contraseña"
                    className="input-field"
                />
                <input
                    type="password"
                    placeholder="confirmación contraseña"
                    className="input-field"
                />

                <button type="submit" className="submit-button">
                    CREAR CUENTA
                </button>

                <div className="footer-logo">
                    <Link to="/" >
                        <img
                            className='login-logo'
                            src="/logo_negro_s.png"
                            alt="Sinvergüenza"
                        />
                    </Link>
                </div>
            </form>
        </div>
        </>
    );
};

export default RegisterForm;