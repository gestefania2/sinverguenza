function Notification({ message, isError }) {
    return (
        <div className={`notification ${isError ? 'error' : 'success'}`}>
            {message}
        </div>

    );
}
//utilizar para el logeo y registro 