import React, { useState } from 'react';
import Button from '../../components/buttons/GenericButton';
import { useNavigate } from 'react-router-dom';
import { login } from './../../api/apiPlayer';
import useErrorModal from './../../hooks/useErrorModal.js';
import ErrorModal from '../../components/modals/ErrorModal';
import Navbar from '../../components/navbar/Navbar';
import { Link } from 'react-router-dom';
import './Login.css';


const Login = () => {
    const navigate = useNavigate();
    const { isOpen, errorMessage, showError, hideError } = useErrorModal();
    const [formData, setFormData] = useState({
        player_name: '',
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const token = await login({
                email: formData.email,
                password: formData.password
            });

            if (token) {
                navigate('/miperfil');
            } else {
                showError('Usuario o contraseña incorrectos');
            }
        } catch (error) {
            showError('Error al iniciar sesión');
        }
    };

    const handleRegistro = (e) => {
        e.preventDefault();
        navigate('/registro');
    };

    return (

        <>
            <Navbar showLogo={false} />

            <div className="login-container">
                <div className="login-box">
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
                        <span style={{ color: '#000000' }}>p</span>
                        <span style={{ color: '#5e17eb' }}>r</span>
                        <span style={{ color: '#000000' }}>o</span>
                        <span style={{ color: '#21a41d' }}>p</span>
                        <span style={{ color: '#000000' }}>i</span>
                        <span style={{ color: '#FBBF24' }}>o</span>
                        {' '}
                        <span style={{ color: '#000000' }}>j</span>
                        <span style={{ color: '#e6007e' }}>u</span>
                        <span style={{ color: '#000000' }}>e</span>
                        <span style={{ color: '#21a41d' }}>g</span>
                        <span style={{ color: '#000000' }}>o</span>
                    </h1>

                    <div className="form-container">
                        <div className="input-container">
                            <input
                                type="text"
                                name="email"
                                placeholder="usuario"
                                className="input-field"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="input-container">
                            <input
                                type="password"
                                name="password"
                                placeholder="contraseña"
                                className="input-field"
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                        </div>

                        <Button
                            className="button-login"
                            id="login-button"
                            onClick={handleLogin}
                        >
                            LOGIN
                        </Button>

                        <Button
                            className="button-register"
                            id="registro-button"
                            onClick={handleRegistro}
                        >
                            REGISTRO
                        </Button>
                    </div>

                    <div className="footer-logo">
                        <Link to="/" >
                            <img
                                className='login-logo'
                                src="/logo_negro_s.png"
                                alt="Sinvergüenza"
                            />
                        </Link>
                    </div>
                </div>
                <ErrorModal
                    isOpen={isOpen}
                    message={errorMessage}
                    onClose={hideError}
                />
            </div>
        </>
    );
};

export default Login;