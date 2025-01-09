import React, { useState } from 'react';
import './CreateModal.css';

const CreateModal = ({ type, onClose }) => {
  const [formData, setFormData] = useState(
    type === 'category' 
      ? { category_name: '', category_description: '' }
      : { text: '', type: 'question' }
  );

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{type === 'category' ? 'Nueva Categoría' : 'Nueva Carta'}</h2>
        <form>
          {/* Formulario según type */}
        </form>
      </div>
    </div>
  );
};

export default CreateModal;