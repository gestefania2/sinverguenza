import React from 'react';
import Button, { handleUpdate, handleDelete } from '../../components/buttons/GenericButton';
import { useNavigate } from 'react-router-dom';
import './CustomPlayerCards.css';

const CustomPlayerCards= ({ card_id, type, text, category_name }) => {
  const navigate = useNavigate();

  return (
    <div className="player-card">
      <div className="card-content">
        <h1>#{card_id}</h1>
        <span>{type}</span>
        <p>{text}</p>

        <div className="button-container">
          <Button
            id="update"
            onClick={(e) => handleUpdate(e, card_id)}>
            ACTUALIZAR
          </Button>
          
          <Button
            id="delete"
            onClick={(e) => handleDelete(e, card_id)}>
            BORRAR
          </Button>
        </div>

        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}>
          volver
        </a>

        <p>{category_name}</p>
      </div>
    </div>
  );
};

export default CustomPlayerCards;