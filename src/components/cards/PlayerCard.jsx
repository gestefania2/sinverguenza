import Button, { handleUpdate, handleDelete } from '../buttons/GenericButton';

function PlayerCard({ card_id, type, text, category_name }) {
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

            <a href="#">volver</a>

            <p>{category_name}</p>
        </div>
    )
};

export default PlayerCard;