import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';
import fetchData from '../../api/apiCategories.js';
import { categoryColors } from '../../constants/categoryColors.js';
import './CategorySelection.css';

const CategorySelection = ({ playerId = null }) => {
  const [categories, setCategories] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useLocalStorage('selectedCategory', null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);
        const data = await fetchData("/category/list");

        const formattedCategories = data.map(category => ({
          id: category.id || category.category_id,
          name: category.name || category.category_name,
          description: category.description || category.category_description,
          backgroundColor: category.background_color || category.color || '#000000'
        }));

        setCategories(formattedCategories);
      } catch (err) {
        console.error('Error al cargar las categorías:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleCategorySelect = (e) => {
    if (
      e.target.className.includes('carousel-arrow') ||
      e.target.className.includes('logo-image') ||
      e.target.className.includes('volver-link')
    ) {
      return;
    }

    const currentCategory = categories[currentIndex];
    if (currentCategory) {
      setSelectedCategory(currentCategory.id);
      navigate('/juego-sinverguenza');
    }
  };

  const nextSlide = (e) => {
    e.stopPropagation(); // Evitar que el click se propague al contenedor
    setCurrentIndex((prevIndex) =>
      prevIndex === categories.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = (e) => {
    e.stopPropagation(); // Evitar que el click se propague al contenedor
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? categories.length - 1 : prevIndex - 1
    );
  };

  if (isLoading) {
    return (
      <div className="carousel-container loading">
        <div className="loading-text">Cargando categorías...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="carousel-container error">
        <div className="error-text">
          Error al cargar las categorías: {error}
        </div>
      </div>
    );
  }

  if (categories.length === 0) {
    return (
      <div className="carousel-container empty">
        <div className="empty-text">No hay categorías disponibles</div>
      </div>
    );
  }

  return (
    <div
      className="carousel-container"
      style={{
        backgroundColor: categoryColors[categories[currentIndex]?.name.toLowerCase()] || '#000000',
        cursor: 'pointer' // Añadimos cursor pointer para indicar que es clickeable
      }}
      onClick={handleCategorySelect} // Añadimos el click handler al contenedor principal
    >
      <div className="category-logo" onClick={e => e.stopPropagation()}>
        <Link to="/">
          <img
            src="/logo_blanco_s.png"
            alt="Sinvergüenza"
            className="logo-image"
          />
        </Link>
      </div>
      
      <button
        onClick={prevSlide}
        className="carousel-arrow carousel-arrow-left"
        aria-label="Categoría anterior"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="carousel-arrow carousel-arrow-right"
        aria-label="Siguiente categoría"
      >
        ›
      </button>

      <div className="carousel-content">
        <h1 className="category-title">
          {categories[currentIndex]?.name}
        </h1>
        <p className="category-description">
          {categories[currentIndex]?.description}
        </p>
        
        <Link 
          to="/seleccion-de-jugadores" 
          className="volver-link"
          onClick={e => e.stopPropagation()} // Evitar que el click se propague
        >
          volver
        </Link>
      </div>
    </div>
  );
};

export default CategorySelection;