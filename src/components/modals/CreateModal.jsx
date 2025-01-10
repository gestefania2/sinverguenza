import React, { useState } from 'react';
import { createCard } from '../../api/apiCardsController.js';
import { createCategory } from '../../api/apiCategoryController.js';
import './CreateModal.css';

const CreateModal = ({ type, onClose, onSuccess }) => {
  const [formData, setFormData] = useState(
    type === 'category' 
      ? { category_name: '', category_description: '' }
      : { text: '', type: 'question', category_name: '' }
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (type === 'card') {
        console.log('Intentando crear carta con datos:', formData);
        const result = await createCard(
          formData.text,
          formData.type,
          formData.category_name
        );
        console.log('Respuesta de crear carta:', result);
        await onSuccess();
        onClose();
      } else if (type === 'category') {
        console.log('Intentando crear categoría con datos:', formData);
        const result = await createCategory(
          formData.category_name,
          formData.category_description
        );
        console.log('Respuesta de crear categoría:', result);
        await onSuccess();
        onClose();
      }
    } catch (error) {
      console.error('Error completo:', error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{type === 'category' ? 'Nueva Categoría' : 'Nueva Carta'}</h2>
        <button className="close-button" onClick={onClose}>×</button>
     
        <form onSubmit={handleSubmit}>
          {type === 'card' ? (
            <>
              <div className="form-group">
                <label>Texto de la carta:</label>
                <input
                  type="text"
                  name="text"
                  value={formData.text}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Tipo:</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  required
                >
                  <option value="question">Pregunta</option>
                  <option value="answer">Respuesta</option>
                </select>
              </div>

              <div className="form-group">
                <label>Nombre de la categoría:</label>
                <input
                  type="text"
                  name="category_name"
                  value={formData.category_name}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </>
          ) : (
            <>
              <div className="form-group">
                <label>Nombre de la categoría:</label>
                <input
                  type="text"
                  name="category_name"
                  value={formData.category_name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Descripción:</label>
                <input
                  type="text"
                  name="category_description"
                  value={formData.category_description}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </>
          )}

          <button type="submit" className="submit-button">
            {type === 'category' ? 'Crear Categoría' : 'Crear Carta'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateModal;