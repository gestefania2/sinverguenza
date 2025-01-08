import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCustomNavigate } from '../../hooks/useNavigate';
import Navbar from '../../components/navbar/Navbar';
import useErrorModal from '../../hooks/useErrorModal.js';
import ErrorModal from '../../components/modals/ErrorModal';
import { register } from '../../api/apiPlayer.js';
import './RegisterForm.css';

const RegisterForm = () => {
    const { navigateTo } = useCustomNavigate();
    const { isOpen, errorMessage, showError, hideError } = useErrorModal();
    const [formData, setFormData] = useState({
        player_name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validaciones básicas
        if (!formData.nombre?.trim()) {
            showError('El nombre es obligatorio');
            return;
        }

        if (!formData.email?.trim()) {
            showError('El email es obligatorio');
            return;
        }

        if (!formData.password) {
            showError('La contraseña es obligatoria');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            showError('Las contraseñas no coinciden');
            return;
        }

        try {
            const body = {
                player_name: formData.nombre.trim(),
                email: formData.email.trim(),
                password: formData.password,
                password_confirmation: formData.confirmPassword
            };
        
            console.log('Datos a enviar:', body);
        
            await register(body);
            navigateTo('/login');
        
        } catch (error) {
            // Verificar directamente el mensaje de error que establecimos en fetchData
            if (error.message === 'Usuario ya existente') {
                showError('Usuario ya existente');
            } else {
                showError('Error en el registro');
            }
        }
    };
    return (
        <>
            <Navbar showLogo={false} />
            <div className="register-container">
                <form className="register-form" onSubmit={handleSubmit}>
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
                        name="nombre"
                        placeholder="nombre"
                        className="input-field"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="email"
                        className="input-field"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="contraseña"
                        className="input-field"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="confirmación contraseña"
                        className="input-field"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit" className="submit-button">
                        CREAR CUENTA
                    </button>

                    <div className="footer-logo">
                        <Link to="/">
                            <img
                                className='login-logo'
                                src="/logo_negro_s.png"
                                alt="Sinvergüenza"
                            />
                        </Link>
                    </div>
                </form>
            </div>
            
            <ErrorModal
                isOpen={isOpen}
                message={errorMessage}
                onClose={hideError}
            />
        </>
    );
};

export default RegisterForm;