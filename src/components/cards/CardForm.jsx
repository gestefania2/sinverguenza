import React, { useState } from 'react';

function CardForm() {
  const [text, setText] = useState('');
  const [type, setType] = useState('');
  const [categoryName, setCategoryName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await createCard(text, type, categoryName);
      console.log('Carta y categoría creadas:', result);
      // Limpiar el formulario
      setText('');
      setType('');
      setCategoryName('');
    } catch (error) {
      console.error('Error al crear:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Texto de la carta"
      />
      <input
        value={type}
        onChange={(e) => setType(e.target.value)}
        placeholder="Pregunta o Respuesta"
      />
      <input
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
        placeholder="Nombre de la nueva categoría"
      />
      <button type="submit">CREAR CARTA</button>
    </form>
  );
}

export default CardForm;