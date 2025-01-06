import React, { useState, useEffect } from 'react';
import fetchData from '../../api/apiCategories.js';
import { categoryColors } from '../../constants/categoryColors.js';
import { Link } from 'react-router-dom';
import './CategorySelection.css';

const CategorySelection = ({ playerId = null }) => {
  const [categories, setCategories] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);
        const data = await fetchData("/category/list");

        // Asumiendo que tu API devuelve un array de categorías
        const formattedCategories = data.map(category => ({
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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === categories.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
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
        backgroundColor: categoryColors[categories[currentIndex]?.name.toLowerCase()] || '#000000'
      }}
    >
      <div className="category-logo">
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
        <Link to="/selecciondejugadores" className="volver-link">
          volver
        </Link>
      </div>
    </div>
  );
};

export default CategorySelection;