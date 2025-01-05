import React from 'react';
import './ErrorModal.css';

const ErrorModal = ({ isOpen, message, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Ups! Algo salió mal</h2>
                    <button className="close-button" onClick={onClose}>×</button>
                </div>
                <div className="modal-body">
                    <p>{message}</p>
                </div>
                <button className="modal-button" onClick={onClose}>Aceptar</button>
            </div>
        </div>
    );
};

export default ErrorModal;