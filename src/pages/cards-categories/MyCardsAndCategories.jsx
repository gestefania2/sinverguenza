import React, { useState, useEffect, useContext } from 'react';
import { useModalControl } from '../../hooks/useModalControl.js';
import CreateModal from '../../components/modals/CreateModal';
import Navbar from '../../components/navbar/Navbar';
import { ColorContext } from '../../components/navbar/Navbar';
import './MyCardsAndCategories.css';


const MyCardsAndCategories = () => {
  const [cards, setCards] = useState({
    questions: [],
    answers: []
  });
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { modalState, openModal, closeModal } = useModalControl();
  const [showMenu, setShowMenu] = useState(false);
  const { textColor } = useContext(ColorContext);

  useEffect(() => {
    fetchCards();
    fetchCategories();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await fetch('/player/card/list', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
          'Content-Type': 'application/json'
        }
      });
  
      console.log('Status:', response.status);
      const text = await response.text();
      console.log('Respuesta cruda:', text);
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = JSON.parse(text);
      setCards({
        questions: data.filter(card => card.type === 'question'),
        answers: data.filter(card => card.type === 'answer')
      });
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  };
  
  
  const fetchCategories = async () => {
    try {
      const response = await fetch('/player/category/list', { 
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filterCardsByCategory = (cards) => {
    if (!selectedCategory) return cards;
    return cards.filter(card => card.category_id === selectedCategory.id);
  };

  const handleMenuClick = (type) => {
    openModal(type);
    setShowMenu(false);
  };

  const handleModalSuccess = async () => {
    try {
      await fetchCards();
      await fetchCategories();
      closeModal();
    } catch (error) {
      console.error('Error actualizando datos:', error);
    }
  };

  return (
    <>
      <Navbar showLogo={false} />
      <div className="page-mycardsandcategories-container">
        <div className="categories-section">
          <h1 className="title-cards-categories">
            <span style={{ color: '#000000' }}>m</span>
            <span style={{ color: '#FBBF24' }}>i</span>
            <span style={{ color: '#000000' }}>s</span>
            {' '}
            <span style={{ color: '#000000' }}>c</span>
            <span style={{ color: '#5e17eb' }}>a</span>
            <span style={{ color: '#000000' }}>r</span>
            <span style={{ color: '#e6007e' }}>t</span>
            <span style={{ color: '#000000' }}>a</span>
            <span style={{ color: '#21a41d' }}>s</span>
            {' '}
            <span style={{ color: '#000000' }}>y</span>
            {' '}
            <span style={{ color: '#000000' }}>c</span>
            <span style={{ color: '#e6007e' }}>a</span>
            <span style={{ color: '#000000' }}>t</span>
            <span style={{ color: '#21a41d' }}>e</span>
            <span style={{ color: '#000000' }}>g</span>
            <span style={{ color: '#5e17eb' }}>o</span>
            <span style={{ color: '#000000' }}>r</span>
            <span style={{ color: '#FBBF24' }}>í</span>
            <span style={{ color: '#000000' }}>a</span>
            <span style={{ color: '#e6007e' }}>s</span>

          </h1>
        </div>
        <div className="menu-container-cards">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="create-button"
          >
            CREAR
          </button>
          {showMenu && (
            <div className="dropdown-menu">
              <button
                onClick={() => handleMenuClick('category')}
                className="menu-item-cards-categories"
              >
                NUEVA CATEGORÍA
              </button>
              <button
                onClick={() => handleMenuClick('card')}
                className="menu-item-cards-categories"
              >
                NUEVA CARTA
              </button>
            </div>
          )}
        </div>

        <div className="categories-container">
          <header className="categories-header">
            <h2 style={{ color: textColor }}>categorías</h2>
          </header>
          <ul className="categories-list">
            {categories.map(category => (
              <li
                key={category.id}
                onClick={() => handleCategoryClick(category)}
                className={`category-item ${selectedCategory?.id === category.id ? 'selected' : ''}`}
              >
                {category.category_name}
              </li>
            ))}
          </ul>
        </div>

        <div className="cards-container">
          <header className="cards-header">
            <h2 style={{ color: textColor }}>cartas</h2>
          </header>
          <div className="cards-section">
            <div className="questions-section">
              <ul className="cards-list">
                {filterCardsByCategory(cards.questions).map(card => (
                  <li key={card.id} className="card-item">
                    <div className="card-content">
                      <p>{card.text}</p>
                      <span className="card-type">Pregunta</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="answers-section">
              <ul className="cards-list">
                {filterCardsByCategory(cards.answers).map(card => (
                  <li key={card.id} className="card-item">
                    <div className="card-content">
                      <p>{card.text}</p>
                      <span className="card-type">Respuesta</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>


          {modalState.isOpen && (
            <CreateModal
              type={modalState.type}
              onClose={closeModal}
              onSuccess={handleModalSuccess}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default MyCardsAndCategories;