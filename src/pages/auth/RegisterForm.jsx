import React from 'react';
import './RegisterForm.css';

const RegisterForm = () => {
    return (
        <div className="register-container">
            <form className="register-form">
                <h1 className="title">
                    <span style={{ color: '#000000' }}>c</span>
                    <span style={{ color: '#FFD700' }}>r</span>
                    <span style={{ color: '#000000' }}>e</span>
                    <span style={{ color: '#008000' }}>a</span>
                    <span style={{ color: '#000000' }}>r</span>
                    {' '}
                    <span style={{ color: '#000000' }}>m</span>
                    <span style={{ color: '#FF69B4' }}>i</span>
                    <br />
                    <span style={{ color: '#000000' }}>c</span>
                    <span style={{ color: '#4B0082' }}>u</span>
                    <span style={{ color: '#000000' }}>e</span>
                    <span style={{ color: '#FF1493' }}>n</span>
                    <span style={{ color: '#000000' }}>t</span>
                    <span style={{ color: '#008000' }}>a</span>
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

                <div className="footer">
                    sinverguenza
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;