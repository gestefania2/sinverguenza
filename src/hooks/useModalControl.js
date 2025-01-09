import { useState } from 'react';

export const useModalControl = () => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: null
  });

  const openModal = (type) => setModalState({ isOpen: true, type });
  const closeModal = () => setModalState({ isOpen: false, type: null });

  return { modalState, openModal, closeModal };
};