import Button, { handleUpdate, handleDelete } from '../../components/buttons/GenericButton';
import { useNavigate } from 'react-router-dom';

function PlayerCard({ card_id, type, text, category_name }) {
    const navigate = useNavigate();

    return (
        <div className="player-card">
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

            <a href="#" onClick={(e) => {
                e.preventDefault();
                navigate(-1); // quizas aquí tenga que poner la ruta de la página que quiera exactamente (mis cartas)
            }}>volver</a>

            <p>{category_name}</p>
        </div>
    )
};

export default PlayerCard;