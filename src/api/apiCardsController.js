
async function createCard(text, type, categoryName) {
  try {
    console.log('Enviando al backend:', { text, type, category_name: categoryName });
    const response = await fetch(`/player/card/new`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text,
        type,
        category_name: categoryName
      })
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Error response:', errorData);
      throw new Error(`Error HTTP: ${response.status}. ${errorData}`);
    }

    const data = await response.json();
    console.log('Respuesta del backend:', data);
    return data;
  } catch (error) {
    console.error('Error en createCard:', error);
    throw error;
  }
}

  async function updateCard(cardId, text, type, categoryId) {
    try {
      const response = await fetch(`/player/update/card/${cardId}`, {  // Ajusta la URL según tu API
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
           'Authorization': 'Bearer ' + tuToken  
        },
        body: JSON.stringify({
          text,
          type,
          category_id: categoryId
        })
      });
  
      if (!response.ok) {
        throw new Error('Error al actualizar la carta');
      }
  
      const data = await response.json();
      return data.card;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
  async function removeCard(cardId) {
    try {
      const response = await fetch(`/player/delete/card/${cardId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
           'Authorization': 'Bearer ' + tuToken  
        }
      });
  
      if (response.status === 404) {
        throw new Error('No se encontró la carta');
      }
  
      if (!response.ok) {
        throw new Error('Error al eliminar la carta');
      }
  
      const data = await response.json();
      return data.card;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  
  export {createCard, updateCard, removeCard};
