import React from 'react';
import Button from '../../components/buttons/GenericButton';
import { Navigate, useNavigate } from 'react-router-dom';
import './Login.css';


const Login = () => {
    const navigate =useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Login clicked");
        // Aquí iría tu lógica de login
    };

    const handleRegistro = (e) => {
        e.preventDefault();
        console.log("Registro clicked");
        navigate ('/registro');
  
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h1 className="title">
                    <span style={{ color: '#000000' }}>c</span>
                    <span style={{ color: '#dbb736' }}>r</span>
                    <span style={{ color: '#000000' }}>e</span>
                    <span style={{ color: '#dc429e' }}>a</span>
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
                    <span style={{ color: '#dbb736' }}>o</span>
                    {' '}
                    <span style={{ color: '#000000' }}>j</span>
                    <span style={{ color: '#dc429e' }}>u</span>
                    <span style={{ color: '#000000' }}>e</span>
                    <span style={{ color: '#21a41d' }}>g</span>
                    <span style={{ color: '#000000' }}>o</span>
                </h1>

                <div className="form-container">
                    <div className="input-container">
                        <input
                            type="text"
                            placeholder="usuario"
                            className="input-field"
                        />
                    </div>

                    <div className="input-container">
                        <input
                            type="password"
                            placeholder="contraseña"
                            className="input-field"
                        />
                    </div>


                    <Button className="button-login"
                        id="login-button"
                        onClick={handleLogin}
                    >
                        LOGIN
                    </Button >

                    <Button className="button-register"
                        id="registro-button"
                        onClick={handleRegistro}
                    >
                        REGISTRO
                    </Button>

                </div>

                <div className="footer">
                    sinvergüenza
                </div>
            </div>
        </div>
    );
};

export default Login;