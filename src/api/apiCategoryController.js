
async function createCategory(category_name, category_description) {
  try {
    console.log('Enviando al backend:', { category_name, category_description });
    const response = await fetch(`/player/category/new`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        category_name,
        category_description
      })
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Error response:', errorData);
      throw new Error(`Error HTTP: ${response.status}. ${errorData}`);
    }

    const data = await response.json();
    console.log('Respuesta del backend:', data);
    return data.category;
  } catch (error) {
    console.error('Error en createCategory:', error);
    throw error;
  }
}

export { createCategory };