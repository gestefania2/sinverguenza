
function Button({ id, onClick, children }) {
    return (
        <button
            id={id}
            onClick={onClick}
            className="generic-button"
        >
            {children}
        </button>
    )
 }
 
 export function handleUpdate(e, card_id) {
    e.preventDefault();
    console.log("Update", card_id)
 }
 
 export function handleDelete(e, card_id) {
    e.preventDefault();
    console.log("Delete", card_id)
 }
 
 export default Button;