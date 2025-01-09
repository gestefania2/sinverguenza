import React, { useState, useEffect } from 'react';
import { useModalControl } from '../../hooks/useModalControl.js';
import CreateModal from '../../components/modals/CreateModal';
import Navbar from '../../components/navbar/Navbar';
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

  useEffect(() => {
    fetchCards();
    fetchCategories();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await fetch('/player/card/new');
      const data = await response.json();
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
      const response = await fetch('/player/category/new');
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleCategoryClick = (category) => {
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

  const handleModalSuccess = () => {
    fetchCards();
    fetchCategories();
    closeModal();
  };

  return (
    <>
    <Navbar showLogo={false} />
    <div className="page-container">
    <div className="categories-section">
            <h1 className="title">
                <span style={{ color: '#000000' }}>m</span>
                <span style={{ color: '#FBBF24' }}>i</span>
                <span style={{ color: '#000000' }}>s</span>
                {' '}
                <span style={{ color: '#000000' }}>c</span>
                <span style={{ color: '#5e17eb' }}>a</span>
                <span style={{ color: '#000000' }}>r</span>
                <span style={{ color: '#5e17eb' }}>t</span>
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
          <h1>
            <span className="text-pink">mis</span>{' '}
            <span className="text-rainbow">cartas</span>
          </h1>
          <div className="menu-container">
            <button 
              onClick={() => setShowMenu(!showMenu)} 
              className="create-button"
            >
              CREAR +
            </button>
            {showMenu && (
              <div className="dropdown-menu">
                <button 
                  onClick={() => handleMenuClick('category')} 
                  className="menu-item"
                >
                  NUEVA CATEGORÍA
                </button>
                <button 
                  onClick={() => handleMenuClick('card')} 
                  className="menu-item"
                >
                  NUEVA CARTA
                </button>
              </div>
            )}
          </div>
        </header>

        <section className="questions-section">
          <h2 className="section-title">preguntas</h2>
          <ul className="cards-list">
            {filterCardsByCategory(cards.questions).map((card, index) => (
              <li key={`question-${index}`} className="card-item">
                {card.text}
              </li>
            ))}
          </ul>
        </section>

        <section className="answers-section">
          <h2 className="section-title">respuestas</h2>
          <ul className="cards-list">
            {filterCardsByCategory(cards.answers).map((card, index) => (
              <li key={`answer-${index}`} className="card-item">
                {card.text}
              </li>
            ))}
          </ul>
        </section>

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