import { useState } from 'react';

const useErrorModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const showError = (message) => {
        setErrorMessage(message);
        setIsOpen(true);
    };

    const hideError = () => {
        setIsOpen(false);
        setErrorMessage('');
    };

    return { isOpen, errorMessage, showError, hideError };
};

export default useErrorModal;